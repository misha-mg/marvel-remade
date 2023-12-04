<script>
  import SingleComicPage from "../../../components/SingleComicPage/SingleComicPage.svelte";
  import { page } from "$app/stores";

  let comicId = $page.params.item;
</script>

<SingleComicPage {comicId} />
