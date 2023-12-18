<script>
  import { AsyncRequests } from "$lib/utils";
  import { onMount } from "svelte";

  export let id = Math.floor(Math.random() * 400 + 1011000);
  let loading = true;
  let error = false;
  let char = {};

  async function getChar() {
    loading = true;
    error = false;
    const asyncRequests = new AsyncRequests();
    let result = await asyncRequests.getOneChar(id);
    char = result.data?.results[0];
    console.log(char);
    if (result.code !== 200) {
      error = true;
    }
    loading = false;
  }

  $: onMount(() => {
    getChar();
  });
  $: if (id) {
    getChar();
  }
</script>

<div class="charInfo p-3">
  {#if error == true}
    <div
      class="randomChar-status-container my-3 d-flex justify-content-center align-items-center"
    >
      <img src="/error.gif" alt="error gif" class="error-gif status-gif" />
    </div>
  {:else if loading}
    <div
      class="randomChar-status-container my-3 d-flex justify-content-center align-items-center"
    >
      <img src="/loading.gif" alt="loading gif" class="error-gif status-gif" />
    </div>
  {:else}
    <div class="d-flex gap-2 mb-2">
      <div class="charInfo-img">
        <img
          src="{char?.thumbnail?.path}.{char?.thumbnail?.extension}"
          alt="Char Image"
        />
      </div>
      <div class="charInfo-text">
        <div class="charInfo-name">{char?.name}</div>
        <div class="char__descr mt-3">
          {char?.description
            ? char?.description
            : "This character has no description"}
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between">
      <div class="charInfo-btns d-flex gap-2">
        <button class="button button-main mb-2">
          <a href={char?.urls[0].url}> Homepage </a>
        </button>
        <button class="button button-secondary">
          <a href={char?.urls[0].url}> Wiki </a>
        </button>
      </div>
    </div>
  {/if}
</div>
