<template>
    <div>
        <Header headerNavigationTitle="채팅" />
        <div class="app-container">
            <div>채팅방 페이지입니다.</div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "ChatPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./ChatPage.css";
</style>
