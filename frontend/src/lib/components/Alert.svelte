<script lang="ts">
	import { getFetchingData } from '../services/services.js';

  export let id: string;
  export let dir: string;
  export let alert: boolean;

  const changeAlert = () => alert = false;

  async function deleteImage(this: HTMLButtonElement) {
    const url = `${dir}/api/${id}`;
    const res = await getFetchingData(url, 'DELETE', null);

    window.location.href = res.url;
  }
</script><div class="alert-container">
	<div class="alert-content">
		<p class="alert-paragraph">Are you sure of delete this image?</p>
		<button class="alert-button cancel" on:click|preventDefault={changeAlert}>
			Cancel
		</button>
		<button class="alert-button accept" on:click|preventDefault={deleteImage}>
			Accept
		</button>
	</div>
</div>

<style>
	.alert-container {
		display: grid;
		position: fixed;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		min-height: 100%;
		top: 0;
		bottom: 0;
		padding-top: 130px;
		background-color: #000000af;
		z-index: 1000;
	}
	
	.alert-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 400px;
		padding: 20px;
		outline: 1px solid #dddddd;
		border-radius: 8px;
		background-color: #ffffff;
		font-size: 20px;
		font-weight: 700;
		box-shadow: 0 0 10px #888888;
		gap: 8px;
	}
	
	.alert-paragraph {
		width: 100%;
	}

	.alert-button {
		width: fit-content;
		margin: auto;
		padding: 8px 24px;
		border: none;
		border-radius: 8px;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.cancel {
		background-color: #f04425;
	}

	.cancel:hover {
		background-color: #ff4425;
	}

	.accept {
		background-color: #4588b6;
	}

	.accept:hover {
		background-color: #4588c6;
	}
</style>
