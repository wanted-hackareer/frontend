<template>
    <div class="meeting-list-container">
        <MyMeetingItemComponent />
        <button class="meeting-add-button" @click="goToWritePage">
            <div>+</div>
            <div class="meeting-add-button-description">추가하기</div>
        </button>
    </div>
</template>
<script>
import MyMeetingItemComponent from "../MyMeetingItemComponent/MyMeetingItemComponent.vue";
export default {
    name: "MyMeetingListComponent",
    components: { MyMeetingItemComponent },
    methods: {
        goToWritePage() {
            this.$router.push({ path: "/write" });
        },
    },
};
</script>
<style scoped>
@import "./MyMeetingListComponent.css";
</style>
