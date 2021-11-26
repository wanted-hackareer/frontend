<template>
    <div class="meeting-list-container">
        <div v-for="myMeetingItem in myMeetingList" :key="myMeetingItem.id">
            <MyMeetingItemComponent :myMeetingItem="myMeetingItem" />
        </div>
        <button class="meeting-add-button" @click="goToWritePage">
            <div>
                <img src="../../assets/images/PlusButtons/plus-gray.png" />
            </div>
            <div class="meeting-add-button-description">추가하기</div>
        </button>
    </div>
</template>
<script>
import MyMeetingItemComponent from "../MyMeetingItemComponent/MyMeetingItemComponent.vue";
import { createNamespacedHelpers } from "vuex";
const userHelper = createNamespacedHelpers("userStore");

export default {
    name: "MyMeetingListComponent",
    components: { MyMeetingItemComponent },
    methods: {
        goToWritePage() {
            this.$router.push({ path: "/meeting/write" });
        },
    },
    computed: {
        ...userHelper.mapState({
            myMeetingList: (state) => state.myMeetingList,
        }),
    },
};
</script>
<style scoped>
@import "./MyMeetingListComponent.css";
</style>
