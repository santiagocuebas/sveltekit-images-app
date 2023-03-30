<script lang="ts">
	let visibility = false;

	const seeFooter = () => {
		visibility = !visibility;
	};
</script>

<footer on:mouseenter={seeFooter} on:mouseleave={seeFooter}>
	{#if visibility}
		<div>
			<p>imgShare.io | &#169; Copyright 2022</p>
			<a href="https://github.com/santiagocuebas?tab=repositories" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-github"></i>
			</a>
		</div>
	{/if}
</footer>

<style>
	footer {
		position: fixed;
		width: 100%;
		min-width: 530px;
		padding: 5px 20px;
		bottom: 0;
		background-color: #5383d3;
		z-index: 200;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		color: #ffffff;
		gap: 10px;
	}

	a {
		font-size: 32px;
		color: #ffffff;
	}
</style>