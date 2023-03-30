<script lang="ts">
	import { timeago } from '../services/services.js';

  export let image: any;
  export let alert: boolean;
  export let dir: string;

	const changeAlert = () => alert = true;
</script>

<div class="image-container">
	<h2>
		<i class="fa-solid fa-image"></i>
		{image.title}
		<button name="{image.uniqueId}" on:click|preventDefault={changeAlert}>
			Delete
		</button>
	</h2>
	<img src="{dir}/uploads/{image.filename}" alt="{image.title}">
	{#if image.description}
	<div class="image-description">
		{image.description}
	</div>
	{/if}
	<div class="image-stats">
		<p>
			<i class="fa-solid fa-eye"></i>
			{image.views}
		</p>
		<p>
			<i class="fa-regular fa-clock"></i>
			{timeago(image.createdAt)}
		</p>
	</div>
</div>

<style>
	.image-container {
		display: grid;
		grid-auto-rows: min-content;
		width: 50%;
		min-width: 500px;
		max-width: 800px;
		height: min-content;
		background-color: #ffffff;
		box-shadow: 0 2px 8px #777777;
		row-gap: 20px;
	}

	h2 {
		display: flex;
		position: relative;
		align-items: center;
		width: 100%;
		padding: 20px;
		background-color: #5383d3;
		color: #ffffff;
		gap: 5px;
	}

	button {
		position: absolute;
		width: min-content;
		height: min-content;
		right: 20px;
		padding: 8px 24px;
		border: none;
		border-radius: 4px;
		background-color: #e23434;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
		gap: 5px;
	}

	button:hover {
		background-color: #f23434;
	}

	img {
		width: 100%;
	}

	.image-description {
		padding: 0 20px;
		text-align: center;
	}

	.image-stats {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		padding: 20px;
		background-color: #5383d3;
		color: #ffffff;
	}
</style>
