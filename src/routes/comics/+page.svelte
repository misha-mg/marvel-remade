<script>
  import AppBanner from "../../components/AppBanner/AppBanner.svelte";
  import ComicsList from "../../components/ComicsList/ComicsList.svelte";

  let comicId;

  function getComicId(id) {
    comicId = id;
  }
</script>

<AppBanner />
<ComicsList {getComicId} />
