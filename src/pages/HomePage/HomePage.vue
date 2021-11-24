<template>
    <div>
        <Header :hasBackButton="false" :hasCartTab="true" />
        <div class="app-container">
            <div>
                <div class="home-introduce-content">
                    <div class="profile-image"></div>
                    <div class="profile-introduce-text">오늘은 어떤 장을 <br />함께 볼까요?</div>
                </div>
                <div class="home-search-component">
                    <SearchInputComponent :isCart="true" />
                </div>
            </div>
            <div class="home-cart-empty" v-if="getShoppingCartSize === 0">
                <img class="home-cart-empty-image" src="../../assets/images/HomePage/cart-empty.png" />
                <div class="home-cart-empty-text">
                    당신의 장바구니가 <br />
                    비어 있습니다.
                </div>
            </div>
            <div v-else>
                <img class="home-cart-empty-image" src="../../assets/images/HomePage/home-main.png" />
            </div>
        </div>
    </div>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import Header from "../../layout/Header/Header.vue";

import { createNamespacedHelpers } from "vuex";
const cartStore = createNamespacedHelpers("cartStore");

export default {
    name: "HomePage",
    components: {
        Header,
        SearchInputComponent,
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
@import "./HomePage.css";
</style>
