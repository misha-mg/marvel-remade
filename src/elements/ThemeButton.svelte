<script>
  export let customFunction = () => {};
  export let currentThemeClass = "light";
</script>

<button class="theme-button mx-3" on:click={customFunction}>
  <span class="theme-button-content {currentThemeClass}"></span>
</button>
