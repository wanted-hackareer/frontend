<template>
    <div class="meeting-item-container">
        <div class="meeting-item-location">{{ myMeetingItem.address.district }} {{ myMeetingItem.address.street }}</div>
        <div class="meeting-item-title">{{ myMeetingItem.title }}</div>
        <div class="meeting-item-tag-list">
            <div class="meeting-item-tag">D-DAY</div>
            <div class="meeting-item-tag">1명</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyMeetingItemComponent",
    props: {
        myMeetingItem: {
            type: Object,
        },
    },
};
</script>
<style scoped>
@import "./MyMeetingItemComponent.css";
</style>
