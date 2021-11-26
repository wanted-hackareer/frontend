<template>
    <div class="search-wrap">
        <input type="text" :class="{ 'select__input-error': error }" class="select__input" v-model="searchData" :placeholder="getPlaceHolder" />
        <div v-if="isChat">
            <button class="search__button">
                <img src="../../assets/images/SearchInputComponent/search.png" />
            </button>
        </div>
        <div v-else-if="isRegister" @click="getSearchData">
            <button class="search__button">
                <img src="../../assets/images/SearchInputComponent/search.png" />
            </button>
        </div>
        <div v-else-if="isFilter">
            <button class="search__button">
                <img src="../../assets/images/SearchInputComponent/search.png" />
            </button>
        </div>
        <div v-else-if="isCart" @click="goToSearch">
            <button class="search__button">
                <img src="../../assets/images/SearchInputComponent/search.png" />
            </button>
        </div>
         <router-link v-else-if="isSearch" :to="`/search/${searchData}`">
            <button class="search__button" @click="getSearchData">
                <img src="../../assets/images/SearchInputComponent/search.png" />
            </button>
        </router-link>
        <div v-else>
            <button class="search__button" @click="getSearchData">
                <img src="../../assets/images/SearchInputComponent/search.png" />
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchInputComponent",
    props: {
        isCart: {
            type: Boolean,
            default: false,
        },
        isChat: {
            type: Boolean,
            default: false,
        },
        isSearch: {
            type: Boolean,
            default: false,
        },
        isRegister: {
            type: Boolean,
            default: false,
        },
        isFilter: {
            type: Boolean,
            default: false,
        },
        searchDataFromProps: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            postcode: "",
            address: "",
            extraAddress: "",
            searchData: this.searchDataFromProps,
            error: false,
        };
    },
    computed: {
        getPlaceHolder() {
            if (this.error) return "검색어를 입력해주세요.";
            else if (this.isCart) return "구매하고 싶은 항목을 검색해보세요.";
            else if (this.isChat) return "채팅방을 검색해보세요.";
            else if (this.isRegister) return "주소를 검색해주세요.";
            else if (this.isFilter) return "어떤 모임을 찾고 싶으신가요?";

            return "구매하고 싶은 항목을 검색해보세요.";
        },
    },
    methods: {
        getSearchData() {
            this.$emit("getSearchData", this.searchData);
        },
        goToSearch() {
            if (this.searchData.length === 0) {
                this.error = true;
                return;
            }
            this.$router.replace({ path: `/search/${this.searchData}` });
        },
    },
};
</script>
<style scoped>
@import "./SearchInputComponent.css";
</style>
