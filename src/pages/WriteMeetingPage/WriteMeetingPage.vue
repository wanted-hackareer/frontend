<template>
    <div>
        <Header headerNavigationTitle="글쓰기" />
        <div class="app-container">
            <div class="write-container">
                <div class="write-title-wrapper">
                    <div class="title">제목</div>
                    <input class="title-input" type="text" placeholder="제목을 입력하세요" maxlength="24" />
                </div>
                <div class="write-detail-wrapper">
                    <div class="title">본문</div>
                    <textarea class="detail-input" type="text" placeholder="본문을 입력하세요" />
                </div>
                <div class="write-tag-wrapper">
                    <div class="title">모임을 설명할 태그</div>
                    <div class="add-tag__button-list">
                        <button class="add-tag__button">+</button>
                    </div>
                </div>
                <div class="write-week-wrapper">
                    <div class="title">장을 보러갈 요일</div>
                    <div class="week-list">
                        <button class="week__button">월</button>
                        <button class="week__button">화</button>
                        <button class="week__button">수</button>
                        <button class="week__button">목</button>
                        <button class="week__button">금</button>
                        <button class="week__button">토</button>
                        <button class="week__button">일</button>
                    </div>
                </div>
                <div class="write-tag-wrapper">
                    <div class="title">장바구니</div>
                    <div class="load-cart-content">
                        <div class="load-cart-text">내 장바구니를 불러오세요.</div>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <router-link to="/">
                <div class="select-location__button">작성 완료</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "WriteMeetingPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./WriteMeetingPage.css";
</style>
