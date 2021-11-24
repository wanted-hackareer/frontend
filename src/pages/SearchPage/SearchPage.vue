<template>
    <div>
        <Header headerNavigationTitle="검색" :hasCartTab="true" />
        <div class="app-container">
            <div class="search-search-component">
                <SearchInputComponent :searchDataFromProps="searchData" :isCart="true" @getSearchData="getSearchData" />
            </div>
            <div class="search-loading-content" v-if="loading">
                <div class="loading-circle"></div>
                <div class="loading-text">검색하고 있어요.</div>
            </div>
            <div v-else class="search-filterd-content">
                <div>
                    <div class="search-status-bar">
                        <div>총 {{ searchList.length }} 개</div>
                        <div>더보기</div>
                    </div>
                    <div class="search-list-container">
                        <div class="search-list-wrapper" v-for="searchItem in searchList" :key="searchItem.id">
                            <div
                                class="search-search-list--item"
                                :class="{ 'search-list--item-active': searchItem.clicked }"
                                @click="selectSearchDataList(searchItem.id)"
                            >
                                {{ searchItem.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    class="search-add-cart__button"
                    :class="{ 'search-add-cart__button-active': selectedSearchList.length > 0 }"
                    @click="addCartList"
                >
                    카트에 담기
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import Header from "../../layout/Header/Header.vue";

export default {
    name: "SearchPage",
    components: {
        SearchInputComponent,
        Header,
    },
    data() {
        return {
            searchData: this.$route.params.word,
            searchList: [],
            selectedSearchList: [],
            loading: true,
        };
    },
    mounted() {
        this.setLoadingPage();
    },
    methods: {
        // 로딩화면
        setLoadingPage() {
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },
        getSearchData() {
            this.searchList = [
                { title: "사과즙", id: 1, clicked: false },
                { title: "당근즙", id: 2, clicked: false },
                { title: "딸기즙", id: 3, clicked: false },
            ];
        },
        // 물건 선택하기
        selectSearchDataList(id) {
            this.searchList.forEach((item) => {
                if (item.id === id) item.clicked = !item.clicked;
            });
            this.selectedSearchList = this.searchList.filter((item) => item.clicked === true);
        },

        // 카트에 담기
        addCartList() {
            if (this.selectedSearchList.length === 0) return;
        },
    },
};
</script>
<style scoped>
@import "./SearchPage.css";
</style>
