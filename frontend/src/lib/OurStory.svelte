<section>
	<div class="container">
		<div class="title">Our Story</div>

		<div class="wrapper">
			<div class="foto" style="background-image: url('/images/Story1.jpg');"></div>
			<div class="sub-title">Awal Cerita</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus nulla similique
				provident ullam fugit molestiae omnis suscipit voluptate non architecto, ipsa adipisci
				cumque quo distinctio pariatur ex accusamus modi.
			</p>
		</div>

		<div class="wrapper">
			<div class="foto" style="background-image: url('/images/Story2.jpg');"></div>
			<div class="sub-title">Pertengahan Cerita</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus nulla similique
				provident ullam fugit molestiae omnis suscipit voluptate non architecto, ipsa adipisci
				cumque quo distinctio pariatur ex accusamus modi.
			</p>
		</div>

		<div class="wrapper">
			<div class="foto" style="background-image: url('/images/Story3.jpg');"></div>
			<div class="sub-title">Akhir Cerita</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus nulla similique
				provident ullam fugit molestiae omnis suscipit voluptate non architecto, ipsa adipisci
				cumque quo distinctio pariatur ex accusamus modi.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		width: 100%;
		min-height: 100vh;
		background-color: #051d30;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 20px;
		padding: 50px;
		box-sizing: border-box;
		position: relative;
	}

	.container::before {
		content: '';
		background: url('/images/bg-scract.webp') no-repeat center/cover;
		opacity: 0.2;
		filter: brightness(0.3);
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 0;
	}

	.title {
		color: white;
		font-size: 30px;
		font-family: 'wasted-vindey', sans-serif;
		text-align: center;
	}

	.sub-title {
		font-family: 'AbhayaLibre', sans-serif;
		color: white;
		font-size: 20px;
	}

	p {
		font-size: 14px;
		font-family: 'AbhayaLibre', serif;
		color: white;
		max-width: 600px;
		width: 80%;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
		text-align: center;
		max-width: 600px; /* Membatasi lebar wrapper */
	}

	.foto {
		width: 330px;
		height: 185px;
		border-radius: 20px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat; /* Perbaikan typo dari 'none' ke 'no-repeat' */
	}

	.foto,
	p {
		transform: translateY(100%);
		opacity: 0.5;
		animation: slide linear forwards;
		animation-timeline: view();
		animation-range: 50px 300px;
	}

	.sub-title {
		animation: fade-in 1s forwards;
		animation-timeline: view();
	}

	@keyframes fade-in {
		from {
			opacity: 0.7;
			scale: 0;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	}

	@keyframes slide {
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	/* Media query untuk perangkat mobile */
	@media (max-width: 768px) {
		.container {
			padding: 20px;
		}

		.foto {
			width: 100%;
			max-width: 300px;
			height: 150px;
		}

		.title {
			font-size: 24px;
		}

		.sub-title {
			font-size: 18px;
		}

		p {
			font-size: 12px;
		}
	}
</style>
