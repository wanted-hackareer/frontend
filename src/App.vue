<template>
    <div id="app">
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Footer from "./layout/Footer/Footer.vue";
export default {
    name: "App",
    components: {
        Footer,
    },
};
</script>

<style>
@import "./index.css";
</style>
