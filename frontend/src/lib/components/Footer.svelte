<script lang="ts">
  let visibility = false;

  const seeFooter = () => {
    visibility = !visibility;
  };
</script>

<footer
  class="footer-container"
  on:mouseenter={seeFooter}
  on:mouseleave={seeFooter}
>
  {#if visibility}
    <div class="footer-content">
      <p>imgShare.io | &#169; Copyright 2022</p>
      <a class="footer-url" href="https://github.com/santiagocuebas?tab=repositories" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
    </div>
  {/if}
</footer>

<style>
  .footer-container {
    position: fixed;
    width: 100%;
    padding: 5px 20px;
    bottom: 0;
    background-color: #5383d3;
    z-index: 200;
  }

  .footer-content {
    padding: 5px 0;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
  }

  .footer-url {
    display: inline-block;
    width: min-content;
    margin-top: 5px;
    font-size: 32px;
    color: #ffffff;
  }
</style>