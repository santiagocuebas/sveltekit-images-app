<script lang="ts">
	let visible = false;

	const showForm = () => visible = !visible;
</script>

<div class="image-post">
	<div class="image-comment">
		<h2 class="image-comment-title">
			<i class="fa-solid fa-comment"></i> 
			Comment
		</h2>
		<button class="image-comment-show" on:click={showForm}>
			<i class="fa-solid fa-angle-down"></i>
		</button>
	</div>
	{#if visible}
		<slot></slot>
	{/if}
</div>

<style>
	.image-post {
		min-width: 450px;
		width: 30%;
		height: min-content;
		max-width: 600px;
		margin: 20px auto;
		box-shadow: 0 2px 8px #777777;
		background-color: #ffffff;
	}

	.image-comment {
		display: flex;
		padding: 20px;
		background-color: #5383d3;
		color: #ffffff;
	}

	.image-comment-show {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		padding: 10px;
		border: none;
		border-radius: 50%;
		background-color: #63c187;
		color: #ffffff;
		cursor: pointer;
	}

	.image-comment-title {
		display: flex;
		align-items: center;
		gap: 5px;
	}</style>
