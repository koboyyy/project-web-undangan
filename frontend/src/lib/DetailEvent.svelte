<section>
	<div class="container">
		<div class="box box-top">
			<div class="title">Akad Nikah</div>
			<div class="date">Jum'at, 18 Juli 2025</div>
			<div><i class="fa-regular fa-clock"></i>16.00 WIB - Selesai</div>
			<div><i class="fa-solid fa-location-dot"></i>Jl. Gerbang Sari, Pematang Reba</div>
			<button class="bt-map">
				<a href="https://maps.app.goo.gl/AmMnj7mJwcWN8LSo8">
					<i class="fa-solid fa-location-dot"></i>
					Google Map
				</a>
			</button>
		</div>

		<div class="box box-bottom">
			<div class="title">Resepsi</div>
			<div class="date">Sabtu, 19 Juli 2025</div>
			<div><i class="fa-regular fa-clock"></i>11.00 WIB - Selesai</div>
			<div><i class="fa-solid fa-location-dot"></i>Jl. Gerbang Sari, Pematang Reba</div>
			<button class="bt-map">
				<a href="https://maps.app.goo.gl/AmMnj7mJwcWN8LSo8">
					<i class="fa-solid fa-location-dot"></i>
					Google map
				</a>
			</button>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		width: 100%;
		padding: 70px 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 50px;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.container::before {
		content: '';
		background: url('/images/bg-bangau2.webp') no-repeat center/cover;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: -1;
	}

	.box {
		font-family: 'AbhayaLibre';
		font-size: 15px;
		width: 100%;
		max-width: 600px;
		background-color: white;
		border-radius: 10px;
		box-shadow: 2px 0 10px 2px rgb(102, 102, 102);
		padding: 30px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.box-top {
		transform: translateX(-100%);
		animation: slide linear forwards;
	}

	.box-bottom {
		transform: translateX(100%);
		animation: slide linear forwards;
	}

	.title {
		font-family: 'wasted-vindey', sans-serif;
		font-size: 25px;
		letter-spacing: 4px;
	}

	.date {
		font-family: 'AbhayaLibre';
		font-size: 15px;
		letter-spacing: 2px;
		position: relative;
		padding: 0 0 5px 0;
	}

	.date::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #690a0a;
	}

	.bt-map {
		font-family: 'Nunito-Regular';
		width: max-content;
		background-color: black;
		border-radius: 10px;
		padding: 5px 10px;
		font-size: 13px;
		color: white;
		cursor: pointer;
		transition: all 1s ease;
	}

	.bt-map:hover {
		background-color: white;
		outline: 2px solid black;
		color: black;
	}

	a {
		text-decoration: none;
		color: white;
	}

	@keyframes slide {
		to {
			transform: translateX(0);
		}
	}
</style>
