<template>
    <div class="chatbox-container">
        <div class="chatbox-header">
            <div>
                <div class="chatbox-title">안서동😢 코스트코 장보러가자</div>
                <div class="chatbox-sub-title">자취생인데 먹을게 다떨어졌는데 카드 있으신 분?</div>
            </div>
            <div class="chatbox-favorites-buttons"></div>
        </div>
        <div class="chatbox-body">
            <div class="chatbox-tag-list">
                <div class="chatbox-tag-item">신입생</div>
                <div class="chatbox-tag-item">친목</div>
                <div class="chatbox-tag-item">빠른 더치페이 가능</div>
            </div>
            <div class="chatbox-shopping__cart-list">
                <div class="chatbox-cart-item">물 2L</div>
                <div class="chatbox-cart-item">물 2L</div>
                <div class="chatbox-cart-item">물 2L</div>
            </div>
        </div>
        <div class="chatbox-footer">
            <div class="remain-text">정원이 1명 남았어요</div>
            <div class="enter-button">참여 신청</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MeetingChatComponent",
};
</script>
<style scoped>
@import "./MeetingChatComponent.css";
</style>
