<script lang="ts">
	import { timeago } from '../services/services.js';

  export let image: any;
  export let alert: boolean;

	const changeAlert = () => alert = true;
</script>

<div class="image-container">
	<h1 class="image-title general-header">
		<i class="fa-solid fa-image"></i>
		{image.title}
		<button
			class="image-delete"
			name="{image.uniqueId}"
			on:click|preventDefault={changeAlert}
		>
			<i class="fa-solid fa-xmark"></i>
			Delete
		</button>
	</h1>
	<img class="image-content" src="http://localhost:4200/uploads/{image.filename}" alt="">
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
		min-width: 450px;
		width: 30%;
		height: min-content;
		max-width: 600px;
		margin: 10px auto;
		background-color: #ffffff;
		box-shadow: 0 2px 8px #777777;
		row-gap: 20px;
	}

	.image-title {
		display: flex;
		align-items: center;
		width: 100%;
		margin: 0;
		padding: 20px;
		font-size: 48px;
		background-color: #5383d3;
		color: hsl(0, 0%, 100%);
		gap: 5px;
	}

	.image-delete {
		display: flex;
		align-items: center;
		width: min-content;
		height: min-content;
		margin-left: auto;
		padding: 8px 24px;
		border: none;
		border-radius: 4px;
		background-color: #e23434;
		font-size: 20px;
		font-weight: 600;
		color: #ffffff;
		cursor: pointer;
		gap: 5px;
	}

	.image-delete:hover {
		background-color: #f23434;
	}

	.image-content {
		width: 100%;
		padding: 0 20px;
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
