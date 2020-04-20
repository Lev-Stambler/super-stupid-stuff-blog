<script context="module">
  export async function preload() {
    const res = await this.fetch(`/content/articles.json`);
    // console.log(await res.json());
    return { articles: await res.json() };
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
