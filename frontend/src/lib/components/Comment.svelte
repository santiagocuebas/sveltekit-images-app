<script lang="ts">
	import { timeago } from '../services/services.js';

	export let comment: any;
</script>

<div class="comment-container-content">
	<div class="comment-container-avatar">
		<img src="http://gravatar.com/avatar/{comment.gravatar}?d=monsterid&s=45" alt="{comment.name}">
	</div>
	<div class="comment-content">
		<div class="comment-name">
			{comment.name} <sup>.</sup> {comment.email}
		</div>
		<div>
			{comment.comment}
		</div>
		<div class="comment-createdat">
			{timeago(comment.createdAt)}
		</div>
	</div>
</div>

<style>
	.comment-container-content {
		display: flex;
		width: 100%;
		padding: 5px;
		outline: 1px solid #bbbbbb;
		border-radius: 4px;
		gap: 5px;
	}

	.comment-container-avatar {
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	.comment-content {
		display: flex;
		flex-wrap: wrap;
		align-items: space-around;
	}

	.comment-name {
		width: 100%;
		height: min-content;
	}

	.comment-createdat {
		width: 100%;
		height: min-content;
	}
</style>
