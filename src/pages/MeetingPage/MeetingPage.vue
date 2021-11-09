<template>
    <div>
        <Header headerNavigationTitle="모임" />
        <div class="app-container">
            <div>모임 페이지입니다.</div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "MeetingPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./MeetingPage.css";
</style>
