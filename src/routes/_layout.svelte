<script>
  import Footer from "../components/scaffold/Footer.svelte"
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
<svelte:head>
  <title>Super Stupid Stuff - Blog</title>
</svelte:head>
<main>
  <slot />
</main>
<Footer />
