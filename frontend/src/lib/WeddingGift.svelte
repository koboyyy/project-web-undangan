<section>
	<div class="container">
		<div class="wedding-gift">
			<h3>Wedding Gift</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore quia eveniet quam
				dolorem, consectetur, quaerat accusantium cumque alias eos omnis? Quo corrupti eum possimus,
				doloribus nam iusto unde nostrum!
			</p>
		</div>

		<div class="via">
			<div class="via-1">
				<img src="/images/bri-300x300.png" alt="" />
				<p>No. Rekening</p>
				<span>93247032494</span>
				<span>an. dfjefe</span>
				<button><i class="fa-solid fa-copy"></i> Salin</button>
			</div>
			<div class="via-2">
				<img src="/images/logo-bca-putih-300x93.png" alt="" />
				<p>No. Rekening</p>
				<span>93247032494</span>
				<span>an. dfjefe</span>
				<button><i class="fa-solid fa-copy"></i> Salin</button>
			</div>
			<div class="via-3">
				<div>KADO FISIK</div>
				<p>Kirim kado fisik ke alamat kami:</p>
				<button><i class="fa-solid fa-copy"></i> Salin Alamat</button>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		width: 100%;
		padding: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wedding-gift {
		background-color: #051d30;
		padding: 20px;
		text-align: center;
		color: white;
		border-radius: 20px 20px 0 0;
		margin-bottom: 25px;
	}

	.wedding-gift h3 {
		font-family: 'wasted-vindey', sans-serif;
		font-size: 30px;
		margin-bottom: 5px;
	}

	.wedding-gift p {
		font-size: 14px;
		font-family: 'AbhayaLibre', sans-serif;
	}

	p {
		font-family: 'Nunito-Regular', sans-serif;
		font-size: 13px;
		margin: 4px 0;
	}

	span {
		font-family: 'Nunito-Regular', sans-serif;
		font-size: 10px;
	}

	.via {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 250px 1fr;
		grid-template-areas:
			'via1 via2'
			'via3 via3';
		row-gap: 15px;
		column-gap: 5px;
	}

	.via-1 {
		grid-area: via1;
		background-color: #051d30;
		border-radius: 20px;
		padding: 20px;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.via-2 {
		grid-area: via2;
		background-color: #051d30;
		border-radius: 20px;
		padding: 20px;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.via-3 {
		grid-area: via3;
		background-color: #051d30;
		border-radius: 20px;
		padding: 20px;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.via-3 p,
	.via-3 div {
		font-family: 'Nunito-Regular', sans-serif;
		font-size: 13px;
	}

	.via-3 div {
		font-size: 18px;
		letter-spacing: 5px;
	}

	.via img {
		width: 100px;
	}

	button {
		font-family: 'Domine', serif;
		margin-top: 10px;
		padding: 4px 7px;
		background-color: #6a6a6a;
		border-radius: 7px;
		font-size: 10px;
		cursor: pointer;
		transition: all 0.5s ease;
	}

	button:hover {
		filter: brightness(0.7);
	}
</style>
