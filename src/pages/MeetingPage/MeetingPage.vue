<template>
    <div>
        <Header :hasBackButton="false" headerNavigationTitle="모임" />

        <div class="app-container">
            <FilterModalComponent ref="filterModal" />
            <div class="meeting-container">
                <div class="meeting-status-bar">
                    <div class="meeting-description">{{ postCount }}개의 모임이 기다리고 있어요</div>
                    <img class="meeting-filter-icon" @click="clickRateModal()" src="../../assets/images/MeetingPage/filter.png" />
                </div>
                <div v-for="postItem in postList" :key="postItem.id">
                    <MeetingChatComponent :postItem="postItem" />
                </div>
            </div>
            <div>
                <router-link to="/meeting/write">
                    <button class="meeting-write__button">
                        <img class="meeting-write__button-image" src="../../assets/images/PlusButtons/plus-black.png" />
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";
import MeetingChatComponent from "../../components/MeetingChatComponent/MeetingChatComponent.vue";
import FilterModalComponent from "../../components/FilterModalComponent/FilterModalComponent.vue";
import { createNamespacedHelpers } from "vuex";
const userHelper = createNamespacedHelpers("userStore");
const postHelper = createNamespacedHelpers("postStore");

export default {
    name: "MeetingPage",
    components: {
        Header,
        MeetingChatComponent,
        FilterModalComponent,
    },
    data() {
        return {};
    },

    created() {
        this.getMeetingListForLocation({ streetA: this.$route.query.streetA, streetB: this.$route.query.streetB });
    },
    computed: {
        ...postHelper.mapState({
            postList: (state) => state.postList,
            postCount: (state) => state.postCount,
        }),
    },
    methods: {
        ...userHelper.mapActions(["getMeetingListForLocation"]),

        clickRateModal() {
            this.$refs.filterModal.toggleVisibility();
            document.body.style.setProperty("overflow", "hidden");
        },
    },
};
</script>
<style scoped>
@import "./MeetingPage.css";
</style>
