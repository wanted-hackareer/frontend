<template>
    <div>
        <Header headerNavigationTitle="검색" :hasCartTab="true" />
        <div class="app-container">
            <SearchInputComponent />
            <div class="search-filterd-content">검색 페이지입니다.</div>
            <div>
                <div class="search-add-cart__button">카트에 담기</div>
            </div>
        </div>
    </div>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import Header from "../../layout/Header/Header.vue";

export default {
    name: "Search",
    components: {
        SearchInputComponent,
        Header,
    },
};
</script>
<style scoped>
@import "./Search.css";
</style>
