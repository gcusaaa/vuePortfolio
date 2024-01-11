<template>
    <h2 class="resume">myRESUME</h2>
    <div class="row justify-content-center vh-100">
        <div class="col-4">
        <h2>Edcucation</h2>
          <div class="education " v-if="education">
            <div class="displayEduca" v-for="educa in education" :key="educa.id">
              <div class="card m-2 p-2" style="width: 22rem;">
                <div class="card-body">
                  <h5 class="card-title fs-4 mb-3">{{ educa.place }}</h5>
                    <div class="row">
                      <div class="col-3">
                        <img :src="educa.certificate" alt="School" width="75">
                      </div>
                      <div class="col-9">
                        <h5 class="card-head">{{ educa.type }}</h5>
                        <p class="card-text">{{ educa.description }}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h2>Skills</h2>
          <div class="skills" v-if="skills">
            <div class="row" v-for="kills in skills" :key="kills.id">
                <p>
                  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <img :src="kills.photo" :alt="Icon-images" width="100">
                  </button>
                </p>
                <div style="min-height: 120px;">
                  <div class="collapse collapse-horizontal" id="collapseWidthExample">
                    <p>{{ kills.title }}</p>
                    <div class="card card-body" style="width: 300px;">
                      {{ kills.experience }}
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