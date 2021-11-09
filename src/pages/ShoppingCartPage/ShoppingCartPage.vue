<template>
    <div>
        <Header headerNavigationTitle="나의 장바구니" />
        <div class="app-container">
            <div>장바구니 페이지입니다.</div>
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
