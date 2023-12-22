<script>
  import { onMount } from "svelte";
  import ComicsListItem from "../ComicsListItem/ComicsListItem.svelte";
  import { AsyncRequest } from "$lib/utils";

  export let getComicId = () => {};

  let data = [];
  let loading = true;
  let error = false;
  let offset = 210;

  onMount(() => {
    (async () => {
      loading = true;
      error = false;
      const asyncRequest = new AsyncRequest({
        method: "comics",
        data: {
          limit: 8,
          offset: offset,
        },
      });
      let result = await asyncRequest.getNumerousData();
      data = result.data?.results;

      if (result.code !== 200) {
        error = true;
      }
      loading = false;
    })();
  });

  async function loadMore() {
    offset += 8;
    loading = true;
    error = false;
    const asyncRequest = new AsyncRequest({
      method: "comics",
      data: {
        limit: 8,
        offset: offset,
      },
    });
    let result = await asyncRequest.getNumerousData();
    data = [...data, ...result.data?.results];

    if (result.code !== 200) {
      error = true;
    }
    loading = false;
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
        <div class="col-md-3 col-sm-4 col-6 mb-md-4 mb-3">
          <a on:click={() => getComicId(item.id)} href="/comics/{item.id}">
            <ComicsListItem {...item} />
          </a>
        </div>
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
        <button class:disabled={false} class="button" on:click={loadMore}>
          <div class="inner">load more</div>
        </button>
      </div>
    </div>
  {/if}
</div>
