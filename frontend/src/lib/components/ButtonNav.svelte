<script lang="ts">
  export let text: string;
  export let color: string;
  export let href: string;
</script>

<a href="{href}" class="nav-button nav-button-{color}">
  {text}
</a>

<style>
  .nav-button {
    margin-left: auto;
    padding: 8px 24px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
  }

  .nav-button-green {
    background-color: #3ac614;
  }

  .nav-button-green:hover {
    background-color: #3ad614;
  }

  .nav-button-violet {
    background-color: #b114c6;
  }

  .nav-button-violet:hover {
    background-color: #c114c6;
  }
</style>