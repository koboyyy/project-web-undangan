<script>
	import LandingPage from '../lib/LandingPage.svelte';
	import InvitationPage from '../lib/InvitationPage.svelte';
	import Page3 from '../lib/Page3.svelte';
	import DetailEvent from '../lib/DetailEvent.svelte';
	import OurStory from '../lib/OurStory.svelte';
	import OurGallery from '../lib/OurGallery.svelte';
	import RsvpPage from '../lib/RsvpPage.svelte';
	import WeddingGift from '../lib/WeddingGift.svelte';
	import FooterPage from '../lib/FooterPage.svelte';

	// import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	// injectSpeedInsights();

	let open = false;

	function putarMusik() {
		var audio = document.getElementById('lagu');
		// @ts-ignore
		audio.play();
	}

	function openInvitation() {
		open = true;
		putarMusik();
	}
</script>

<main>
	{#if !open}
		<LandingPage {openInvitation} />
	{:else}
		<div id="Main-container overflow-hidden">
			<InvitationPage />
			<Page3></Page3>
			<DetailEvent></DetailEvent>
			<OurStory></OurStory>
			<OurGallery></OurGallery>
			<div class="container">
				<div class="rsvp-footer">
					<RsvpPage></RsvpPage>
					<WeddingGift></WeddingGift>
					<FooterPage></FooterPage>
				</div>
			</div>
		</div>
	{/if}

	<!-- Audio -->
	<audio id="lagu" src="/lagu/instrumen_melayu.mp3"></audio>
</main>

<style>
	.container {
		position: relative;
	}

	.rsvp-footer::before {
		content: '';
		background: url('/images/bg-fantasi-blue.webp') no-repeat center/cover;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.9;
		z-index: -1;
	}
</style>
