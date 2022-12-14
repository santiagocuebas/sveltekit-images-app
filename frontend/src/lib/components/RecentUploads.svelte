<script lang="ts">
  export let images: any[];
</script>

<div class="recent-container">
  <div class="general-header">
    <h2 class="recent-title">
      <i class="fa-solid fa-images"></i>
      Recent Uploads
    </h2>
  </div>
  {#if images.length > 0}
  <div class="recent-images">
    {#each images as { filename, title, uniqueId }}
      <div class="recent-content">
        <a href="/gallery/{uniqueId}">
          <img class="recent-image" src="http://localhost:4200/uploads/{filename}" alt="{title}">
        </a>
      </div>
    {/each}
   </div>
  {/if}
</div>

<style>
  .recent-container {
    width: 100%;
    height: min-content;
    margin-top: 20px;
    box-shadow: 0 2px 8px #333333;
  }

  .recent-title {
    font-size: 32px;
    padding: 10px 20px;
    color: #ffffff;
  }

  .recent-images {
    display: flex;
    justify-content: space-around;
    height: min-content;
    padding: 20px;
    background-color: #ffffff;
    gap: 5px;
  }

  .recent-content {
    width: 140px;
    height: 140px;
    overflow: hidden;
  }

  .recent-image {
    width: 100%;
  }
</style>
