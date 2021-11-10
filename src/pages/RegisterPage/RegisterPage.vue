<template>
    <div>
        <Header headerNavigationTitle="회원가입" />
        <div class="app-container">
            <div class="register-container">
                <div class="register-profile__image">사진</div>
                <input class="register-nickname__input" />
                <div class="register-input-container">
                    <div class="register-email__input-text">아이디</div>
                    <input class="register-input" type="text" />
                    <div class="register-passwd__input-text">비밀번호</div>
                    <input class="passwd-input" type="text" />
                </div>
                <div class="register-address-container">
                    <div class="register-adderss-title">주소(필수)</div>
                </div>
            </div>
            <router-link to="/login">
                <div class="register__button">확인</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "RegisterPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./RegisterPage.css";
</style>
