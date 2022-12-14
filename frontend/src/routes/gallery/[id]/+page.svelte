<script lang='ts'>
	import type { PageData } from './$types';
	import ImageContent from '$lib/components/ImageContent.svelte';
	import ImagePost from '$lib/components/ImagePost.svelte';
	import ImageComments from '$lib/components/ImageComments.svelte';
	import Comment from '$lib/components/Comment.svelte';
	import CommentForm from '$lib/components/CommentForm.svelte';
  import ErrorBox from '$lib/components/ErrorBox.svelte';
	import Alert from '$lib/components/Alert.svelte';

	export let data: PageData;

	let { image, comments } = data;
  let errors = {};
	let see = false;
	let showAlert = false;

	const addComment = (comment: ResponseData) => comments = [comment, ...comments];

	const changeBoxErrors = () => see = !see;
</script>

{#if showAlert}
	<Alert id={image.uniqueId} bind:alert={showAlert}  />
{/if}

<ImageContent image={image} bind:alert={showAlert} />

<ImagePost>
	<CommentForm
		id={image.uniqueId}
		see={see}
		bind:errors={errors}
		change={changeBoxErrors}
		addComment={addComment}
	>
		<ErrorBox bind:errors={errors} hide={changeBoxErrors} />
	</CommentForm>
</ImagePost>

<ImageComments comments={comments.length} >
	{#each comments as comment}
	<Comment comment={comment}/>
	{/each}
</ImageComments>
