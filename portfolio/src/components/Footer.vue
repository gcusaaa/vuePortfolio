<template>
    <div class="container-lg bg-dark">
        <div class="row">
            <p class="lead">
                Sipho Gcusa &copy;
                <span>{{ currYear }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'FooterComp', 
        data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
        
    }
</script>


<style scoped>
.container-lg {
    color: #e2a368;
}
</style>