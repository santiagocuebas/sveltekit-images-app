<script lang="ts">
	import type { PageData } from './$types';
	import Upload from '$lib/components/Upload.svelte';
	import ErrorBox from '$lib/components/ErrorBox.svelte';
	import RecentUploads from '$lib/components/RecentUploads.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import ViewedImages from '$lib/components/ViewedImages.svelte';
	import RecentComments from '$lib/components/RecentComments.svelte';

	export let data: PageData;

	let errors: ResponseData = {};
	let visible = false;
	let images: any[] = data.images;
	let stats: any[] = data.stats;
	let viewedImages: any[] = data.viewedImages;
	let recentComments: any[] = data.recentComments;

	const changeBoxErrors = () => visible = !visible;
	
	const setErrors = (data: ResponseData) => errors = data;
</script>

<div class="principal-container">
	<Upload
		visible={visible}
		change={changeBoxErrors}
		errors={setErrors}
		dir={data.dir}
	>
		<ErrorBox hide={changeBoxErrors} errors={errors} />
	</Upload>
	<div class="upload-sidebar">
		<Stats stats={stats} />
		<ViewedImages images={viewedImages} dir={data.dir} />
		<RecentComments comments={recentComments} dir={data.dir} />
	</div>
	<div class="upload-recent">
		<RecentUploads images={images} dir={data.dir} />
	</div>
</div>

<style>
	.principal-container {
		display: grid;
		grid-template-columns: repeat(12, minmax(40px, 1fr));
		grid-auto-rows: min-content 1fr;
		min-width: 480px;
		width: 80%;
		max-width: 1440px;
		height: fit-content;
	}

	.upload-sidebar {
		grid-column: 9 / span 4;
		grid-row: 1 / span 2;
		display: grid;
		grid-auto-rows: min-content;
		padding: 0 0 0 20px;
		row-gap: 10px;
	}

	.upload-recent {
		grid-column: 1 / span 8;
		align-self: flex-start;
	}

	@media (max-width: 1040px) {
		.upload-sidebar {
			display: none;
		}

		.upload-recent {
			grid-column: 1 / span 12;
		}
	}
</style>
