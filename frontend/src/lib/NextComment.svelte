<script>
	import Chat from './Chat.svelte';

	let currentIndex = 1;
	export let comments = [];

	// Definisikan size1 dan size2 secara reaktif
	$: size1 = 6 * (currentIndex - 1);
	$: size2 = 6 * currentIndex;

	// Hitung jumlah total halaman
	$: totalPages = Math.ceil(comments.length / 6) || 1;

	// Fungsi untuk navigasi ke konten berikutnya
	function nextContent() {
		if (currentIndex < totalPages) {
			currentIndex += 1;
		}
	}

	// Fungsi untuk navigasi ke konten sebelumnya
	function prevContent() {
		if (currentIndex > 1) {
			currentIndex -= 1;
		}
	}

	// Fungsi untuk navigasi ke halaman tertentu
	function goToPage(page) {
		currentIndex = page;
	}

	// Fungsi untuk menghasilkan daftar nomor halaman (maksimal 5)
	$: pageNumbers = (() => {
		const maxButtons = 5;
		if (totalPages <= maxButtons) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const pages = [];
		const start = Math.max(2, currentIndex - 2);
		const end = Math.min(totalPages - 1, start + 2);

		// Selalu tambahkan halaman pertama
		pages.push(1);

		// Tambahkan elipsis jika start > 2
		if (start > 2) {
			pages.push('...');
		}

		// Tambahkan halaman di sekitar currentIndex (maks 3 nomor)
		for (let i = start; i <= end && pages.length < maxButtons; i++) {
			pages.push(i);
		}

		// Tambahkan elipsis jika end < totalPages - 1
		if (end < totalPages - 1) {
			pages.push('...');
		}

		// Selalu tambahkan halaman terakhir jika masih ada slot
		if (totalPages > 1 && pages.length < maxButtons) {
			pages.push(totalPages);
		}

		return pages;
	})();
</script>

<div class="content-container">
	<div class="chats">
		{#if comments.length === 0}
			<p>No comments available</p>
		{:else}
			{#each comments as comment, index}
				{#if index >= size1 && index < size2}
					<Chat {comment} />
				{/if}
			{/each}
		{/if}
	</div>

	<div class="nav-buttons">
		<button on:click={prevContent} disabled={currentIndex === 1}>Previous</button>

		<!-- Navigasi nomor halaman -->
		{#each pageNumbers as page}
			{#if page === '...'}
				<span class="ellipsis">...</span>
			{:else}
				<button
					on:click={() => goToPage(page)}
					class:active={currentIndex === page}
					disabled={currentIndex === page}
					aria-label={`Go to page ${page}`}>{page}</button
				>
			{/if}
		{/each}

		<button on:click={nextContent} disabled={currentIndex >= totalPages}>Next</button>
	</div>
</div>

<style>
	.content-container {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		width: 100%;
	}
	.nav-buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}

	.chats {
		width: 100%;
		height: 250px;
		overflow: auto;
		scrollbar-width: none;
		padding: 4px;
	}

	button {
		color: #3b5998;
		font-weight: bold;
		margin: 0 5px;
		font-size: 14px;
		cursor: pointer;
		border: none;
	}

	.nav-buttons button:not(:first-child):not(:last-child) {
		padding: 8px 0px;
	}

	.active {
		font-weight: bold;
		text-decoration-line: underline;
	}

	button:active {
		background-color: transparent !important;
	}

	/* .ellipsis {
		padding: 8px 12px;
		font-size: 16px;
		color: #333;
	} */

	button:disabled {
		cursor: not-allowed;
	}
</style>
