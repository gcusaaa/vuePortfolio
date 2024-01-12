<template>
  <div class="container">
    <div class="row vh-100 align-items-center justify-content-center">
      <div class="col-lg-6 col-md-8">
        <h2 class="display-3 fw-bold text-secondary mb-2">Hello! I'm Asisipho Gcusa,</h2>
        <p class="lead fs-3 text-dark mb-4">an aspiring full-stack web developer</p>
      </div>
      <div class="col-lg-4 col-md-8 col-sm-10">
        <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQCmr5gh96WtArhrClTsxhVWiueK-fwSbQ-B68HDGK1tMW2ltqr19jfwSdlNrKFV_szMkwh89VIGxzRSoVo_BdWh297Ng=w1227-h912" alt="Profile" class="img-fluid" width="400">
      </div>
    </div>
  </div>
</template>

<script>

export default{
  mounted() {
    setTimeout(() => {
      this.$el.classList.add('fade-in');
    }, 500);
  }
}

</script>

<style scoped>
.container {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
