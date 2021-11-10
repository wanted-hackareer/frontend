<template>
    <div>
        <nav class="top-nav top-nav--active">
            <div class="header__nav">
                <div>
                    <div v-if="hasBackButton" @click="goToBack">
                        <button>←</button>
                    </div>
                </div>
                <span class="header__title">{{ headerNavigationTitle }}</span>
                <div>
                    <router-link v-if="hasCartTab" to="/shoppingcart">
                        <button>장바구니</button>
                    </router-link>
                    <router-link v-if="hasAlertTab" to="/alert">
                        <button>알림</button>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
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
