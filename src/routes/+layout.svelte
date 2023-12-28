<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  // import "bootstrap/dist/js/bootstrap";
  import "../resources/css/app.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import ThemeButton from "../elements/ThemeButton.svelte";

  $: currentRoute = $page.url;

  let navbar;
  onMount(() => {
    navbar = document.querySelector("#navbarNav");
  });
  function toggleNav() {
    navbar.classList.toggle("show");
  }

  let theme = "light";

  function setTheme() {
    theme = theme == "light" ? "dark" : "light";
    changeTheme();
  }

  function changeTheme() {
    let backgrountColor1 = `var(--backgrount-color1-${theme})`;
    let backgrountColor2 = `var(--backgrount-color2-${theme})`;
    let textColor = `var(--text-color-${theme})`;
    let textColor2 = `var(--text-color2-${theme})`;
    let focusColor = `var(--focus-color-${theme})`;
    let focusColor2 = `var(--focus-color2-${theme})`;
    document.body.style.setProperty("--backgrount-color1", backgrountColor1);
    document.body.style.setProperty("--backgrount-color2", backgrountColor2);
    document.body.style.setProperty("--text-color", textColor);
    document.body.style.setProperty("--text-color2", textColor2);
    document.body.style.setProperty("--focus-color", focusColor);
    document.body.style.setProperty("--focus-color2", focusColor2);
  }
</script>

<div class="container">
  <div class="row mb-3">
    <div class="col-12 p-0">
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container p-0">
          <h1 class="header-title m-0">
            <a href="/"
              ><span>Marvel</span>

              <p class="d-md-inline d-none">information portal</p>
            </a>
          </h1>
          <ThemeButton customFunction={setTheme} currentThemeClass={theme} />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            on:click={toggleNav}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav header-nav-items pt-md-0 pt-3">
              <li class="nav-item text-md-start text-center">
                <a
                  on:click={() => navbar.classList.remove("show")}
                  class:active={currentRoute.pathname == "/"}
                  href="/"
                  >Characters
                </a>
              </li>
              <p class="d-none d-md-block px-1">/</p>
              <li class="nav-item text-md-start text-center">
                <a
                  on:click={() => navbar.classList.remove("show")}
                  class:active={currentRoute.pathname == "/comics"}
                  href="/comics"
                >
                  Comics</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>

<slot />
