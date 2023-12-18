<script>
  import AppBanner from "../../components/AppBanner/AppBanner.svelte";
  import ComicList from "../../components/ComicsList/ComicList.svelte";

  let comicId;
  function getComicId(id) {
    comicId = id;
  }
</script>

<AppBanner />
<ComicList {getComicId} />
