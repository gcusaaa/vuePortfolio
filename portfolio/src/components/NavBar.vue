<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/">
        <img class="img-fluid" src="" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/" class="nav-link">
                Home
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link">
                About
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/resume" class="nav-link">
                Resume
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/project" class="nav-link">
                Project
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/testimonial" class="nav-link">
                Testimonial
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/reachme" class="nav-link">
                Reach me
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>