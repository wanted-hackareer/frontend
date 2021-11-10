<template>
    <div>
        <Header :hasBackButton="false" headerNavigationTitle="로그인" />
        <div class="app-container">
            <div class="login-container">
                <div class="app-logo"></div>
                <div class="login-text">로그인 해주세요.</div>
                <div class="login-input-container">
                    <div class="login-email__input-text">아이디</div>
                    <input class="login-input" type="text" />
                    <div class="login-passwd__input-text">비밀번호</div>
                    <input class="passwd-input" type="text" />
                </div>
                <div class="login-footer">
                    <div class="login-save__email-content">
                        <input class="login-save__email-checkbox" type="checkbox" />
                        <div class="login-save__email">이메일 저장</div>
                    </div>
                    <div class="login-find__passwd">비밀번호 찾기</div>
                </div>
                <router-link to="/">
                    <div class="login__button">로그인</div>
                </router-link>
                <router-link to="/register">
                    <div class="register__button">회원가입 하기</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";

export default {
    name: "LoginPage",
    components: {
        Header,
    },
};
</script>
<style scoped>
@import "./LoginPage.css";
</style>
