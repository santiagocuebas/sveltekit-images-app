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
  <div class="general-header">
    <h2 class="upload-title">
      <i class="fa-solid fa-image"></i>
      Upload image
    </h2>
  </div>
  <div class="upload-body">
    <form
      action="{dir}/api/upload"
      method="POST"
      enctype="multipart/form-data"
      on:submit|preventDefault={handleSubmit}
    >
      {#if visible}
      <div class="upload-box">
        <slot></slot>
      </div>
      {/if}
      <div class="upload-box">
        <label class="upload-label">
          <input
            class="upload-file"
            type="file"
            name="image"
            on:change={handleImage}
          >
          <img class="upload-image" src="" alt="">
        </label>
      </div>
      <div class="upload-box">
        <input class="upload-input" type="text" name="title" id="title" placeholder="Title">
      </div>
      <div class="upload-box">
        <textarea class="upload-input" name="description" id="description" rows="2" placeholder="Description"></textarea>
      </div>
      <button class="upload-button">
        <i class="fa-solid fa-upload"></i>
        Upload image
      </button>
    </form>
  </div>
</div>

<style>
  .upload-container {
    grid-column: 1 / span 8;
    width: 100%;
    height: min-content;
    background-color: #ffffff;
    box-shadow: 0 2px 8px #333333;
  }

  .upload-title {
    font-size: 32px;
    padding: 10px 20px;
    color: #ffffff;
  }

  .upload-body {
    background: #fff;
    padding: 20px;
  }

  .upload-box {
    min-width: 440px;
    margin-bottom: 16px;
  }

  .upload-file {
    display: none;
  }

  .upload-input {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
  }

  .upload-label {
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
    cursor: pointer;
  }

  .upload-image {
    width: auto;
    height: 100%;
  }

  .upload-button {
    display: block;
    margin-left: auto;
    padding: 8px 16px;
    background: #63c187;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .upload-button:hover {
    background: #63d187;
  }

  @media (max-width: 1040px) {
    .upload-container {
      grid-column: 1 / span 12;
    }
  }
</style>
