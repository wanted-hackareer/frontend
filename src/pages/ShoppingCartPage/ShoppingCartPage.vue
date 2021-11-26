<template>
    <div>
        <Header headerNavigationTitle="나의 장바구니" />
        <div class="app-container">
            <div class="shopping-cart-container">
                <div class="shopping-cart-total">총 {{ cartList.length }} 개</div>
                <div class="shopping-cart-list">
                    <div class="shopping-cart-item" v-for="cartItem in cartList" :key="cartItem.id">
                        {{ cartItem.name }}
                    </div>
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
const userHelper = createNamespacedHelpers("userStore");

export default {
    name: "ShoppingCartPage",
    components: {
        Header,
    },
    computed: {
        ...userHelper.mapState({
            cartList: (state) => state.cartList,
        }),
    },
    created() {
        this.getMyProfile();
    },
    methods: {
        ...userHelper.mapActions(["getMyProfile"]),
    },
};
</script>
<style scoped>
@import "./ShoppingCartPage.css";
</style>
