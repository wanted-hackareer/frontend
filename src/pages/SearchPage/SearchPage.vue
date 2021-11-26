<template>
    <div>
        <Header headerNavigationTitle="검색" :hasCartTab="true" />
        <div class="app-container">
            <div class="search-search-component">
                <SearchInputComponent :searchDataFromProps="searchData" :isSearch="true" @getSearchData="getSearchData" />
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
                    <div class="item-input-content">
                        <input
                            class="item-input"
                            ref="itemInput"
                            type="text"
                            v-model="cartListValue"
                            maxlength="10"
                            placeholder="추가할 상품을 입력하세요."
                        />
                        <button class="item-tag-length">{{ cartListValue.length }} / 10</button>
                        <div class="add-item-tag__button-list" @click="addTagItem">
                            <button class="add-item-tag__button">
                                <img src="../../assets/images/PlusButtons/plus-yellow.png" />
                            </button>
                        </div>
                    </div>
                    <div v-if="cartItemError.length !== 0" class="cart-item-error error-text">{{ cartItemError }}</div>

                    <div class="search-list-container">
                        <div class="search-list-wrapper" v-for="searchItem in searchList" :key="searchItem.name">
                            <div
                                class="search-search-list--item"
                                :class="{ 'search-list--item-active': searchItem.clicked }"
                                @click="selectSearchDataList(searchItem.name)"
                            >
                                {{ searchItem.name }}
                            </div>
                        </div>
                    </div>
                    <div v-if="addCartItemError.length !== 0" class="add-cart-item-error error-text">{{ addCartItemError }}</div>
                </div>

                <div class="search-add-cart__alarm" :class="computedClass">
                    <div>장바구니에 물품이 담겼습니다.</div>
                    <div class="cart__alarm-confirm" @click="goToCartList">확인하기</div>
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

import { createNamespacedHelpers } from "vuex";
const userHelper = createNamespacedHelpers("userStore");

export default {
    name: "SearchPage",
    components: {
        SearchInputComponent,
        Header,
    },
    data() {
        return {
            searchData: this.$route.params.word,
            selectedSearchList: [],
            loading: true,
            cartItemError: "",
            addCartItemError: "",
        };
    },
    mounted() {
        this.setLoadingPage();
        this.getSearchData(this.searchData);
    },
    computed: {
        ...userHelper.mapState({
            cartList: (state) => state.cartList,
            cartItem: (state) => state.cartItem,
            basketId: (state) => state.basketId,
            searchList: (state) => state.searchList,
            addCartStatus: (state) => state.addCartStatus,
        }),
        cartListValue: {
            get() {
                return this.cartItem;
            },
            set(value) {
                this.UPDATE_CART_LIST(value);
            },
        },
        computedClass() {
            if (this.addCartStatus) {
                return "stagger-item";
            } else {
                return "stagger-item-out";
            }
        },
    },
    methods: {
        ...userHelper.mapMutations(["UPDATE_CART_LIST"]),
        ...userHelper.mapActions(["postCartItem", "getCartItemList"]),

        // 로딩화면
        setLoadingPage() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        },

        checkCartItemBlank() {
            if (this.cartListValue.length === 0) {
                this.tagError = "물근을 입력해주세요.";
                this.$refs.itemInput.focus();
                return true;
            }
        },

        checkDuplicateIteminCartList(name) {
            let duplicateError = false;
            for (const cartItem of this.cartList) {
                if (cartItem.name === name) {
                    duplicateError = true;
                    break;
                }
            }
            if (duplicateError) {
                this.cartItemError = "이미 등록된 물건입니다.";
                this.$refs.itemInput.focus();
                return true;
            }
        },

        checkDuplicateItem(name) {
            this.cartItemError = "";
            if (this.checkCartItemBlank()) {
                return true;
            } else if (this.checkDuplicateIteminCartList(name)) {
                return true;
            } else return false;
        },

        // 물건 선택하기
        selectSearchDataList(name) {
            this.searchList.forEach((item) => {
                if (item.name === name) item.clicked = !item.clicked;
            });
            this.selectedSearchList = this.searchList.filter((item) => item.clicked === true);
        },

        // 물건 추가하기
        addTagItem() {
            if (this.checkDuplicateItem(this.cartListValue)) return;
            this.searchList.push({ basketId: this.basketId, name: this.cartListValue, clicked: false });
            this.cartListValue = "";
        },

        checkSelectedBlank() {
            if (this.selectedSearchList.length === 0) {
                this.addCartItemError = "물건을 선택해주세요.";
                return true;
            } else return false;
        },

        checkDuplicateSelectedItem() {
            let duplicateError = false;
            for (const searchItem of this.selectedSearchList) {
                for (const cartItem of this.cartList) {
                    if (cartItem.name === searchItem.name) {
                        duplicateError = true;
                        break;
                    }
                }
                if (duplicateError) break;
            }
            if (duplicateError) {
                this.addCartItemError = "이미 등록된 물건이 있습니다.";
                return true;
            }
        },

        checkAddCartItemError() {
            if (this.checkSelectedBlank()) return true;
            else if (this.checkDuplicateSelectedItem()) return true;
        },

        // 카트에 담기
        addCartList() {
            if (this.checkAddCartItemError()) return;
            console.log(this.selectedSearchList);
            this.postCartItem({ cartItemList: this.selectedSearchList });
        },

        goToCartList() {
            this.$router.push({ path: "/home/shoppingcart" });
        },

        getSearchData(searchData) {
            this.setLoadingPage();
            this.getCartItemList({ name: searchData });
        },
    },
};
</script>
<style scoped>
@import "./SearchPage.css";
</style>
