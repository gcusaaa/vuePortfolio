<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Res</h2>
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