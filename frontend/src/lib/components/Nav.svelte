<nav>
	<a href="/">
		<img src="/imgshare-logo.png" alt="Logo">
	</a>
	<div>
		<slot></slot>
	</div>
</nav>

<style>
	nav {
		display: flex;
		position: fixed;
		align-items: center;
		width: 100%;
		min-width: 530px;
		padding: 10px 20px;
		top: 0;
		background-color: #5383d3;
		z-index: 200;
	}

	a {
		width: 160px;
		height: 40px;
	}

	img {
		width: 100%;
		height: 100%;
	}

	div {
		display: flex;
		margin-left: auto;
		gap: 5px;
	}
</style>