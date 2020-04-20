<script>
  export let article;
  import "./Tags.css";
</script>

<style>
  a {
    text-decoration: none;
  }
  .card {
    padding: 20px;
    margin-bottom: 10px;
    border: 2px solid #bababa;
    box-shadow: 3px 3px 0px #bababa;
  }
  /* .article-engagement {
    margin-right: 20px;
  }
  .article-engagement img {
    height: 20px;
    min-width: 26px;
    vertical-align: -5px;
  } */
  .flex-container {
    display: flex;
  }
</style>

<a href="/blog/{article.slug}">
  <div class="card">
    {article.date_published}
    <h1>{article.title}</h1>

    <div class="tags">
      {#each article.tag_list as tag}
        <span class="tag">#{tag}</span>
      {/each}
    </div>

    <p>{article.short}</p>

    <div class="flex-container">
      <!-- <div class="article-engagement">
        <img
          alt="Reactions"
          src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png" />
        <span>{article.positive_reactions_count}</span>
      </div>

      <div class="article-engagement">
        <img
          alt="Comments"
          src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/comments-bubble-9958d41b969a1620c614347d5ad3f270ab49582c1d9f82b617a6b4156d05dda0.png" />
        <span>{article.comments_count}</span>
      </div> -->

    </div>
  </div>
</a>
