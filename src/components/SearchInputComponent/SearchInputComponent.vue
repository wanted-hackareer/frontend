<template>
    <div class="search-wrap">
        <input
            type="text"
            :class="{ 'select__input-error': error }"
            ref="searchInput"
            class="select__input"
            v-model="searchData"
            :placeholder="getPlaceHolder"
        />
        <div>
            <button class="search__button" @click="clickSearchButton">
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
            else return "구매하고 싶은 항목을 검색해보세요.";
        },
    },
    methods: {
        getSearchData() {
            this.$emit("getSearchData", this.searchData);
        },
        focusInput() {
            this.$refs.searchInput.focus();
        },
        clickSearchButton() {
            if (this.isCart) {
                if (this.searchData.length === 0) {
                    this.error = true;
                    this.focusInput();
                    return;
                }
                this.$router.replace({ path: `/home/search/${this.searchData}` });
            } else if (this.isSearch) {
                this.$router.replace({ path: `/home/search/${this.searchData}` });
                this.getSearchData();
            } else if (this.isRegister) {
                this.getSearchData();
            } else return;
        },
    },
};
</script>
<style scoped>
@import "./SearchInputComponent.css";
</style>
