<script lang="ts">
  export let comments: number;
</script>

<div class="comments-container">
	<h2>
		<i class="fa-solid fa-comments"></i>
		{comments} comments
	</h2>
	{#if comments > 0}
	<div class="comments-list">
    <slot></slot>
	</div>
	{/if}
</div>

<style>
	.comments-container {
		width: 50%;
		min-width: 500px;
		max-width: 800px;
		height: min-content;
		box-shadow: 0 2px 8px #777777;
		background-color: #ffffff;
	}

	h2 {
		width: 100%;
		margin: 0;
		padding: 20px;
		background-color: #5383d3;
		color: #ffffff;
	}

  .comments-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
  }
</style>
