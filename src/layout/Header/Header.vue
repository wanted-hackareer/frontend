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
                <router-link v-if="hasCartTab" to="/shoppingcart">
                    <button>장바구니</button>
                </router-link>
                <router-link v-if="hasAlertTab" to="/alert">
                    <button>알림</button>
                </router-link>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Header",
    props: {
        hasCartTab: {
            type: Boolean,
            default: false,
        },
        hasAlertTab: {
            type: Boolean,
            default: false,
        },
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
