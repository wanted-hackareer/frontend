<template>
    <div>
        <Header headerNavigationTitle="글쓰기" />
        <div class="app-container">
            <div class="write-container">
                <div class="write-title-wrapper">
                    <div class="title">제목</div>
                    <input class="title-input" type="text" v-model="postTitleValue" placeholder="제목을 입력하세요" ref="postTitle" maxlength="24" />
                    <button class="write-title-length">{{ postTitleValue.length }} / 24</button>
                    <div v-if="errorList.titleBlank.length !== 0" class="error-text">{{ errorList.titleBlank }}</div>
                </div>

                <div class="write-detail-wrapper">
                    <div class="title">본문</div>
                    <textarea class="detail-input" type="text" v-model="postDescValue" placeholder="본문을 입력하세요" ref="postDesc" />
                    <div v-if="errorList.descBlank.length !== 0" class="error-text">{{ errorList.descBlank }}</div>
                </div>
                <div class="write-tag-wrapper">
                    <div class="title">모임을 설명할 태그 ({{ tagList.length }} / 3)</div>
                    <div class="tag-input-content">
                        <input
                            class="tag-input"
                            type="text"
                            v-model="tagItem"
                            maxlength="10"
                            placeholder="태그를 입력하세요"
                            :disabled="tagList.length >= 3"
                            ref="postTags"
                        />
                        <button class="write-tag-length">{{ tagList.length }} / 10</button>
                        <div class="add-tag__button-list" @click="addTagItem">
                            <button class="add-tag__button">+</button>
                        </div>
                    </div>
                    <div class="write-tag-list">
                        <div class="write-tag-list__item" v-for="(tagItem, index) in tagList" :key="index">
                            {{ tagItem.name }}
                        </div>
                    </div>
                    <div v-if="errorList.tagBlank.length !== 0" class="tag-error error-text">{{ errorList.tagBlank }}</div>
                </div>
                <div class="write-week-wrapper">
                    <div class="title">장을 보러갈 요일</div>
                    <div class="week-list">
                        <button
                            class="week__button"
                            :class="{ 'week__button-active': weekItem.active }"
                            @click="clickWeekend(weekItem.day)"
                            v-for="weekItem in weekList"
                            :key="weekItem.day"
                        >
                            {{ weekItem.day }}
                        </button>
                    </div>
                    <div v-if="errorList.weekBlank.length !== 0" class="week-error error-text">{{ errorList.weekBlank }}</div>
                </div>
                <div class="write-tag-wrapper">
                    <div class="title">장바구니</div>
                    <div class="write-cart-content">
                        <div class="write-cart-item" v-for="cartItem in cartList" :key="cartItem.id">
                            {{ cartItem.name }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="select-location__button" @click="submitPost">작성 완료</div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";
import { createNamespacedHelpers } from "vuex";
const postHelper = createNamespacedHelpers("postStore");
const userHelper = createNamespacedHelpers("userStore");

export default {
    name: "WriteMeetingPage",
    components: {
        Header,
    },
    data() {
        return {
            weekList: [
                { day: "월", active: false },
                { day: "화", active: false },
                { day: "수", active: false },
                { day: "목", active: false },
                { day: "금", active: false },
                { day: "토", active: false },
                { day: "일", active: false },
            ],
            selectWeekList: [],
            tagItem: "",
            tagList: [],
            errorList: { titleBlank: "", descBlank: "", tagBlank: "", weekBlank: "" },
        };
    },
    computed: {
        ...userHelper.mapState({
            cartList: (state) => state.cartList,
        }),
        ...postHelper.mapState({
            postTitle: (state) => state.postTitle,
            postDesc: (state) => state.postDesc,
        }),

        postTitleValue: {
            get() {
                return this.postTitle;
            },
            set(value) {
                this.UPDATE_POST_TITLE(value);
            },
        },

        postDescValue: {
            get() {
                return this.postDesc;
            },
            set(value) {
                this.UPDATE_POST_DESC(value);
            },
        },
    },
    created() {
        this.getMyProfile();
    },
    methods: {
        ...userHelper.mapActions(["getMyProfile"]),
        ...postHelper.mapMutations(["UPDATE_POST_TITLE", "UPDATE_POST_DESC"]),
        ...postHelper.mapActions(["postBoardData"]),

        clickWeekend(day) {
            this.weekList.forEach((item) => {
                if (item.day === day) item.active = !item.active;
            });
            this.selectWeekList = this.weekList.filter((i) => i.active).map((i) => i.day);
        },

        addTagItem() {
            if (this.tagItem.length === 0 || this.tagList.length >= 3) return;
            this.tagList.push({ name: this.tagItem });
            console.log(this.tagList);
            this.tagItem = "";
        },

        resetErrorList() {
            this.errorList.titleBlank = "";
            this.errorList.descBlank = "";
            this.errorList.tagBlank = "";
            this.errorList.weekBlank = "";
        },
        
        validateTitle() {
            if (this.postTitle.length === 0) {
                this.errorList.titleBlank = "제목을 입력해주세요.";
                this.$refs.postTitle.focus();
                return true;
            }
        },
        validateDesc() {
            if (this.postDesc.length === 0) {
                this.errorList.descBlank = "본문을 입력해주세요.";
                this.$refs.postDesc.focus();
                return true;
            }
        },
        validateTag() {
            if (this.tagList.length === 0 && this.tagItem.length === 0) {
                this.errorList.tagBlank = "태그를 입력해주세요.";
                this.$refs.postTags.focus();
                return true;
            } else if (this.tagList.length === 0) {
                this.errorList.tagBlank = "태그를 1개 이상 입력해주세요.";
                this.$refs.postTags.focus();
                return true;
            }
        },
        validateWeek() {
            if (this.selectWeekList.length === 0) {
                this.errorList.weekBlank = "날짜를 1개 이상 선택해주세요.";
                return true;
            }
        },
        validate() {
            this.resetErrorList();
            if (this.validateTitle()) {
                return true;
            } else if (this.validateDesc()) {
                return true;
            } else if (this.validateTag()) {
                return true;
            } else if (this.validateWeek()) {
                return true;
            }
            return false;
        },

        submitPost() {
            if (this.validate()) return;
            const dayOfTheWeek = this.selectWeekList.join(",");
            this.postBoardData({ dayOfTheWeek, tagList: this.tagList });
        },
    },
};
</script>
<style scoped>
@import "./WriteMeetingPage.css";
</style>
