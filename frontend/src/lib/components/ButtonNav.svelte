<script lang="ts">
	export let text: string;
	export let color: string;
	export let href: string;
</script>

<a href="{href}" class="{color}">
	{text}
</a>

<style>
	a {
		display: flex;
		align-items: center;
		height: 40px;
		margin-left: auto;
		padding: 0 24px;
		border-radius: 8px;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.green {
		background-color: #3ac614;
	}

	.green:hover {
		background-color: #3ad614;
	}

	.violet {
		background-color: #b114c6;
	}

	.violet:hover {
		background-color: #c114c6;
	}
</style>