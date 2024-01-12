<template>
    <div class="container-fluid">
        <div class="row justify-content-center align-content-center my-5">
          <div class="col-md-10">
              <div class="container bg-dark p-5">
                <h5 class="display-6 mb-5">Let's Get In Touch</h5>
                <div class="row">
                  <div class="col-md-7">
                    <div class="inputNames">
                      <h5 class="name mb-2">Name</h5>
                      <div class="form-floating">
                        <input type="text" id="email" class="form-control" placeholder="e.g Sipho Gcusa" required>
                        <label class="text-danger" for="name">e.g Sipho Gcusa</label>
                      </div>
                      <h5 class="Email mt-4">E-mail</h5>
                      <div class="form-floating">
                        <input type="email" id="email" class="form-control" placeholder="e.g gcusaaa@gmail.com" required>
                        <label class="text-body-secondary" for="email">e.g gcusaaa@gmail.com</label>
                      </div>
                      <h5 class="query mt-4">Query</h5>
                      <div class="form-floating">
                        <input type="text" id="query" class="form-control py-5" placeholder="Ask your question" required>
                        <label class="text-danger" for="query">Ask your question</label>
                        <button class="mt-2 border-0 bg-danger text-dark p-2">submit</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                      <div class="col-12 p-2 card my-4">
                          <i class="bi bi-geo-alt-fill"></i>
                          <h6>Call me</h6>
                          <p>+27 69 292 9578</p>
                      </div>
                      <div class="col-12 p-2 card my-4">
                          <i class="bi bi-envelope-at-fill"></i>
                          <h6>E-mail</h6>
                          <p>gcusaaa@gmail.com</p>
                      </div>
                      <div class="col-12 p-2 card my-4">
                          <i class="bi bi-telephone-fill"></i>
                          <h6>Location</h6>
                          <p>Cape Town, Western Cape</p>
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
        
    }
</script>

<style scoped>
.display-6, .container-fluid{
    color: #e2a368;
}
.container-fluid{
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>