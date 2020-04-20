<script context="module">
  // import db from "./_database.js"; // the underscore tells Sapper this isn't a route

  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].json.js
    const { slug } = page.params;
    //   const article = await db.get(slug);
    const res = await this.fetch(`content/articles/${slug}.json`);
    const article = await res.json();
    return { article };
  }
</script>

<script>
  import Header from "../../components/scaffold/Header.svelte";
  import Article from "../../components/content/Article.svelte";
  export let article;
</script>

<Header small="true" />
<Article {article} />
