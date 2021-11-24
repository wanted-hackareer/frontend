<template>
    <div>
        <Header :hasAlertTab="true" :hasBackButton="false" headerNavigationTitle="채팅방" />
        <div class="app-container">
            <div class="chat-room-container">
                <div class="chat-search-component">
                    <SearchInputComponent :isChat="true" />
                </div>
                <div class="chat-room-my-meeting">
                    <div class="description">나의 장보기 모임</div>
                    <MyMeetingListComponent />
                </div>
                <div class="chat-room-my-chat">
                    <div class="description">채팅</div>
                    <ChattingListComponent />
                    <ChattingListComponent />
                    <ChattingListComponent />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import ChattingListComponent from "../../components/ChattingListComponent/ChattingListComponent.vue";
import MyMeetingListComponent from "../../components/MyMeetingListComponent/MyMeetingListComponent.vue";
export default {
    name: "ChatRoomPage",
    components: {
        Header,
        SearchInputComponent,
        ChattingListComponent,
        MyMeetingListComponent,
    },
};
</script>
<style scoped>
@import "./ChatRoomPage.css";
</style>
