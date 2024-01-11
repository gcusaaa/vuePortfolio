<template>
    <div class="testimonials vh-100">
      <div class="row py-5 text-center position-relative">
        <div class="col-md-6 col-sm-12 mx-auto d-flex">
          <div class="displayTest" v-if="testimonials">
          <div 
          v-for="tes,index in testimonials" :key="tes.id">
          <h4 :id="'scrollspyHeading'+ (index)">{{ tes.name }} {{ tes.surname }}</h4>
          <img :src="tes.profile" alt="">
              <p>{{ tes.quotes }}</p>
              <hr>
          </div>
      </div>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials')
  }
}     
</script>

<style scoped>
.testimonials {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>