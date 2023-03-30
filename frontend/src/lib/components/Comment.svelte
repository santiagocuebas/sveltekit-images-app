<script lang="ts">
	import { timeago } from '../services/services.js';

	export let comment: any;
</script>

<div class="comment">
	<img
		src="http://gravatar.com/avatar/{comment.gravatar}?d=monsterid&s=45"
		alt="{comment.name}"
	>
	<div>{comment.name} &#x25CF; {comment.email}</div>
	<div>{comment.comment}</div>
	<div class="comment-createdat">{timeago(comment.createdAt)}</div>
</div>

<style>
	.comment {
		display: grid;
		grid-template-columns: 45px 1fr;
		width: 100%;
		border-radius: 4px;
		column-gap: 10px;
		row-gap: 5px;
	}

	img {
		grid-row: 1 / span 3;
		box-shadow: 0 0 3px #000000;
	}

	.comment-createdat {
		width: max-content;
		margin-left: auto;
	}
</style>
