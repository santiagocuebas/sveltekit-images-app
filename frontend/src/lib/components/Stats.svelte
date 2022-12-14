<script lang="ts">
  export let stats: number[];
</script>

<div class="stats-container">
  <h2 class="stats-paragraph">
    <i class="fa-solid fa-chart-line"></i>
    Stats
  </h2>
  <p class="stats-paragraph">
    <i class="fa-solid fa-images"></i>
    Images: {stats[0]}
  </p>
  <p class="stats-paragraph">
    <i class="fa-solid fa-comments"></i>
    Comments: {stats[1]}
  </p>
  <p class="stats-paragraph">
    <i class="fa-solid fa-eye"></i>
    Views: {stats[2]}
  </p>
</div>

<style>
  .stats-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: min-content;
    padding: 20px;
    outline: 1px solid #999999;
    border-radius: 4px;
    background-color: #ffffff;
    gap: 10px;
  }

  .stats-paragraph {
    width: 100%;
    height: min-content;
  }
</style>
