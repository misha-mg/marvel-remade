<script>
  import CharInfo from "../components/CharInfo/CharInfo.svelte";
  import CharList from "../components/CharList/CharList.svelte";
  import CharListItem from "../components/CharListItem/CharListItem.svelte";
  import RandomChar from "../components/RandomChar/RandomChar.svelte";
</script>

<div class="container">
  <div class="row randomchar mb-4">
    <RandomChar />
  </div>
</div>

<div class="container">
  <div class="row d-flex justify-content-between">
    <div class="col-xl-8 col-md-6 col-sm-12">
      <CharList />
    </div>
    <div class="col-xl-4 col-md-6 col-sm-12">
      <CharInfo />
    </div>
  </div>
</div>
