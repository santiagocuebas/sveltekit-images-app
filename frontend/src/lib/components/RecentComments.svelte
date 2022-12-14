<script lang="ts">
  import { timeago } from '../services/services.js';

  export let comments: any[];
</script>

<div class="comment-container">
  <div class="general-header">
    <h2 class="comment-title">
      <i class="fa-solid fa-comments"></i>
      Recent comments
    </h2>
  </div>
  {#if comments.length > 0}
  <div class="comments-list">
    {#each comments as comment}
      <div class="comment-content">
        <div class="comment-container-image">
          <img class="comment-image" src="http://localhost:4200/uploads/{comment.filename}" alt="">
        </div>
        <div class="comment-data">
          <div class="comment-inner-content">{comment.comment}</div>
          <div class="comment-footer">- {comment.name} <sup>.</sup> {timeago(comment.createdAt)}</div>
        </div>
      </div>
    {/each}
  </div>
  {/if}
</div>

<style>
  .comment-container {
    width: 100%;
    height: min-content;
    margin-top: 10px;
    box-shadow: 0 2px 8px #333333;
  }

  .comment-title {
    font-size: 32px;
    padding: 10px 20px;
    color: #ffffff;
  }

  .comments-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: min-content;
    padding: 20px;
    background-color: #ffffff;
    gap: 10px;
  }

  .comment-content {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .comment-container-image {
    width: 100px;
    height: 100px;
    overflow: hidden;
  }

  .comment-image {
    width: 100%;
    height: auto;
  }

  .comment-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .comment-inner-content {
    font-size: 20px;
  }

  .comment-footer {
    color: #666666;
  }
</style>
