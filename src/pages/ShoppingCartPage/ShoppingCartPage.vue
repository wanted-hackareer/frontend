<template>
    <div>
        <Header headerNavigationTitle="나의 장바구니" />
        <div class="app-container">
            <div class="shopping-cart-container">
                <div class="shopping-cart-total">총 00개</div>
                <div class="shopping-cart-list">
                    <div class="shopping-cart-item">🍎 사과즙</div>
                    <div class="shopping-cart-item">🍎 사과즙</div>
                    <div class="shopping-cart-item">🍎 사과즙</div>
                </div>
            </div>
            <router-link to="/location">
                <div class="select-location__button">위치 지정하기</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "ShoppingCartPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./ShoppingCartPage.css";
</style>
