<script lang="ts">
	export let id: string;
	export let filename: string;
	export let alt: string;
	export let dir: string;
</script>

<a href="/gallery/{id}">
	<img src="{dir}/uploads/{filename}" alt="{alt}">
</a>

<style>
	a {
		width: 240px;
		height: 240px;
		box-shadow: 0 0 3px #000000;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
