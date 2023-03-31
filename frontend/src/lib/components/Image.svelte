<script lang="ts">
	import { DIR } from '../services/config.js';

	export let id: string;
	export let filename: string;
	export let alt: string;
</script>

<a href="/gallery/{id}">
	<img src="{DIR}/uploads/{filename}" alt="{alt}">
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
