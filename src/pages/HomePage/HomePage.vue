<template>
    <div>
        <Header :hasBackButton="false" :hasCartTab="true" headerNavigationTitle="다믐" />
        <div class="app-container">
            <div>
                <div class="home-introduce-content">
                    <div class="profile-image"></div>
                    <div class="profile-introduce-text">오늘은 어떤 장을 <br />함께 볼까요?</div>
                </div>
                <SearchInputComponent :isCart="true" />
            </div>
            <div class="home-cart-empty">장바구니가 비었습니다.</div>
        </div>
    </div>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import Header from "../../layout/Header/Header.vue";

export default {
    name: "HomePage",
    components: {
        Header,
        SearchInputComponent,
    },
};
</script>
<style scoped>
@import "./HomePage.css";
</style>
