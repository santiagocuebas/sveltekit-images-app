<script lang="ts">
	import { getFetchingData, handleImage } from '../services/services.js';

	export let visible: boolean;
	export let change: () => void;
	export let errors: (data: ResponseData) => void;
	export let dir: string;

	async function handleSubmit(this: HTMLFormElement) {
		const data = new FormData(this);

		const res: ResponseData = await getFetchingData(this.action, this.method, data);

		if (typeof res !== 'object') {
			window.location.href = res;
		} else {
			change();
			errors(res);
		}
	};
</script>

<div class="upload-container">
	<h2 class="general-header">
		<i class="fa-solid fa-image"></i>
		Upload image
	</h2>
	<form
		action="{dir}/api/upload"
		method="POST"
		enctype="multipart/form-data"
		on:submit|preventDefault={handleSubmit}
	>
		{#if visible}
			<slot></slot>
		{/if}
		<label>
			<input type="file" name="image" on:change={handleImage}>
		</label>
		<input type="text" name="title" id="title" placeholder="Title">
		<textarea name="description" id="description" rows="2" placeholder="Description"></textarea>
		<button>
			<i class="fa-solid fa-upload"></i>
			Upload
		</button>
	</form>
</div>

<style>
	.upload-container {
		grid-column: 1 / span 8;
		width: 100%;
		height: min-content;
		background-color: #ffffff;
		box-shadow: 0 2px 8px #333333;
	}

	form {
		display: grid;
		grid-auto-rows: min-content;
		padding: 20px;
		background: #ffffff;
		gap: 12px;
	}

	input, textarea {
		width: 100%;
		padding: 10px;
		border: 1px solid #bbbbbb;
		border-radius: 4px;
	}

	input[type='file'] {
		display: none;
	}

	label {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 360px;
		height: 360px;
		margin: auto;
		outline: 1px solid #bbbbbb;
		border-radius: 4px;
		background-image: url('/objetive.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		cursor: pointer;
	}

	button {
		display: block;
		margin-left: auto;
		padding: 8px 24px;
		border: none;
		border-radius: 4px;
		background-color: #63c187;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background: #63d187;
	}

	@media (max-width: 1040px) {
		.upload-container {
			grid-column: 1 / span 12;
		}
	}
</style>
