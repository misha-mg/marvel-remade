<script>
  import { AsyncRequest } from "$lib/utils";
  import { onMount } from "svelte";

  let character = {};
  let loading = true;
  let error = false;

  async function loadNewChar() {
    loading = true;
    error = false;
    const asyncRequest = new AsyncRequest({
      method: "characters",
      data: {
        id: Math.floor(Math.random() * 400 + 1011000),
      },
    });
    let result = await asyncRequest.getSingleData();
    if (result.code !== 200) {
      error = true;
    }
    character = result?.data?.results[0];
    loading = false;
  }

  onMount(() => {
    loadNewChar();
  });
</script>

<div
  class="col-lg-6 col-sm-12 randomChar-spinner d-sm-grid d-flex flex-column align-items-sm-stretch align-items-center"
>
  {#if loading}
    <div
      class="randomChar-status-container d-flex justify-content-center align-items-center"
    >
      <img src="/loading.gif" alt="loading gif" class="error-gif status-gif" />
    </div>
  {:else if error == true}
    <div
      class="randomChar-status-container d-flex justify-content-center align-items-center"
    >
      <img src="/error.gif" alt="error gif" class="error-gif status-gif" />
    </div>
  {:else}
    <div class="randomChar-spinner-img">
      <img src="{character?.thumbnail?.path}.jpg" alt="Char Image" />
    </div>

    <div class="randomChar-spinner-content">
      <p class="randomChar-name text-sm-start text-center">{character?.name}</p>
      <p class="randomChar-descr text-sm-start text-center">
        {character.description
          ? character.description?.slice(0, 100)
          : "This character has no description"}
      </p>
      <div
        class="randomChar-btns d-flex gap-2 text-sm-start justify-content-sm-start justify-content-center"
      >
        <a href={character?.urls[0].url}>
          <button class="button button-main"> Homepage </button>
        </a>
        <a href={character?.urls[1].url}>
          <button class="button button-secondary"> Wiki </button>
        </a>
      </div>
    </div>
  {/if}
</div>
<div class="col-lg-6 col-sm-12 randomChar-info">
  <p class="randomChar-info-title">
    Random character for today!<br />
    Do you want to get to know him better?
  </p>
  <p class="randomChar-info-subtitle mt-3">Or choose another one</p>
  <button class="button button-main mt-3" on:click={loadNewChar}>
    Try it
  </button>
  <img src="/mjolnir.png" alt="mjolnir" class="randomChar-info-decoration" />
</div>
