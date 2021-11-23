<template>
    <div>
        <Header :hasBackButton="false" headerNavigationTitle="모임" />
        <div class="app-container">
            <div class="meeting-container">
                <div class="meeting-description">3900개의 모임이 기다리고 있어요</div>
                <div>
                    <MeetingChatComponent />
                    <MeetingChatComponent />
                    <MeetingChatComponent />
                    <MeetingChatComponent />
                    <MeetingChatComponent />
                </div>
            </div>
            <div>
                <router-link to="/write">
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
export default {
    name: "MeetingPage",
    components: {
        Header,
        MeetingChatComponent,
    },
};
</script>
<style scoped>
@import "./MeetingPage.css";
</style>
