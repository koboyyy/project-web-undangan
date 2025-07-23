<script>
	import { onMount } from 'svelte';

	let isVisible1 = false;
	let isVisible2 = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id === 'info1') {
							isVisible1 = true;
							observer.unobserve(entry.target);
						}
						if (entry.target.id === 'info2') {
							isVisible2 = true;
							observer.unobserve(entry.target);
						}
					}
				});
			},
			{ threshold: 0.3 }
		);

		observer.observe(document.getElementById('info1'));
		observer.observe(document.getElementById('info2'));
	});
</script>

<section class="foto-section">
	<div class="container">
		<div class="frame frame-left">
			<div class="wrapper">
				<img src="/images/foto1.webp" alt="" />
				<img src="/images/foto2.webp" alt="" />
				<img src="/images/foto3.webp" alt="" />
				<img src="/images/foto4.webp" alt="" />
			</div>
			<div class="frame-inset"></div>
			<div class="info-wrapper left">
				<div id="info1" class="info" class:slide-in={isVisible1}>
					<h1>Dia Santika, S.Pd</h1>
					<p>Putri dari Bapak Sopiyan dan Ibu Solihatun</p>
				</div>
			</div>
		</div>

		<div class="frame frame-right">
			<div class="wrapper">
				<img src="/images/foto4.webp" alt="" />
				<img src="/images/foto2.webp" alt="" />
				<img src="/images/foto3.webp" alt="" />
				<img src="/images/foto1.webp" alt="" />
			</div>
			<div class="frame-inset"></div>
			<div class="info-wrapper right">
				<div id="info2" class="info" class:slide-in={isVisible2}>
					<h1>M. Taufik Akbar. S,T</h1>
					<p>Putra dari Bapat Arizal dan ibu Rahmalina</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		overflow: hidden;
	}

	.wrapper img {
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		object-position: center;
		object-fit: cover;
	}

	.frame-left .wrapper img {
		animation: slide 30s infinite;
	}

	.frame-right .wrapper img {
		animation: slide 30s 2s infinite;
	}

	@keyframes slide {
		0%,
		15% {
			transform: translateX(0);
		}
		20%,
		35% {
			transform: translateX(-100%);
		}
		40%,
		55% {
			transform: translateX(-200%);
		}
		60%,
		75% {
			transform: translateX(-300%);
		}
		80%,
		95% {
			transform: translateX(-200%);
		}
		100% {
			transform: translateX(0);
		}
	}

	.foto-section {
		display: flex;
		justify-content: center;
	}

	.container {
		padding: 60px 0;
		width: 100%;
		max-width: 800px;
		overflow: hidden;
		position: relative;
	}

	.container::before {
		content: '';
		background: url('/images/pohon-bw.jpg') no-repeat center/cover;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.4;
		z-index: 0;
	}

	.frame {
		width: 65%;
		height: 355px;
		margin-bottom: 100px;
		position: relative;
		box-shadow: 0 0 10px 2px rgb(83, 83, 83);
		background-size: cover;
		background-position: center;
		z-index: 1;
		transition:
			background-image 1s ease,
			opacity 1s ease;
	}

	.frame-right {
		margin-left: auto;
	}

	.frame::after {
		content: 'Te Bride';
		font-size: 60px;
		position: absolute;
		width: max-content;
		bottom: 33%;
		writing-mode: sideways-lr;
		font-family: 'Creattion', sans-serif;
	}

	.frame-left::after {
		left: 100%;
	}

	.frame-right::after {
		right: 97%;
	}

	.frame-inset {
		position: absolute;
		top: 50%;
		left: 50%;
		border: solid white 3px;
		width: 90%;
		height: 90%;
		transform: translate(-50%, -50%);
	}

	.info-wrapper {
		position: absolute;
		top: 280px;
		height: 135px;
	}

	.info-wrapper.left {
		left: 20%;
	}

	.info-wrapper.right {
		right: 20%;
	}

	.info {
		background-color: #051d30;
		color: white;
		border-radius: 10px 20px;
		padding: 20px 25px;
		width: 100%;
		min-width: 270px;
		opacity: 0;
		transition:
			transform 1s ease,
			opacity 1s ease;
	}

	.info h1 {
		font-family: 'wasted-vindey', sans-serif;
		font-size: 25px;
	}

	.info p {
		font-family: 'Nunito-Regular', sans-serif;
		font-size: 13px;
	}

	.info-wrapper.left .info {
		transform: translateX(-50%);
		opacity: 0;
	}

	.info-wrapper.right .info {
		transform: translateX(50%);
		opacity: 0;
	}

	.info-wrapper.left .info.slide-in {
		transform: translateX(0);
		opacity: 1;
	}

	.info-wrapper.right .info.slide-in {
		transform: translateX(0);
		opacity: 1;
	}

	.slide-in {
		opacity: 1;
	}
</style>
