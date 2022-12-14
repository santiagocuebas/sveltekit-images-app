<script lang="ts">
  export let images: any[];
</script>

<div class="view-container">
  <div class="general-header">
    <h2 class="view-title">
      <i class="fa-solid fa-images"></i>
      Most vieweds
    </h2>
  </div>
  {#if images.length > 0}
  <div class="view-images">
    {#each images as { filename, title, uniqueId }}
      <div class="view-content">
        <a href="/gallery/{uniqueId}">
          <img class="view-image" src="http://localhost:4200/uploads/{filename}" alt="{title}">
        </a>
      </div>
    {/each}
   </div>
  {/if}
</div>

<style>
  .view-container {
    width: 100%;
    height: min-content;
    margin-top: 10px;
    box-shadow: 0 2px 8px #333333;
  }

  .view-title {
    font-size: 32px;
    padding: 10px 20px;
    color: #ffffff;
  }

  .view-images {
    display: flex;
    justify-content: space-around;
    height: min-content;
    padding: 20px;
    background-color: #ffffff;
    gap: 5px;
  }

  .view-content {
    width: 80px;
    height: 80px;
    overflow: hidden;
  }

  .view-image {
    width: 100%;
  }
</style>