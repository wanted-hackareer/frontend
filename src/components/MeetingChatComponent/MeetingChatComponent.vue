<template>
    <div class="chatbox-container">
        <div class="chatbox-header">
            <div>
                <div class="chatbox-title">{{ postItem.title }}</div>
                <div class="chatbox-sub-title">{{ postItem.description }}</div>
            </div>
            <div class="chatbox-favorites-buttons">
                <img src="../../assets/images/MeetingChatComponent/favorite.png" />
            </div>
        </div>
        <div class="chatbox-body">
            <div class="chatbox-tag-list">
                <div class="chatbox-tag-item" v-for="tagItem in postItem.tagList" :key="tagItem.id">
                    {{ tagItem.name }}
                </div>
            </div>
            <div class="chatbox-shopping__cart-list">
                <div class="chatbox-cart-item" v-for="basketItem in postItem.basket.items" :key="basketItem.id">
                    {{ basketItem.name }}
                </div>
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
    props: {
        postItem: {
            type: Object,
        },
    },
};
</script>
<style scoped>
@import "./MeetingChatComponent.css";
</style>
