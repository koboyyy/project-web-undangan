<script>
	export let comment;

	function getDaysAgo(createdAt) {
		const now = new Date('2025-07-23T12:10:00+07:00'); // Tanggal dan waktu saat ini (12:10 WIB)
		const createdDate = new Date(createdAt);
		const diffTime = Math.abs(now - createdDate);
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

		// Format waktu dari createdAt dalam WIB (UTC+7)
		const createdDateWIB = new Date(createdDate.getTime() + 7 * 60 * 60 * 1000); // Konversi ke WIB
		const hours = createdDateWIB.getUTCHours().toString().padStart(2, '0');
		const minutes = createdDateWIB.getUTCMinutes().toString().padStart(2, '0');
		const timeString = `${hours}:${minutes} WIB`;

		return diffDays === 0 ? `Hari ini ${timeString}` : `${diffDays} hari lalu ${timeString}`;
	}

	function getRandomColor() {
		// Menggunakan rentang warna yang lebih gelap (0-127 untuk RGB)
		const r = Math.floor(Math.random() * 128); // Merah: 0-127
		const g = Math.floor(Math.random() * 128); // Hijau: 0-127
		const b = Math.floor(Math.random() * 128); // Biru: 0-127

		// Konversi ke format hex
		const toHex = (num) => num.toString(16).padStart(2, '0');
		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	}

	// Warna acak untuk setiap render (dapat disesuaikan untuk konsistensi per nama jika diperlukan)
	$: profileColor = getRandomColor();
	$: firstLetter = comment.name.charAt(0).toUpperCase();
	$: daysAgo = getDaysAgo(comment.created_at);
</script>

<div class="chat">
	<div class="foto-profil" style="background-color: {profileColor}">
		<span class="initial">{firstLetter}</span>
	</div>
	<div class="chat-content">
		<p class="name"><strong>{comment.name}</strong></p>
		<p class="message">{comment.message}</p>
		<p class="time">{daysAgo}</p>
	</div>
</div>

<style>
	.chat {
		display: flex;
		align-items: flex-start;
		padding: 15px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.119);
		max-width: 100%;
	}

	.foto-profil {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 15px;
		flex-shrink: 0;
	}

	.initial {
		font-family: Arial, Helvetica, sans-serif;
		color: white;
		font-size: 12px;
		font-weight: bold;
		text-transform: uppercase;
	}

	.chat-content {
		flex-grow: 1;
	}

	.name {
		font-size: 14px;
		margin: 0;
		color: #3b5998; /* Warna mirip dengan hijau di gambar */
		font-weight: bold;
	}

	.message {
		font-size: 14px;
		margin: 5px 0;
		color: #333;
	}

	.time {
		font-size: 12px;
		color: #666;
		margin: 0;
	}
</style>
