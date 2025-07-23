<script lang="ts">
	import { fade } from 'svelte/transition';
	import PageDate from './PageDate.svelte';
	import { onMount } from 'svelte';

	let cardVisibilities: { [key: string]: boolean } = {};

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const target = entry.target as HTMLElement; // Type assertion
						cardVisibilities = {
							...cardVisibilities,
							[target.dataset.cardId]: true
						};
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.3
			}
		);

		const infoCards = document.querySelectorAll('.info-card') as NodeListOf<HTMLElement>;
		infoCards.forEach((card, index) => {
			card.dataset.cardId = index.toString(); // Use string for dataset
			observer.observe(card);
		});

		return () => {
			infoCards.forEach((card) => observer.unobserve(card));
		};
	});
</script>

<section in:fade={{ duration: 1000 }} class="main-section">
	<div class="main-container">
		<div class="wedding-banner">
			<div class="wrapper-title">
				<p class="banner-text-small">The Wedding of</p>
				<h1 class="couple-names">DEA & DEDI</h1>
			</div>
			<div class="wrapper-date">
				<PageDate></PageDate>
			</div>
		</div>

		<div>
			<div class="content-frame-container">
				<div class="ornament-decoration ornament-decoration-left"></div>
				<div class="ornament-decoration ornament-decoration-right"></div>
				<div class="info-card" class:up={cardVisibilities[0]}>
					<div class="profile-image"></div>
					<p class="card-paragraph">
						Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan
						untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan
						di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
						terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
					</p>
					<p class="card-paragraph">(Qs Ar-Rum : 21)</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	:root {
		--text-color-white: rgb(255, 255, 255);
		--bg-dark-blue: #051d30;
		--bg-color-white: white;
		--ornament-opacity: 0.2;
	}

	.main-container {
		width: 100%;
	}

	.main-section {
		overflow-x: hidden;
	}

	.wedding-banner {
		color: var(--text-color-white);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		position: relative;
		width: 100%;
		height: 90vh;
	}

	.wedding-banner::before {
		content: '';
		background: url('/images/bg-bangau.webp') no-repeat center/cover;
		animation: inset 5s ease forwards;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: -1;
		scale: 1 1.15;
	}

	.wrapper-title {
		text-align: center;
		margin-top: 110px;
	}

	.wrapper-date {
		transform: translateY(50px);
		animation: slide-up 2s 0.7s ease forwards;
		margin-bottom: 60px;
	}

	.banner-text-small {
		font-size: 16px;
		letter-spacing: 3px;
		font-family: 'DomineRegular', serif;
		color: #4e4e4e;
		scale: 0.5;
		animation: pop 1s ease forwards;
	}

	.couple-names {
		font-family: 'CinzelDecorative', sans-serif;
		font-size: 34px;
		margin-bottom: 160px;
		color: #4e4e4e;
		transform: translateY(20px);
		animation: slide-up 2s ease forwards;
	}

	@keyframes slide-up {
		to {
			transform: translateY(0);
		}
	}

	@keyframes pop {
		to {
			scale: 1;
		}
	}

	.content-frame-container {
		background-color: var(--bg-dark-blue);
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 120px;
		padding-bottom: 120px;
		clip-path: polygon(50% 0%, 100.2% 5%, 100.2% 100.3%, 0% 100.3%, 0% 5%);
		position: relative;
		overflow: hidden;
	}

	.content-frame-container::before {
		content: '';
		background: url('/images/Pohon.webp') no-repeat center/cover;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: var(--ornament-opacity);
		z-index: 0;
		transform: scale(1.5) translateY(130px);
	}

	.ornament-decoration {
		background: url('/images/Pohon2.webp') no-repeat center/cover;
		width: 500px;
		height: 300px;
		position: absolute;
		z-index: 4;
	}

	.ornament-decoration-left {
		width: 565px;
		transform: rotate(20deg);
		bottom: 330px;
		left: -350px;
		z-index: 0;
		animation: slide1 5s infinite ease-in-out;
	}

	.ornament-decoration-right {
		transform: rotate(-20deg);
		right: -250px;
		bottom: 0px;
		animation: slide2 4s infinite ease-in-out;
	}

	.info-card {
		width: 250px;
		background-color: var(--bg-color-white);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 35px;
		flex-direction: column;
		padding: 30px 20px;
		text-align: center;
		font-size: 0.8em;
		border-top-left-radius: 100% 180px;
		border-top-right-radius: 100% 180px;
		position: relative;
		z-index: 3;
		transform: translateY(20%);
		transform: scale(0.7);
		opacity: 0.5;
		transition: all 0.5s ease-in-out;
	}

	.info-card.up {
		transform: translateY(0) !important;
		transform: scale(1) !important;
		opacity: 1;
	}

	.info-card::before,
	.info-card::after {
		content: '';
		background-color: var(--bg-color-white);
		position: absolute;
		bottom: 0;
		width: 6px;
		height: 85%;
	}

	.info-card::before {
		left: -14px;
	}

	.info-card::after {
		right: -14px;
	}

	.profile-image {
		background-image: url('/images/foto7.webp');
		background-position: center;
		background-size: cover;
		width: 170px;
		height: 250px;
		background-color: bisque;
		border-radius: 200px;
	}

	.card-paragraph {
		font-family: 'AbhayaLibre', sans-serif;
		font-size: 14px;
	}

	@keyframes inset {
		from {
			transform: scale(1.3);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes slide1 {
		50% {
			transform: rotate(10deg);
		}
	}

	@keyframes slide2 {
		50% {
			transform: rotate(-10deg);
		}
	}
</style>
