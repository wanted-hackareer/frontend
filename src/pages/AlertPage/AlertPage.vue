<template>
    <div>
        <Header headerNavigationTitle="알림" />
        <div class="app-container">
            <AlertListComponent />
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";
import AlertListComponent from "../../components/AlertListComponent/AlertListComponent.vue";
export default {
    name: "AlertPage",
    components: {
        Header,
        AlertListComponent,
    },
};
</script>
<style scoped>
@import "./AlertPage.css";
</style>
