<template>
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <router-link to="/">
        <img class="img-fluid" src="https://i.postimg.cc/sD63jNkC/Screenshot-2023-10-30-115548.png" alt="" width="60">
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
            <router-link to="/testimonials" class="nav-link">
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
.nav-link {
    color: #e2a368;
}
</style>