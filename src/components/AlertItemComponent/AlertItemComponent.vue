<template>
    <div class="alert-item-container">
        <div class="alert-item-header">
            <div class="alert-item-time">1시간전</div>
            <div class="alert-item-read">읽지 않음</div>
        </div>
        <div class="alert-item-main">다람쥐님이 아침거리 장보기 <br />모임 참여를 원합니다.</div>
        <div class="alert-item-confirm-content">
            <button class="alert-reject__button">거절</button>
            <button class="alert-confirm__button" @click="goToChatRoom">수락</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "AlertItemComponent",
    components: {},
    methods: {
        goToChatRoom() {
            this.$router.push({ path: "/chat/1" });
        },
    },
};
</script>
<style scoped>
@import "./AlertItemComponent.css";
</style>
