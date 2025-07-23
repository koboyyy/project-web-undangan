<!-- frontend/src/lib/WishesForm.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import supabase from '$lib/supabase';
  import Chat from './Chat.svelte';
  import NextComment from './NextComment.svelte';

  export let responseMessage = '';
  export let comments = [];

  let name = '';
  let message = '';
  let errors = { name: '', message: '' };
  let isSubmitted = false;

  const dispatch = createEventDispatcher();

  function validateForm() {
    let isValid = true;
    errors = { name: '', message: '' };

    if (name.trim().length < 2) {
      errors.name = 'Nama harus minimal 2 karakter';
      isValid = false;
    }
    if (message.trim().length < 5) {
      errors.message = 'Pesan harus minimal 5 karakter';
      isValid = false;
    }

    return isValid;
  }

  $: sortedComments = [...comments].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  async function handleSubmit() {
    if (!validateForm()) return;

    try {
      const { error } = await supabase.from('wishes').insert([{ name, message }]);
      if (error) throw error;

      responseMessage = 'Ucapan berhasil disimpan';
      isSubmitted = true;
      name = '';
      message = '';
      dispatch('submit', { message: responseMessage });
      dispatch('refreshComments');

      setTimeout(() => {
        isSubmitted = false;
        responseMessage = '';
      }, 3000);
    } catch (error) {
      responseMessage = 'Error saat mengirim formulir: ' + error.message;
      dispatch('submit', { message: responseMessage });
    }
  }
</script>

<div class="frame-wishes">
  <div class="title">
    <h2>Wishes</h2>
    <p>Berikan Ucapan & Do'a Terbaik Untuk kami</p>
  </div>

  {#if isSubmitted}
    <p class="response">Ucapan telah terkirim! Terima kasih.</p>
  {:else}
    <div class="wishes">
      <div class="container">
        <form on:submit|preventDefault={handleSubmit}>
          <div class="form-group">
            <label for="name">Nama:</label>
            <input
              type="text"
              id="name"
              bind:value={name}
              required
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {#if errors.name}
              <p class="error">{errors.name}</p>
            {/if}
          </div>
          <div class="form-group">
            <label for="message">Pesan:</label>
            <textarea
              id="message"
              bind:value={message}
              required
              aria-invalid={errors.message ? 'true' : 'false'}
            ></textarea>
            {#if errors.message}
              <p class="error">{errors.message}</p>
            {/if}
          </div>
          <button type="submit">Kirim</button>
        </form>
      </div>

      <NextComment {sortedComments} />
    </div>
  {/if}
</div>

<style>
  .wishes {
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #eff2f6;
    border-radius: 10px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }

  .title h2 {
    font-family: 'wasted-vindey', sans-serif;
    font-size: 30px;
    color: white;
  }

  .title p {
    font-size: 14px;
    color: white;
    width: 160px;
    font-family: 'AbhayaLibre', sans-serif;
  }

  .wishes form {
    padding: 15px;
    width: 100%;
    border-bottom: solid 1px rgba(0, 0, 0, 0.119);
    padding-bottom: 50px;
  }

  .wishes form input {
    background-color: white;
    border: solid 1px rgba(0, 0, 0, 0.115);
    width: 100%;
    padding: 7px 10px;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .wishes form textarea {
    background-color: white;
    border: solid 1px rgba(0, 0, 0, 0.115);
    width: 100%;
    padding: 7px 10px;
    margin-bottom: 15px;
  }

  .wishes button {
    font-size: 14px;
    font-weight: bold;
    padding: 5px 20px;
    background-color: #3b5998;
    cursor: pointer;
    border-radius: 2px;
    color: white;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  .response {
    color: #333;
    margin-top: 15px;
    text-align: center;
  }
</style>