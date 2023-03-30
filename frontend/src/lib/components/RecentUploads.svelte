<script lang="ts">
	export let images: any[];
	export let dir: string;
</script>

<div class="recent-container">
	<h2 class="general-header">
		<i class="fa-solid fa-images"></i>
		Recent Uploads
	</h2>
	{#if images.length > 0}
	<div class="recent-images">
		{#each images as { filename, title, uniqueId }}
			<a href="/gallery/{uniqueId}">
				<img src="{dir}/uploads/{filename}" alt="{title}">
			</a>
		{/each}
	</div>
	{/if}
</div>

<style>
	.recent-container {
		width: 100%;
		height: min-content;
		margin-top: 20px;
		box-shadow: 0 2px 8px #333333;
	}

	.recent-images {
		display: flex;
		justify-content: space-around;
		height: min-content;
		padding: 20px;
		background-color: #ffffff;
		gap: 5px;
	}

	a {
		width: 140px;
		height: 140px;
		box-shadow: 0 0 3px 1px #000000;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
