<script>
  import { AsyncRequests } from "$lib/utils";
  import { onMount } from "svelte";
  import CharListItem from "../CharListItem/CharListItem.svelte";

  export let getCharId;
  let data = [];
  let loading = true;
  let error = false;
  let offset = 210;

  onMount(() => {
    (async () => {
      loading = true;
      error = false;
      const asyncRequests = new AsyncRequests();
      let result = await asyncRequests.getAllChars();
      data = result.data?.results;

      if (result.code !== 200) {
        error = true;
      }
      loading = false;
    })();
  });

  function loadMore() {
    (async () => {
      loading = true;
      error = false;
      offset += 6;
      const asyncRequests = new AsyncRequests();
      let result = await asyncRequests.getAllChars(offset);
      data = [...data, ...result.data?.results];

      if (result.code !== 200) {
        error = true;
      }
      loading = false;
    })();
  }
</script>

<div class="container p-0">
  <div class="row">
    {#if error == true}
      <div
        class="randomChar-status-container my-3 d-flex justify-content-center align-items-center"
      >
        <img src="/error.gif" alt="error gif" class="error-gif status-gif" />
      </div>
    {:else}
      {#each data as item}
        <a
          class="col-xl-4 col-lg-6 col-md-12 col-6 mb-3"
          on:click={() => getCharId(item.id)}
        >
          <CharListItem {...item} />
        </a>
      {/each}
    {/if}
    {#if loading}
      <div
        class="randomChar-status-container my-3 d-flex justify-content-center align-items-center"
      >
        <img
          src="/loading.gif"
          alt="loading gif"
          class="error-gif status-gif"
        />
      </div>
    {/if}
  </div>
  {#if !loading && !error}
    <div class="row">
      <div class="col-12 text-center">
        <button
          class:disabled={false}
          class="button"
          on:click={() => loadMore()}
        >
          <div class="inner">load more</div>
        </button>
      </div>
    </div>
  {/if}
</div>
