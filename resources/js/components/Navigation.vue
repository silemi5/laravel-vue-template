<template>
    <div style="display: inline">
        <h3>silemi5's Landing page</h3>
        <router-link v-for="route in routes" :key="route.path" :to="route.path">
            {{ route.name }} 
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: this.$router.options.routes
            };
        }
    }
</script>