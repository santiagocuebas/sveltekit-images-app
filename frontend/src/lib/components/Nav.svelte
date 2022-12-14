<nav class="nav-container">
  <a href="/">
    <img class="nav-logo" src="/imgshare-logo.png" alt="Logo">
  </a>
  <nav class="nav-buttons">
    <slot></slot>
  </nav>
</nav>

<style>
  .nav-container {
    display: flex;
    position: fixed;
    align-items: center;
    width: 100%;
    min-width: 510px;
    padding: 10px 20px;
    top: 0;
    background-color: #5383d3;
    z-index: 200;
  }

  .nav-buttons {
    width: max-content;
    height: min-content;
    margin-left: auto;
  }

  .nav-logo {
    width: 192px;
    height: 42px;
  }
</style>