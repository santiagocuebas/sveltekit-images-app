<script lang="ts">
  import type { LayoutData } from './$types';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Button from '$lib/components/ButtonNav.svelte';

  export let data: LayoutData;
</script>

<Nav>
  {#if data.path !== '/gallery'}
  <Button text='Gallery' color='green' href='/gallery' />
  {/if}
  {#if data.path !== '/'}
  <Button text='Upload' color='violet' href='/' />
  {/if}
</Nav>
<div class="main-container">
  <slot></slot>
</div>
<Footer/>

<style>
  :global(*) {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', 'Times New Roman', Times, serif
  }

  :global(body) {
    padding-top: 65px;
    padding-bottom: 10px;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
    padding: 0;
  }

  :global(a) {
    color: #000000;
    text-decoration: none;
  }

  :global(textarea) {
	resize: none;
  }

  :global(.main-container) {
    display: grid;
    width: 100%;
    min-height: calc(100vh - 75px);
    background-color: #f0f4f8;
  }

  :global(.general-header) {
    padding: 10px 0;
    background-color: #5383d3;
  }
</style>
