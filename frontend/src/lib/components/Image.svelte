<script lang="ts">
  export let id: string;
  export let filename: string;
  export let alt: string;
</script>

<div class="gallery-image">
  <a href="/gallery/{id}">
    <img src="http://localhost:4200/uploads/{filename}" alt="{alt}">
  </a>
</div>

<style>
  .gallery-image {
    width: 240px;
    height: 240px;
    overflow: hidden;
    outline: 1px solid #bbbbbb;
  }
</style>
