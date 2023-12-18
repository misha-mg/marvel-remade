<script>
  export let name = "Name";
  export let thumbnail = {};
</script>

<div class="charItem">
  <div class="charItem-img">
    <img src="{thumbnail.path}.jpg" alt="Char Image" />
  </div>
  <div class="charItem-name p-3">{name}</div>
</div>
