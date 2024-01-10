<template>
  <div class="container">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-6">
        <h2 class="display-3 fw-bold text-secondary mb-2">Hello! I'm Asisipho Gcusa,</h2>
        <p class="lead fs-3 text-secondary mb-2">an aspiring full-stack web developer</p>
      </div>
      <div class="col-4">
        <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQCmr5gh96WtArhrClTsxhVWiueK-fwSbQ-B68HDGK1tMW2ltqr19jfwSdlNrKFV_szMkwh89VIGxzRSoVo_BdWh297Ng=w1227-h912" alt="" width="400">
      </div>
    </div>
  </div>
  <!-- <div class="row" v-if="about">
    <p class="lead" v-for=""></p>
  </div> -->
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
