<!-- frontend/src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import RSVPForm from '$lib/RSVPForm.svelte';
  import WishesForm from '$lib/WishesForm.svelte';
  import NextComment from '$lib/NextComment.svelte';
  import supabase from '$lib/supabase';

  let comments = [];
  let responseMessage = '';

  async function fetchComments() {
    try {
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      comments = data;
    } catch (error) {
      responseMessage = 'Error saat mengambil komentar: ' + error.message;
    }
  }

  function handleSubmit(event) {
    responseMessage = event.detail.message;
  }

  function handleRefreshComments() {
    fetchComments();
  }

  onMount(fetchComments);
</script>

<section>
  <div class="main-container overflow-hidden">
    <div class="frame-rsvp-wishes">
      <RSVPForm {responseMessage} on:submit={handleSubmit} />
      <WishesForm {comments} {responseMessage} on:submit={handleSubmit} on:refreshComments={handleRefreshComments} />
    </div>
  </div>
</section>

<style>
  .main-container {
    width: 100%;
    padding: 50px 15px;
  }

  .frame-rsvp-wishes {
    width: 100%;
    padding: 30px 15px;
    background-color: #051d30;
    border-radius: 20px;
  }
</style>