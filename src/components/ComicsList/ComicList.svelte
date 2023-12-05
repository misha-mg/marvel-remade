<script>
  import ComicsListItem from "../ComicsListItem/ComicsListItem.svelte";

  let items = new Array(8);
</script>

<div class="container p-0">
  <div class="row">
    {#each items as item}
      <div class="col-md-3 col-sm-4 col-6 mb-md-4 mb-3">
        <a href="#">
          <ComicsListItem />
        </a>
      </div>
    {/each}
  </div>
  <div class="row">
    <div class="col-12 text-center">
      <button class:disabled={false} class="button"> load more </button>
    </div>
  </div>
</div>
