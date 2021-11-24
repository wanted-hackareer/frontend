<template>
    <div>
        <Header headerNavigationTitle="회원가입" />
        <div class="app-container">
            <div class="register-container">
                <div class="register-profile__image">사진</div>
                <input class="register-nickname__input" placeholder="닉네임 입력" />
                <div class="register-input-container">
                    <input class="register-input" type="text" placeholder="이메일" />
                    <input class="passwd-input" type="password" placeholder="비밀번호" />
                </div>
                <div class="register-address-container">
                    <div class="register-adderss-title">주소(필수)</div>
                    <SearchInputComponent :isRegister="true" @getSearchData="execDaumPostcode" />
                    <div>{{ addressList.sido }} {{ addressList.sigungu }} {{ addressList.bname }}</div>
                </div>
            </div>
            <router-link to="/login">
                <div class="register__button" :class="{ 'register__button--active': addressList.active }">확인</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import Header from "../../layout/Header/Header.vue";

export default {
    name: "RegisterPage",
    data() {
        return {
            addressList: { id: 0, sido: "", sigungu: "", bname: "", active: false },
        };
    },
    components: {
        Header,
        SearchInputComponent,
    },
    methods: {
        execDaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    this.addressList.sido = data.sido;
                    this.addressList.sigungu = data.sigungu;
                    this.addressList.bname = data.bname;
                    this.addressList.active = true;
                },
            }).open(this.$refs.embed);
        },

        //매칭하기
        startMatch() {},
    },
};
</script>
<style scoped>
@import "./RegisterPage.css";
</style>
