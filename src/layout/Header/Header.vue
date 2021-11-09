<template>
    <div>
        <nav class="top-nav top-nav--active">
            <!-- <div v-if="$route.path === '/'" to="/" class="header__nav header__title1">
                <div class="" />
                <button>back</button>
            </div> -->
            <div class="header__nav">
                <div @click="goToBack">
                    <button>←</button>
                </div>
                <span class="header__title">{{ headerNavigationTitle }}</span>
                <router-link to="/shoppingcart">
                    <button v-if="hasCartTab">장바구니</button>
                </router-link>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Header",
    props: {
        hasCartTab: Boolean,
        headerNavigationTitle: String,
    },
    data() {
        return {};
    },
    methods: {
        goToBack() {
            this.$router.go(-1);
        },
    },
};
</script>
<style scoped>
@import "./Header.css";
</style>
