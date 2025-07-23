<!-- frontend/src/lib/RSVPForm.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import supabase from '$lip/supabase';

  export let responseMessage = '';

  let nameKehadiran = '';
  let address = '';
  let kehadiran = '';
  let errors = { name: '', address: '', kehadiran: '' };
  let isSubmitted = false;

  const dispatch = createEventDispatcher();

  function validateForm() {
    let isValid = true;
    errors = { name: '', address: '', kehadiran: '' };

    if (nameKehadiran.trim().length < 2) {
      errors.name = 'Nama harus minimal 2 karakter';
      isValid = false;
    }
    if (address.trim().length < 5) {
      errors.address = 'Alamat harus minimal 5 karakter';
      isValid = false;
    }
    if (!kehadiran) {
      errors.kehadiran = 'Pilih status kehadiran';
      isValid = false;
    }

    return isValid;
  }

  async function handleSubmitKehadiran() {
    if (!validateForm()) return;

    try {
      const { error } = await supabase
        .from('buku_hadir')
        .insert([{ name: nameKehadiran, address, kehadiran }]);

      if (error) throw error;

      responseMessage = 'RSVP berhasil disimpan';
      isSubmitted = true;
      nameKehadiran = '';
      address = '';
      kehadiran = '';
      dispatch('submit', { message: responseMessage });

      // Reset confirmation message after 3 seconds
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

<div class="frame-rsvp">
  <div class="title">
    <h2>RSVP</h2>
    <p>Isi Buku Tamu Online Pernikahan kami</p>
  </div>

  {#if isSubmitted}
    <p class="response">RSVP telah terkirim! Terima kasih.</p>
  {:else}
    <form on:submit|preventDefault={handleSubmitKehadiran}>
      <input
        type="text"
        name="nama"
        id="nama"
        placeholder="Masukkan Nama"
        bind:value={nameKehadiran}
        aria-invalid={errors.name ? 'true' : 'false'}
      />
      {#if errors.name}
        <p class="error">{errors.name}</p>
      {/if}

      <input
        type="text"
        name="alamat"
        id="alamat"
        placeholder="Masukkan Alamat"
        bind:value={address}
        aria-invalid={errors.address ? 'true' : 'false'}
      />
      {#if errors.address}
        <p class="error">{errors.address}</p>
      {/if}

      <select
        name="kehadiran"
        id="kehadiran"
        bind:value={kehadiran}
        aria-invalid={errors.kehadiran ? 'true' : 'false'}
      >
        <option value="" disabled selected>Pilih Kehadiran</option>
        <option value="Pasti hadir">Saya Pasti Hadir</option>
        <option value="Akan hadir">Saya Akan Hadir</option>
        <option value="Tidak hadir">Saya Tidak Hadir</option>
      </select>
      {#if errors.kehadiran}
        <p class="error">{errors.kehadiran}</p>
      {/if}

      <button type="submit">Kirim Sekarang</button>
    </form>
  {/if}
</div>

<style>
  .frame-rsvp {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
    margin-bottom: 50px;
  }

  .title h2 {
    font-family: 'wasted-vindey', sans-serif;
    font-size: 30px;
    color: white;
  }

  p {
    font-size: 14px;
    color: white;
    width: 160px;
    font-family: 'AbhayaLibre', sans-serif;
  }

  .frame-rsvp input,
  .frame-rsvp select {
    width: 100%;
    padding: 8.4px 10px;
    border-radius: 4px;
    background-color: white;
  }

  .frame-rsvp button {
    background-color: black;
    border-radius: 20px;
    width: 100%;
    padding: 8px;
    color: white;
    font-weight: bolder;
    cursor: pointer;
  }

  .frame-rsvp form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  .response {
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
</style>