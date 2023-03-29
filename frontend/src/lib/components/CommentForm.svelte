<script lang="ts">
	import { fly } from 'svelte/transition';
	import { getFetchingData } from '../services/services.js';

	export let id: string;
	export let dir: string;
	export let see: boolean;
	export let errors: object;
	export let change: () => void;
	export let addComment: (comment: ResponseData) => void;
  
  const setErrors = (data: object) => errors = data;

	async function handleSubmit(this: HTMLFormElement) {
		const data = new FormData(this);

		const res = await getFetchingData(this.action, this.method, data);
		
		if (res.gravatar !== undefined) {
			if (see) change();
			
			const childrenUnknown = this.children as unknown;
			const children: HTMLInputElement[] = childrenUnknown as HTMLInputElement[];

			for (const child of children) {
				child.value = '';
			};

			addComment(res);
		} else {
			change();
			setErrors(res)
		}
	}
</script>

<form
	class="comment-form"
	action="{dir}/api/{id}/comment"
	method="POST"
	on:submit|preventDefault={handleSubmit}
	in:fly="{{ y: 0, duration: 200 }}"
	out:fly="{{ y: 0, duration: 200 }}" 
>
	{#if see}
		<slot></slot>
	{/if}
	<input class="comment-input" type="text" name="name" placeholder="Name">
	<input class="comment-input" type="email" name="email" placeholder="Email">
	<textarea class="comment-input" name="comment" rows="2" placeholder="Comment"></textarea>
	<button class="comment-button">
		<i class="fa-solid fa-comment"></i>
		Post
	</button>
</form>

<style>
	.comment-form {
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		gap: 10px;
	}

	.comment-input {
		width: 100%;
		padding: 8px 16px;
		border: 1px solid #bbbbbb;
		border-radius: 4px;
	}

	.comment-button {
		display: block;
		margin-left: auto;
		padding: 8px 16px;
		background: #63c187;
		color: #ffffff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.comment-button:hover {
		background: #63d187;
	}
</style>