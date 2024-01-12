<template>
    <div class="spinner-container" v-if="loading">
        <div class="spinner"></div>
    </div>
</template>

<script>
    export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
</script>

<style lang="scss" scoped>
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.spinner {
    width: 48px;
    height: 48px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #5c6bc0;
    border-radius: 50%;
    -webkit-animation: spin .7s linear infinite;
    animation: spin .7s linear infinite;
}
@keyframes spin {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

</style>