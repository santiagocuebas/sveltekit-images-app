<script lang="ts">
	import { DIR } from '../services/config.js';

	export let images: any[];
</script>

<div class="view-container">
	<h2 class="general-header">
		<i class="fa-solid fa-images"></i>
		Most vieweds
	</h2>
	{#if images.length > 0}
	<div>
		{#each images as { filename, title, uniqueId }}
			<a href="/gallery/{uniqueId}">
				<img src="{DIR}/uploads/{filename}" alt="{title}">
			</a>
		{/each}
	</div>
	{/if}
</div>

<style>
	.view-container {
		width: 100%;
		height: min-content;
		margin-top: 10px;
		box-shadow: 0 2px 8px #333333;
	}

	.view-container div {
		display: flex;
		justify-content: space-around;
		height: min-content;
		padding: 10px 5px;
		background-color: #ffffff;
	}

	a {
		width: 80px;
		height: 80px;
		box-shadow: 0 0 3px #000000;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>