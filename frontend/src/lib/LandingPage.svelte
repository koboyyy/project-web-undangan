<script>
	import { fade } from 'svelte/transition';

	// Properti yang diterima dari komponen induk.
	// Digunakan untuk menangani aksi membuka undangan.
	export let openInvitation;

	// Variabel untuk nama tamu, bisa diubah sesuai kebutuhan atau dijadikan prop.
	let guestName = 'Adhan dan Partner';
</script>

<section in:fade={{ duration: 1000 }} class="invitation-cover">
	<div class="invitation-background">
		<div class="content-wrapper">
			<div class="header-section">
				<h2 class="pre-title">THE WEDDING OF</h2>
				<h1 class="main-title">Dhea & Dedi</h1>
			</div>

			<div class="guest-info-section">
				<h2 class="greeting-text">Kepada YTH</h2>
				<h1 class="guest-name">{guestName}</h1>
				<button on:click={openInvitation} class="open-button">Open Invitation</button>
			</div>
		</div>
	</div>
</section>

<style>
	/* Variabel CSS untuk kemudahan pengelolaan warna */
	:root {
		--primary-text-color: #ffffff;
		--button-border-color: #ffffff;
		--button-hover-bg: #ffffff;
		--button-hover-text: rgb(70, 70, 70);
	}

	/* Kontainer utama untuk halaman sampul */
	.invitation-cover {
		width: 100%;
		height: 100vh;
	}

	/* Latar belakang dengan gambar */
	.invitation-background {
		background-image: url('/images/foto4.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px; /* Sedikit padding agar konten tidak terlalu mepet tepi */
		box-sizing: border-box; /* Pastikan padding tidak menambah ukuran elemen */
	}

	/* Wrapper untuk konten utama agar terpusat */
	.content-wrapper {
		display: flex;
		flex-direction: column;
		padding: 30px;
		align-items: center;
		height: 100%;
		width: 100%;
		justify-content: space-between;
		max-width: 600px; /* Batasi lebar maksimum untuk keterbacaan di layar besar */
	}

	/* Bagian Judul Pernikahan */
	.header-section {
		text-align: center;
		font-family: serif; /* Atur font secara spesifik jika dibutuhkan */
	}

	.pre-title {
		font-family: 'AbhayaLibre';
		color: var(--primary-text-color);
		font-size: 18px;
		letter-spacing: 3px;
		margin-top: 1rem;
		margin-bottom: 15px; /* mt-4 mb-7 */
	}

	.main-title {
		font-family: 'BrittanySignature', serif;
		font-size: 3.125rem;
		color: var(--primary-text-color);
	}

	/* Bagian Informasi Tamu dan Tombol */
	.guest-info-section {
		text-align: center;
		margin-bottom: 100px;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1.2rem;
	}

	.greeting-text {
		font-family: 'AbhayaLibre';
		color: var(--primary-text-color);
		font-size: 18px; /* text-1xl */
	}

	.guest-name {
		font-size: 1.875rem; /* text-3xl */
		font-family: serif;
		color: var(--primary-text-color);
	}

	.open-button {
		border-radius: 50px; /* rounded-[50px] */
		border: 4px solid var(--button-border-color);
		color: var(--primary-text-color);
		padding: 0.5rem 1rem;
		width: max-content;
		font-size: 1.25rem; /* text-xl */
		font-weight: normal;
		transition: all 0.3s ease;
		cursor: pointer;
		background-color: transparent; /* Pastikan background transparan */
		text-decoration: none; /* Hapus underline jika diterapkan */
		display: inline-block; /* Agar padding bekerja dengan baik */
	}

	.open-button:hover {
		background-color: var(--button-hover-bg);
		color: var(--button-hover-text);
	}
</style>
