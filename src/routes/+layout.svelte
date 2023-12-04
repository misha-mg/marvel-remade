<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  // import "bootstrap/dist/js/bootstrap";
  import "../resources/css/app.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  $: currentRoute = $page.url;
</script>

<div class="container">
  <div class="row mb-4">
    <div class="col-12 p-0">
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container p-0">
          <h1 class="header-title m-0">
            <a href="/"
              ><span>Marvel</span>

              <p class="d-md-inline d-none">information portal</p>
            </a>
          </h1>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav header-nav-items">
              <li class="nav-item">
                <a class:active={currentRoute.pathname == "/"} href="/"
                  >Characters
                </a>
              </li>
              <p class="d-none d-md-block">/</p>
              <li class="nav-item">
                <a
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
