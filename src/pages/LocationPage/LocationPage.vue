<template>
    <div>
        <Header headerNavigationTitle="위치 지정" />
        <div class="app-container">
            <div class="location-container">
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
                <router-link to="/home/location">
                    <div class="select-match__button" :class="{ 'select-match__button--active': setMatchButton }" @click="startMatch">매칭하기</div>
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
    data() {
        return {
            addressList: [
                { id: 0, sido: "", sigungu: "", bname: "", active: false },
                { id: 1, sido: "", sigungu: "", bname: "", active: false },
            ],
        };
    },
    computed: {
        setMatchButton() {
            if (this.addressList.filter((addressItem) => addressItem.active === true).length !== 0) return true;
            else return false;
        },
    },
    methods: {
        execDaumPostcode(id) {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    this.addressList[id].sido = data.sido;
                    this.addressList[id].sigungu = data.sigungu;
                    this.addressList[id].bname = data.bname;
                    this.addressList[id].active = true;

                    // if (this.extraAddress !== "") {
                    //     this.extraAddress = "";
                    // }
                    // if (data.userSelectedType === "R") {
                    //     // 사용자가 도로명 주소를 선택했을 경우
                    //     this.address = data.roadAddress;
                    // } else {
                    //     // 사용자가 지번 주소를 선택했을 경우(J)
                    //     this.address = data.jibunAddress;
                    // }

                    // // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    // if (data.userSelectedType === "R") {
                    //     // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    //     // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    //     if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    //         this.extraAddress += data.bname;
                    //     }
                    //     // 건물명이 있고, 공동주택일 경우 추가한다.
                    //     if (data.buildingName !== "" && data.apartment === "Y") {
                    //         this.extraAddress += this.extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
                    //     }
                    //     // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    //     if (this.extraAddress !== "") {
                    //         this.extraAddress = `(${this.extraAddress})`;
                    //     }
                    // } else {
                    //     this.extraAddress = "";
                    // }
                    // // 우편번호를 입력한다.
                    // this.postcode = data.zonecode;
                },
            }).open(this.$refs.embed);
        },

        //매칭하기
        startMatch() {},
    },
};
</script>
<style scoped>
@import "./LocationPage.css";
</style>
