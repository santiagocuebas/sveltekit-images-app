<script lang="ts">
	import type { PageData } from './$types';
	import Image from '$lib/components/Image.svelte';

	export let data: PageData;

	let images: any[] = [];

	images = data.images;
</script>

<div class="secondary-container">
	<h2 class="gallery-header">
		<i class="fa-solid fa-images"></i>
		Gallery
	</h2>
	<div class="gallery-container">
		{#each images as image}
			<Image
				id={image.uniqueId}
				filename={image.filename}
				alt={image.title}
			/>
		{/each}
	</div>
</div>

<style>
	.secondary-container {
		width: 80%;
		max-width: 1510px;
		min-width: 280px;
		margin: 20px auto;
		box-shadow: 0 2px 8px #333333;
	}

	.gallery-header {
		padding: 10px;
		background-color: #5383d3;
		color: #ffffff;
	}

	.gallery-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, 240px);
		grid-auto-rows: min-content;
		justify-content: center;
		width: 100%;
		min-height: 94%;
		padding: 20px;
		background-color: #ffffff;
		gap: 10px;
	}
</style>
