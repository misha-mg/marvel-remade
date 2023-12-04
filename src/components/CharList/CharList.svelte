<script>
  import CharListItem from "../CharListItem/CharListItem.svelte";

  const newArr = new Array(6);
  console.log(newArr);
</script>

<div class="container p-0">
  <div class="row">
    {#each newArr as item}
      <a class="col-xl-4 col-lg-6 col-md-12 col-6 p-1">
        <CharListItem name={item} />
      </a>
    {/each}
  </div>
</div>
