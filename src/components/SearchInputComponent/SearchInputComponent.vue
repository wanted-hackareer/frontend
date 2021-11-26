<template>
    <div class="search-wrap">
        <input type="texxt" class="select__input" v-model="searchData" :placeholder="getPlaceHolder" />
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
        <router-link v-else-if="isCart" :to="`/search/${searchData}`">
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
        };
    },
    computed: {
        getPlaceHolder() {
            if (this.isCart) return "구매하고 싶은 항목을 검색해보세요.";
            else if (this.isChat) return "채팅방을 검색해보세요.";
            else if (this.isRegister) return "주소를 검색해주세요.";
            else if (this.isFilter) return "어떤 모임을 찾고 싶으신가요?";
            return "구매하고 싶은 항목을 검색해보세요.";
        },
    },
    methods: {
        execDaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    if (this.extraAddress !== "") {
                        this.extraAddress = "";
                    }
                    if (data.userSelectedType === "R") {
                        // 사용자가 도로명 주소를 선택했을 경우
                        this.address = data.roadAddress;
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        this.address = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === "R") {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            this.extraAddress += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            this.extraAddress += this.extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (this.extraAddress !== "") {
                            this.extraAddress = `(${this.extraAddress})`;
                        }
                    } else {
                        this.extraAddress = "";
                    }
                    // 우편번호를 입력한다.
                    this.postcode = data.zonecode;
                },
            }).open(this.$refs.embed);
        },

        getSearchData() {
            this.$emit("getSearchData", this.searchData);
        },
    },
};
</script>
<style scoped>
@import "./SearchInputComponent.css";
</style>
