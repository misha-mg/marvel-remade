<script>
  import CharListItem from "../CharListItem/CharListItem.svelte";

  const newArr = new Array(6);
  console.log(newArr);
</script>

<div class="container p-0">
  <div class="row">
    {#each newArr as item}
      <a class="col-xl-4 col-lg-6 col-md-12 col-6 mb-3">
        <CharListItem name={item} />
      </a>
    {/each}
  </div>
  <div class="row">
    <div class="col-12 text-center">
      <button class:disabled={false} class="button">
        <div class="inner">load more</div>
      </button>
    </div>
  </div>
</div>
