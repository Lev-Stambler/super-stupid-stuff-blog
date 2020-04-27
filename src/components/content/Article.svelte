<script>
  export let article;
  import "./Tags.css";
  // {
  //   "title": "Shut Up -- Quarantine Edition",
  //   "date_published": "4/19/2020",
  //   "tag_list": ["peace", "tranquility", "no-sarcasm-detected-here"],
  //   "short": "I was bored. So I made a web app which yells at people",
  //   "externalLink": "https://shut-up-covid.neocities.org/",
  //   "body": "",
  //   "slug": 1
  // }
</script>

<style>
:global(a) {
  text-decoration: underline;
}
:global(img) {
  max-width: 100%;
}

</style>

<h1>{article.title}</h1>
<span class="publish-date">{article.date_published}</span>
<div class="tags">
  {#each article.tag_list as tag}
    <span class="tag">#{tag}</span>
  {/each}
</div>
<div class="body-wrapper">
  <div class="body">
    {@html article.body}
  </div>
</div>
