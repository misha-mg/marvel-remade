<script>
  import { onMount } from "svelte";
  import CharInfo from "../components/CharInfo/CharInfo.svelte";
  import CharList from "../components/CharList/CharList.svelte";
  import CharListItem from "../components/CharListItem/CharListItem.svelte";
  import RandomChar from "../components/RandomChar/RandomChar.svelte";
  import { AsyncRequest } from "$lib/utils";

  let idFromList;
  function getCharId(newId) {
    idFromList = newId;
  }
</script>

<div class="container">
  <div class="row randomChar mb-4">
    <RandomChar />
  </div>
</div>

<div class="container p-0">
  <div class="row d-flex justify-content-between">
    <div class="col-xl-8 col-md-6 col-sm-12">
      <CharList {getCharId} />
    </div>
    <div class="col-xl-4 col-md-6 col-sm-12 order-md-last order-first mb-4">
      <CharInfo id={idFromList} />
    </div>
  </div>
</div>
