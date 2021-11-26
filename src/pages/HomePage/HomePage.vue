<template>
    <div>
        <Header :hasBackButton="false" :hasCartTab="true" />
        <div class="app-container">
            <div>
                <div class="home-introduce-content">
                    <div class="profile-image">
                        <img src="../../assets/images/HomePage/profile.png" />
                    </div>
                    <div class="profile-introduce-text">오늘은 어떤 장을 <br />함께 볼까요?</div>
                </div>
                <div class="home-search-component">
                    <SearchInputComponent :isCart="true" />
                </div>
            </div>
            <div class="home-cart-empty" v-if="cartList.length === 0">
                <img class="home-cart-empty-image" src="../../assets/images/HomePage/cart-empty.png" />
                <div class="home-cart-empty-text">
                    당신의 장바구니가 <br />
                    비어 있습니다.
                </div>
            </div>
            <div v-else>
                <div class="home-cart-item-container">
                    <div class="home-cart-item-header-container">
                        <div>
                            <img class="header-alert" src="../../assets/images/Header/alert.png" />
                        </div>
                        <div class="home-cart-item-header">이미 {{ this.getShoppingCartSize }}개의 물품이 담겨있어요!</div>
                    </div>
                    <div class="home-cart-list">
                        <div class="home-cart-item" v-for="cartItem in filterCartList" :key="cartItem.id">
                            {{ cartItem.name }}
                        </div>
                        <div class="home-cart-item" v-if="this.getShoppingCartSize > 3">+{{ countCartList }}</div>
                    </div>
                    <router-link to="/home/location">
                        <button class="home-cart-matching">바로 매칭하기</button>
                    </router-link>
                </div>
                <img class="home-cart-image" src="../../assets/images/HomePage/home-main.png" />
            </div>
        </div>
    </div>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import Header from "../../layout/Header/Header.vue";

import { createNamespacedHelpers } from "vuex";
const userHelper = createNamespacedHelpers("userStore");

export default {
    name: "HomePage",
    components: {
        Header,
        SearchInputComponent,
    },
    computed: {
        ...userHelper.mapState({
            userNickName: (state) => state.userNickName,
            cartList: (state) => state.cartList,
        }),
        ...userHelper.mapGetters(["getShoppingCartSize"]),

        filterCartList() {
            return this.cartList.filter((_, index) => index < 3);
        },
        countCartList() {
            return this.getShoppingCartSize - this.filterCartList.length;
        },
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
@import "./HomePage.css";
</style>
