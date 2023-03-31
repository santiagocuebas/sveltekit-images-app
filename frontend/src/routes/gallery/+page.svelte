<script lang="ts">
	import type { PageData } from './$types';
	import Image from '$lib/components/Image.svelte';

	export let data: PageData;
</script>

<div class="gallery-container">
	<h2>
		<i class="fa-solid fa-images"></i>
		Gallery
	</h2>
	<div>
		{#each data.images as image}
			<Image id={image.uniqueId} filename={image.filename} alt={image.title} />
		{/each}
	</div>
</div>

<style>
	.gallery-container {
		width: 90%;
		max-width: 1530px;
		min-width: 530px;
		min-height: 830px;
		background-color: #ffffff;
		box-shadow: 0 2px 8px #333333;
	}

	h2 {
		padding: 13px;
		background-color: #5383d3;
		font-size: 21px;
		color: #ffffff;
	}

	.gallery-container div {
		display: grid;
		grid-template-columns: repeat(auto-fit, 240px);
		grid-auto-rows: min-content;
		justify-content: center;
		width: 100%;
		min-height: min-content;
		padding: 20px;
		gap: 10px;
	}
</style>
