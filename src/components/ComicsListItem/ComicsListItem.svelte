<script>
  export let title = "";
  export let prices = [];
  export let thumbnail = {};
</script>

<li class="comicsItem">
  <img class="comicsItem-img mb-2" src="{thumbnail.path}.jpg" />
  <div class="comicsItem-title">{title}</div>
  <div class="comicsItem-price">{prices[0].price}</div>
</li>
