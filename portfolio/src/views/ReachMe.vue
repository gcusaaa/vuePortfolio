<template>
    <div class="container-fluid">
        <div class="row vh-100 justify-content-center align-content-center">
          <div class="col">
              <div class="container bg-dark p-5" height="100" width="100">
                <h5 class="display-6">Let's Get In Touch</h5>
                <div class="row">
                  <div class="col">
                    <div class="container-fluid">
                      <h5 class="mb-2">Name</h5>
                      <div class="form-floating">
                        <input type="email" id="email" class="form-control" placeholder="e.g gcusaaa@gmail.com" required>
                        <label class="text-danger" for="email" rows="3">e.g Sipho Gcusa</label>
                      </div>
                      <h5 class="Email">E-mail</h5>
                      <div class="form-floating">
                        <input type="email" id="email" class="form-control" placeholder="e.g gcusaaa@gmail.com" required>
                        <label class="text-body-secondary" for="email">e.g gcusaaa@gmail.com</label>
                      </div>
                      <h5>Query</h5>
                      <div class="form-floating">
                        <input type="email" id="email" class="form-control py-5" placeholder="text" required>
                        <label class="text-danger" for="email">Ask your question</label>
                        <button class="mt-2 border-0 bg-danger text-dark p-2">submit</button>
                      </div>
                    </div>
                  </div>
                  <div class="col" id="card-row2">
                      <div class="col-8 p-3 card my-4 mx-5">
                          <i class="bi bi-geo-alt-fill"></i>
                          <h6>Call me</h6>
                          <p>+27 69 292 9578</p>
                      </div>
                      <div class="col-8 p-3 card my-4 mx-5">
                          <i class="bi bi-envelope-at-fill"></i>
                          <h6>E-mail</h6>
                          <p>gcusaaa@gmail.com</p>
                      </div>
                      <div class="col-8 p-3 card my-4 mx-5">
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
</style>