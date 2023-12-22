<script>
  import { AsyncRequest } from "$lib/utils";
  import { onMount } from "svelte";

  export let id = Math.floor(Math.random() * 400 + 1011000);
  let loading = true;
  let error = false;
  let char = {};

  async function getChar() {
    loading = true;
    error = false;
    const asyncRequest = new AsyncRequest({
      method: "characters",
      data: {
        id: Math.floor(Math.random() * 400 + 1011000),
      },
    });
    let result = await asyncRequest.getSingleData();
    char = result.data?.results[0];

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
        <div class="char-descr mt-3">
          {char?.description
            ? char?.description
            : "This character has no description"}
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between">
      <div class="charInfo-btns d-flex gap-2">
        <a href={char?.urls[0].url}>
          <button class="button button-main mb-2"> Homepage </button>
        </a>
        <a href={char?.urls[0].url}>
          <button class="button button-secondary"> Wiki </button>
        </a>
      </div>
    </div>
  {/if}
</div>
