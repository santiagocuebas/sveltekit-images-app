<script lang="ts">
  export let stats: number[];
</script>

<div>
  <h2>
    <i class="fa-solid fa-chart-line"></i>
    Stats
  </h2>
  <p>
    <i class="fa-solid fa-images"></i>
    Images: {stats[0]}
  </p>
  <p>
    <i class="fa-solid fa-comments"></i>
    Comments: {stats[1]}
  </p>
  <p>
    <i class="fa-solid fa-eye"></i>
    Views: {stats[2]}
  </p>
</div>

<style>
  div {
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

  p {
    display: flex;
    align-items: center;
    width: 100%;
    height: min-content;
    gap: 6px;
  }

  h2 i {
    width: 24px;
  }

  p i {
    width: 20px;
  }
</style>
