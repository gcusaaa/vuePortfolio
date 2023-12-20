<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/project">Project</router-link> |
    <router-link to="/testimonial">Testimonial</router-link> |
    <router-link to="/reachme">Reach me</router-link>
  </nav> -->
  <main class="container-fluid">
    <NavBar />
    <router-view/>
  </main>

  <FooterView />


</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterView from './components/Footer.vue';

export default {
  components: {
    NavBar,
    FooterView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
