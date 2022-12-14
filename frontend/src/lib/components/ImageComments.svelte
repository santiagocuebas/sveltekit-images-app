<script lang="ts">
  export let comments: number;
</script>

<div class="image-comments">
	<div class="image-comments-header">
		<h2>
			<i class="fa-solid fa-comments"></i>
			{comments} comments
		</h2>
	</div>
	{#if comments > 0}
	<div class="image-comments-list">
    <slot></slot>
	</div>
	{/if}
</div>

<style>
	.image-comments {
		min-width: 450px;
		width: 30%;
		height: min-content;
		max-width: 600px;
		margin: 20px auto;
		box-shadow: 0 2px 8px #777777;
		background-color: #ffffff;
	}

	.image-comments-header {
		padding: 20px;
		background-color: #5383d3;
		color: #ffffff;
	}

  .image-comments-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
  }
</style>
