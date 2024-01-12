<template>
    <div class="projects">
      <div class="container">
        <div class="row justify-content-center">
        <div class="col-12">
            <h2 class="row justify-content-center m-4">myPROJECTS</h2>
        </div>
        <div class="col-md-10" v-if="projects">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="pro in projects" :key="pro.name">
              <div class="card p-2 m-2 bg-dark" style="width: 100%; height: 100%;">
              <img class="photo mx-auto d-block" :src="pro.image" :alt="Project-image" width="180">
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