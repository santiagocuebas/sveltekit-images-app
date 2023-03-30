<script lang="ts">
	let visible = false;

	const showForm = () => visible = !visible;
</script>

<div>
	<h2>
		<i class="fa-solid fa-comment"></i> 
		Comment
		<button on:click={showForm}>
			<i class="fa-solid fa-angle-down"></i>
		</button>
	</h2>
	{#if visible}
		<slot></slot>
	{/if}
</div>

<style>
	div {
		width: 50%;
		min-width: 500px;
		max-width: 800px;
		height: min-content;
		box-shadow: 0 2px 8px #777777;
		background-color: #ffffff;
	}

	h2 {
		display: flex;
		position: relative;
		align-items: center;
		padding: 20px;
		background-color: #5383d3;
		color: #ffffff;
		gap: 5px;
	}

	button {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		width: 36px;
		height: 36px;
		right: 20px;
		border: none;
		border-radius: 50%;
		background-color: #63c187;
		cursor: pointer;
	}

	button i {
		width: 100%;
		height: 16px;
		border-radius: 50%;
		font-size: 20px;
		color: #ffffff;
	}
</style>
