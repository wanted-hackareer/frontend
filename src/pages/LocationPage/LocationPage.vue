<template>
    <div>
        <Header :headerNavigationTitle="loading ? '검색중' : '위치 지정'" />

        <div class="app-container">
            <div v-if="loading">
                <div class="location-loading-text">내 장바구니와 맞는 모임을 <br />검색하고 있어요.</div>
                <div class="search-loading-content">
                    <div class="loading-circle"></div>
                    <div class="loading-text">검색하고 있어요.</div>
                </div>
            </div>
            <div v-else class="location-container">
                <div class="location-description">범위는 최소 1개 이상 최대 2개까지 가능해요</div>
                <div class="location-add-button__list">
                    <button
                        class="location-add-button"
                        :class="{ 'location-add-button--active': addressItem.active }"
                        v-for="addressItem in addressList"
                        :key="addressItem.id"
                        @click="execDaumPostcode(addressItem.id)"
                    >
                        <div class="location-add-button-select" v-if="addressItem.active">
                            {{ addressItem.sido }} {{ addressItem.sigungu }} {{ addressItem.bname }}
                        </div>
                        <div v-else>
                            <img src="../../assets/images/PlusButtons/plus-gray.png" />
                        </div>
                    </button>
                </div>
                <div class="location-waiting-container">
                    <div class="location-waiting-description"><span class="waiting-highlight">00000명</span>이 당신을 <br />기다리고 있어요.</div>
                    <img src="../../assets/images/LocationPage/match.png" />
                </div>
                <div class="select-match__button" :class="{ 'select-match__button--active': setMatchButton }" @click="startMatch">매칭하기</div>
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
    data() {
        return {
            addressList: [
                { id: 0, sido: "", sigungu: "", bname: "", active: false },
                { id: 1, sido: "", sigungu: "", bname: "", active: false },
            ],
            loading: false,
        };
    },
    computed: {
        setMatchButton() {
            if (this.addressList.filter((addressItem) => addressItem.active === true).length !== 0) return true;
            else return false;
        },
    },
    methods: {
        // 로딩화면
        execDaumPostcode(id) {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    this.addressList[id].sido = data.sido;
                    this.addressList[id].sigungu = data.sigungu;
                    this.addressList[id].bname = data.bname;
                    this.addressList[id].active = true;
                },
            }).open(this.$refs.embed);
        },

        //매칭하기
        startMatch() {
            if (!this.setMatchButton) return;
            this.loading = true;
            setTimeout(() => {
                this.$router.replace({
                    name: "MeetingPage",
                    query: { streetA: this.addressList[0].bname, streetB: this.addressList[1].bname },
                });
            }, 2000);
        },
    },
};
</script>
<style scoped>
@import "./LocationPage.css";
</style>
