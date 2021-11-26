<template>
    <div>
        <nav class="top-nav top-nav--active">
            <div class="header__nav">
                <div>
                    <div v-if="hasBackButton" @click="goToBack">
                        <button>
                            <img class="header-back__button" src="../../assets/images/Header/backbutton.png" />
                        </button>
                    </div>
                    <div v-else>
                        <button class="empty-button"></button>
                    </div>
                </div>
                <span v-if="headerNavigationTitle" class="header__title">{{ headerNavigationTitle }}</span>
                <span v-else class="header__title">
                    <img src="../../assets/images/Header/logo.png" />
                </span>
                <div>
                    <router-link v-if="hasCartTab" to="/home/shoppingcart">
                        <img class="header-shopping-cart" src="../../assets/images/Header/shopping-cart.png" />
                    </router-link>
                    <router-link v-else-if="hasAlertTab" to="/alert">
                        <img class="header-alert" src="../../assets/images/Header/alert.png" />
                    </router-link>
                    <div v-else>
                        <button class="empty-button"></button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const cartStore = createNamespacedHelpers("cartStore");

export default {
    name: "Header",
    props: {
        hasBackButton: {
            type: Boolean,
            default: true,
        },
        hasCartTab: {
            type: Boolean,
            default: false,
        },
        hasAlertTab: {
            type: Boolean,
            default: false,
        },
        headerNavigationTitle: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
    computed: {
        ...cartStore.mapGetters(["getShoppingCartSize"]),
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
