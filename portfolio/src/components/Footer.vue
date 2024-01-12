<template>
    <div class="footer bg-dark">
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
.footer {
    color: #e2a368;
}
</style>