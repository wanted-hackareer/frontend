<template>
    <div>
        <Header headerNavigationTitle="나의 장바구니" />
        <div class="app-container">
            <div class="shopping-cart-container">
                <div class="shopping-cart-total">총 {{ getShoppingCartSize }} 개</div>
                <div class="shopping-cart-list">
                    <div class="shopping-cart-item">🍎 사과즙</div>
                    <div class="shopping-cart-item">🍎 사과즙</div>
                    <div class="shopping-cart-item">🍎 사과즙</div>
                </div>
            </div>
            <router-link to="/home/location">
                <div class="select-location__button">위치 지정하기</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";
import { createNamespacedHelpers } from "vuex";
const cartStore = createNamespacedHelpers("cartStore");

export default {
    name: "ShoppingCartPage",
    components: {
        Header,
    },
    computed: {
        ...cartStore.mapState({
            myShoppingCart: (state) => state.myShoppingCart,
        }),
        ...cartStore.mapGetters(["getShoppingCartSize"]),
    },
    created() {
        this.getMyShoppingCart();
    },
    methods: {
        ...cartStore.mapActions(["getMyShoppingCart"]),
    },
};
</script>
<style scoped>
@import "./ShoppingCartPage.css";
</style>
