<script context="module">
  export async function preload() {
    const res = await this.fetch(`/content/articles.json`);
    // console.log(await res.json());
    return { articles: (await res.json()).sort((s1, s2) => {
      console.log(s1.slug, s2.slug)
      return s2.slug - s1.slug
    }) };
  }
</script>

<script>
  import Header from "../components/scaffold/Header.svelte";
  import ShortCard from "../components/content/ShortCard.svelte";
  export let articles;
</script>

<style>

</style>

<Header />
{#each articles as article}
  <ShortCard {article} />
{/each}
