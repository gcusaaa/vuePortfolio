<template>
    <div class="container-lg">
        <div class="row">
            <nav id="navbar-example2" class="navbar bg-body-tertiary px-5 mb-3">
              <a class="navbar-brand" href="#">Navbar</a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading1">First</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">Second</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                    <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
              <h4 id="scrollspyHeading1">First heading</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti adipisci. Ab odit quia saepe voluptatum dicta eum minima accusamus voluptas neque repellat. Odit enim dolore et laboriosam! Consequatur, voluptates.</p>
              <h4 id="scrollspyHeading2">Second heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam delectus modi id dolorum amet quod laudantium voluptate inventore voluptas mollitia illum, voluptatum vel, totam enim molestias quo repellat iste excepturi?</p>
              <h4 id="scrollspyHeading3">Third heading</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sequi, quidem, accusamus consectetur amet aliquid, illo cupiditate error nesciunt maxime quis veritatis modi reiciendis quasi quaerat dolorem voluptas quo numquam?</p>
              <h4 id="scrollspyHeading4">Fourth heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat, velit quod, repellendus inventore odio esse, obcaecati necessitatibus ducimus cum temporibus nihil! Aperiam placeat a, quae accusantium aspernatur incidunt maxime.</p>
              <h4 id="scrollspyHeading5">Fifth heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci beatae voluptatibus praesentium autem, harum vel dignissimos. Dignissimos harum architecto, eveniet minus corrupti cupiditate obcaecati delectus, deserunt praesentium nostrum labore.</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  computed: {
    about() {
      return this.$store.state.about;
    }
  },
  mounted() {
    this.$store.state.about;
  }
}    
        
</script>

<style scoped>

</style>