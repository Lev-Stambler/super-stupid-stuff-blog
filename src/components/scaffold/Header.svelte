<script>
  import Social from "../action-call/Social.svelte";
  export let small = false;
</script>

<style>
  header {
    padding: calc(1.4vw + 8px) 0px;
    position: relative;
    overflow: hidden;
    width: 72em;
    max-width: 92%;
    margin: 30px auto 20px;
    background: #fff;
    background: var(--theme-container-background, #fff);
    border-radius: 3px;
    border: 2px solid var(--main-accent-bg-color);
    box-shadow: 5px 6px 0px var(--main-accent-bg-color);
  }

  .profile {
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
  }
  .profile-image {
    background: var(--main-accent-fg-color);
    width: calc(12.2vw + 50px);
    height: calc(12.2vw + 50px);
    border-radius: 200px;
    max-width: 220px;
    max-height: 220px;
    margin-bottom: 1em;
    border: 4px solid var(--main-accent-fg-color);
  }
  .small .profile {
    flex-direction: row!important;
  }
  .small .profile-image {
    margin-right: 20px;
    width: calc(8.2vw + 35px);
    height: calc(8.2vw + 35px);
    border-radius: 50%;
    max-width: 100px;
    max-height: 100px;
  }
  .profile-description {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column: auto;
  }
  .small .profile-description {
    grid-template-columns: 1fr;
  }
  .extra-profile-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-style: italic;
    font-size: 1.4rem;
    margin: 10px 0;
    color: #999999;
  }
  h1 {
    color: var(--main-accent-fg-color);
    font-weight: 600;
  }
  @media (max-width: 640px) {
    .extra-profile-info {
      font-size: 1rem;
    }
  }
</style>

<header class={small ? 'small' : ''}>
  <div class="flex-container">
    <div class="profile-description ">
      <div class="profile">
        <img
          class="profile-image"
          src="pictures/profile.jpg"
          alt="jpblancodb profile" />
        <h1>Lev Stambler</h1>
      </div>
      {#if !small}
        <span class="extra-profile-info">
          Pretending to be a software developer since 2001
          <Social />
        </span>
      {/if}
    </div>
  </div>
</header>
