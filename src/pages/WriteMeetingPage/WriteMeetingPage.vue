<template>
    <div>
        <Header headerNavigationTitle="글쓰기" />
        <div class="app-container">
            <div class="write-container">
                <div class="write-title-wrapper">
                    <div class="title">제목</div>
                    <input class="title-input" type="text" v-model="postTitleValue" placeholder="제목을 입력하세요" maxlength="24" />
                    <button class="write-title-length">{{ postTitleValue.length }} / 24</button>
                </div>

                <div class="write-detail-wrapper">
                    <div class="title">본문</div>
                    <textarea class="detail-input" type="text" v-model="postDescValue" placeholder="본문을 입력하세요" />
                </div>
                <div class="write-tag-wrapper">
                    <div class="title">모임을 설명할 태그(최대 3개)</div>
                    <div class="tag-input-content">
                        <input
                            class="tag-input"
                            type="text"
                            v-model="postTagValue"
                            maxlength="10"
                            placeholder="태그를 입력하세요"
                            :disabled="tagList.length >= 3"
                        />
                        <button class="write-tag-length">{{ postTagValue.length }} / 10</button>
                        <div class="add-tag__button-list" @click="addTagItem">
                            <button class="add-tag__button">+</button>
                        </div>
                    </div>
                    <div class="write-tag-list">
                        <div class="write-tag-list__item" v-for="tagItem in tagList" :key="tagItem">
                            {{ tagItem.tag }}
                        </div>
                    </div>
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
                </div>
                <div class="write-tag-wrapper">
                    <div class="title">장바구니</div>
                    <!-- <div class="load-cart-content">
                        <div class="load-cart-text">내 장바구니를 불러오세요.</div>
                        <button>+</button>
                    </div> -->
                </div>
            </div>
            <router-link to="/">
                <div class="select-location__button" @click="submitBoard">작성 완료</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";
import { createNamespacedHelpers } from "vuex";
const postHelper = createNamespacedHelpers("postStore");

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
            tagList: [],
        };
    },
    computed: {
        ...postHelper.mapState({
            postTitle: (state) => state.postTitle,
            postDesc: (state) => state.postDesc,
            postTag: (state) => state.postTag,
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

        postTagValue: {
            get() {
                return this.postTag;
            },
            set(value) {
                this.UPDATE_POST_TAG(value);
            },
        },
    },
    methods: {
        ...postHelper.mapMutations(["UPDATE_POST_TITLE", "UPDATE_POST_DESC", "UPDATE_POST_TAG"]),
        ...postHelper.mapActions(["postBoardData"]),

        clickWeekend(day) {
            this.weekList.forEach((item) => {
                if (item.day === day) item.active = !item.active;
            });
        },
        addTagItem() {
            if (this.tagList.length >= 3) return;
            this.tagList.push({ tag: this.postTagValue, active: false });
            this.postTagValue = "";
        },
    },
};
</script>
<style scoped>
@import "./WriteMeetingPage.css";
</style>
