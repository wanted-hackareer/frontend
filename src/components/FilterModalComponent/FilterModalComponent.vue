<template>
    <transition>
        <div class="modal__overlay" v-if="isShow" @click="closeModal">
            <div class="modal" @click.stop>
                <div class="modal-header">
                    <div class="modal-blank"></div>
                    <div class="modal-header-title">필터</div>
                    <button type="button" class="close-button" @click="closeModal">
                        <img src="../../assets/images/MeetingPage/close.png" />
                    </button>
                </div>
                <div class="modal-week-wrapper">
                    <div class="title">요일을 선택해주세요.</div>
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
                <div class="modal-filter-text">찾으실 모임 태그를 검색해주세요</div>
                <SearchInputComponent :isFilter="true" />
                <div class="modal-confirm-button">확인</div>
            </div>
        </div>
    </transition>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";

export default {
    name: "FilterModalComponent",

    components: {
        SearchInputComponent,
    },
    data() {
        return {
            isShow: false,
            weekList: [
                { day: "월", active: false },
                { day: "화", active: false },
                { day: "수", active: false },
                { day: "목", active: false },
                { day: "금", active: false },
                { day: "토", active: false },
                { day: "일", active: false },
            ],
        };
    },
    methods: {
        toggleVisibility() {
            this.isShow = !this.isShow;
        },
        closeModal() {
            this.toggleVisibility();
            this.removeScroll();
        },
        removeScroll() {
            document.body.style.removeProperty("overflow");
        },
    },
};
</script>
<style scoped>
@import "./FilterModalComponent.css";
</style>
