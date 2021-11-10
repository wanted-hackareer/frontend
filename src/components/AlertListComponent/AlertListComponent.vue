<template>
    <div>
        <div class="alert-list-container">
            <AlertItemComponent />
            <AlertItemComponent />
        </div>
    </div>
</template>
<script>
import AlertItemComponent from "../AlertItemComponent/AlertItemComponent.vue";
export default {
    name: "AlertListComponent",
    components: { AlertItemComponent },
};
</script>
<style scoped>
@import "./AlertListComponent.css";
</style>
