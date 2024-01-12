<template>
    <h2 class="resume m-5">myRESUME</h2>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-12">
        <h2 class="">Education</h2>
          <div class="education " v-if="education">
            <div class="displayEduca" v-for="educa in education" :key="educa.id">
              <div class="card mb-4 p-3" style="width: 100%;">
                <div class="card-body">
                  <h5 class="card-title fs-4 mb-3">{{ educa.place }}</h5>
                    <div class="row">
                      <div class="col-4">
                        <img class="img-fluid" :src="educa.certificate" alt="School" width="75">
                      </div>
                      <div class="col-8">
                        <h5 class="card-head">{{ educa.type }}</h5>
                        <p class="card-text">{{ educa.description }}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1">
          
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h2>Skills</h2>
          <div class="skills">
            <div class="row" v-if="skills" >
              <div class="col-6 col-md-4" v-for="kills in skills" :key="kills.id">
                <p>
                  <button class="btn m-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <img class="img-fluid" :src="kills.photo" :alt="Icon-images" width="70">
                  </button>
                </p>
                <div style="min-height: 120px;">
                  <div class="collapse collapse-horizontal" id="collapseWidthExample">
                    <p>{{ kills.title }}</p>
                    <div class="card card-body" style="width: 200px;">
                      {{ kills.experience }}
                    </div>
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
        education() {
            return this.$store.state.education;
        },
        skills() {
            return this.$store.state.skills;
        }
    },
    mounted() {
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchSkills')
    }
  }
</script>
     


<style scoped>
.card {
    background-color: #e2a368;
}
.row, .resume {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>