<template>
    <div>
        <Header headerNavigationTitle="위치 지정" />
        <div class="app-container">
            <div class="location-container">
                <div class="location-description">범위는 최소 1개 이상 최대 2개까지 가능해요</div>
                <div class="location-add-button__list">
                    <button class="location-add-button">+</button>
                    <button class="location-add-button">+</button>
                </div>
                <div class="location-waiting-container">
                    <div class="location-waiting-description">00000명이 당신을 <br />기다리고 있어요.</div>
                    <div class="loaction-waiting-image"></div>
                </div>
                <router-link to="/location">
                    <div class="select-match__button">매칭하기</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "LocationPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./LocationPage.css";
</style>
