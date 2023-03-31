<script lang="ts">
	import { timeago } from '../services/services.js';
	import { DIR } from '../services/config.js';

	export let comments: any[];
</script>

<div class="comment-container">
	<h2 class="general-header">
		<i class="fa-solid fa-comments"></i>
		Recent comments
	</h2>
	{#if comments.length > 0}
	<div class="comments-list">
		{#each comments as comment}
			<div class="comment-content">
				<img
					src="{DIR}/uploads/{comment.filename}"
					alt="{comment.name}"
				>
				<div class="comment-data">{comment.comment}</div>
				<div class="comment-footer">
					- {comment.name} &#x25CF; {timeago(comment.createdAt)}
				</div>
			</div>
		{/each}
	</div>
	{/if}
</div>

<style>
	.comment-container {
		width: 100%;
		height: min-content;
		margin-top: 10px;
		box-shadow: 0 2px 8px #333333;
	}

	.comments-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		height: min-content;
		padding: 20px;
		background-color: #ffffff;
		gap: 10px;
	}

	.comment-content {
		display: grid;
		grid-template-columns: 100px 1fr;
		grid-auto-rows: 1fr;
		width: 100%;
		gap: 10px;
	}

	.comment-content img {
		grid-row: 1 / span 2;
		width: 100px;
		height: 100px;
		object-fit: cover;
		box-shadow: 0 0 3px #000000;
	}

	.comment-data {
		font-size: 20px;
	}

	.comment-footer {
		align-self: end;
		justify-self: end;
		color: #666666;
	}
</style>
