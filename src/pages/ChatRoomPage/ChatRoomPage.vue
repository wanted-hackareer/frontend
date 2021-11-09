<template>
    <div>
        <Header headerNavigationTitle="채팅방" />
        <div class="app-container">
            <div>채팅방 페이지입니다.</div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "ChatRoomPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./ChatRoomPage.css";
</style>
