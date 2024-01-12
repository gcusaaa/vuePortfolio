<template>
    <div class="projects">
      <div class="row justify-content-center d-flex">
        <div class="col-10 proCard" v-if="projects">
            <h2 class="row justify-content-center m-4">myPROJECTS</h2>
          <div class="card p-2 m-2 bg-dark" style="width: 18rem;" v-for="pro in projects" :key="pro.name">
              <img class="photo" :src="pro.image" :alt="Project-image" width="100">
            <div class="card-body">
              <h3 class="card-title">{{ pro.name }}</h3>
              <p class="card-text">{{ pro.description }}</p>
              <a :href="pro.gitHub" class="btn">gitHub</a>
              <a :href="pro.netlify" class="btn">netlify</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
      computed: {
        projects() {
            return this.$store.state.projects;
        }
    },
    mounted() {
    this.$store.dispatch('fetchProjects')
    }
}
</script>

<style scoped>
.card, .btn {
    color: #e2a368;
}
.photo {
    border-radius: 5px;
    align-content: end;  
}
.projects {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>