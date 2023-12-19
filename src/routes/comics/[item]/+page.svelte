<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import AppBanner from "../../../components/AppBanner/AppBanner.svelte";
  import { AsyncRequests } from "$lib/utils";

  let comicId = $page.params.item;

  let data = {};
  let loading = true;
  let error = false;
  let offset = 210;

  onMount(async () => {
    loading = true;
    error = false;
    const asyncRequests = new AsyncRequests();
    let result = await asyncRequests.getOneComic(comicId);
    data = result.data.results[0];

    console.log(data);

    if (result.code !== 200) {
      error = true;
    }
    loading = false;
  });
</script>

<AppBanner />

<div class="container">
  <div class="row">
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
        <img
          src="/loading.gif"
          alt="loading gif"
          class="error-gif status-gif"
        />
      </div>
    {:else}
      <div class="col-md-3 col-sm-12 mb-md-0 mb-3 p-0">
        <img
          src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
          alt="name"
          class="single-comic-img col-12"
        />
      </div>

      <div class="col-md-7 col-sm-12">
        <h3 class="single-comic-title">
          {data?.title}
        </h3>
        <p class="single-comic-description mt-3">
          {data?.description ? data?.description : "There is no description"}
        </p>
        <p class="single-comic-description mt-3">
          Pages: {data?.pageCount}
        </p>
        <p class="single-comic-description mt-3">Language: en-us</p>
        <div class="single-comic-price mt-3 fw-bold">
          ${data?.prices[0].price}
        </div>
      </div>

      <div
        class="col-md-2 col-sm-12 order-md-last order-first mb-3 mb-md-0 text-end"
      >
        <a href="../comics" class="single-comic-back">Back to all</a>
      </div>
    {/if}
  </div>
</div>
