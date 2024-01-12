<template>
    <div class="testimonials">
      <div class="row py-5 text-center position-relative">
        <div class="col-1">
          <h2 class="Monial display-3">my Testimonials</h2>
        </div>
        <div class="col-md-6 col-sm-12 mx-auto">
          <div class="displayTest" v-if="testimonials">
            <div class="row" v-for="tes,index in testimonials" :key="tes.id">
              <div class="col-md-4 col-sm-12 mb-4">
              <img class="img-fluid rounded" :src="tes.profile" alt="" width="160">
              </div>
              <div class="col-md-8 col-sm-12 mb-4">
                <h4 :id="'scrollspyHeading'+ index">{{ tes.name }} {{ tes.surname }}</h4>
                <p>{{ tes.quotes }}</p>
                <hr>
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
.Monial{
  color:#383d42;
  transform: rotate(-90deg);
}
.col-1{
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>