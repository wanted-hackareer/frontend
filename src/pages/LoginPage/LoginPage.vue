<template>
    <div>
        <Header :hasBackButton="false" headerNavigationTitle="로그인" />
        <div class="app-container">
            <div class="login-container">
                <div class="app-logo">
                    <img src="../../assets/images/LoginPage/logo.png" />
                </div>
                <div class="login-text">로그인 해주세요.</div>
                <div class="login-input-container">
                    <div class="login-email__input-text">이메일</div>
                    <input class="login-input" v-model="userEmailValue" ref="userEmail" type="text" />
                    <div v-if="errorList.emailBlank.length !== 0" class="login-email-error login-error">{{ errorList.emailBlank }}</div>
                    <div class="login-passwd__input-text">비밀번호</div>
                    <input class="passwd-input" v-model="userPasswordValue" ref="password" type="password" />
                    <div v-if="errorList.passwordBlank.length !== 0" class="login-error">{{ errorList.passwordBlank }}</div>
                    <div v-if="errorList.notFound.length !== 0" class="login-error">{{ errorList.notFound }}</div>
                    <div v-else-if="errorList.wrong.length !== 0" class="login-error">{{ errorList.wrong }}</div>
                </div>
                <div class="login-footer">
                    <div class="login-save__email-content">
                        <input
                            id="emailSave"
                            class="login-save__email-checkbox"
                            type="checkbox"
                            v-model="saveEmailCheckBoxStatusValue"
                            :checked="saveEmailCheckBoxStatusValue"
                        />
                        <label for="emailSave" class="login-save__email">이메일 저장</label>
                    </div>
                    <div class="login-find__passwd">비밀번호 찾기</div>
                </div>
                <div class="login__button" @click="clickLogin">로그인</div>
                <router-link to="/register">
                    <div class="register__button">회원가입 하기</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../../layout/Header/Header.vue";
import { createNamespacedHelpers } from "vuex";
const userHelper = createNamespacedHelpers("userStore");

export default {
    name: "LoginPage",
    components: {
        Header,
    },

    computed: {
        ...userHelper.mapState({
            userEmail: (state) => state.userEmail,
            password: (state) => state.password,
            errorList: (state) => state.errorList,
            saveEmailCheckBoxStatus: (state) => state.saveEmailCheckBoxStatus,
        }),
        ...userHelper.mapGetters(["getErrorList"]),

        userEmailValue: {
            get() {
                return localStorage.getItem("userEmail") ? localStorage.getItem("userEmail") : this.userEmail;
            },
            set(value) {
                this.UPDATE_USER_EMAIL(value);
            },
        },

        userPasswordValue: {
            get() {
                return this.password;
            },
            set(value) {
                this.UPDATE_PASSWORD(value);
            },
        },
        saveEmailCheckBoxStatusValue: {
            get() {
                return this.saveEmailCheckBoxStatus;
            },
            set(value) {
                this.UPDATE_SAVE_EMAIL_CHECK_BOX_STATUS(value);
            },
        },
    },
    methods: {
        ...userHelper.mapMutations(["UPDATE_USER_EMAIL", "UPDATE_PASSWORD", "UPDATE_SAVE_EMAIL_CHECK_BOX_STATUS"]),
        ...userHelper.mapActions(["postSignIn"]),

        checkValidation() {},
        reset() {
            this.errorList.emailBlank = "";
            this.errorList.passwordBlank = "";
        },
        // 이메일 정규표현식 체크

        validEmail() {
            const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            return re.test(this.userEmail);
        },
        clickLogin() {
            this.reset();
            if (this.userEmail.length === 0) {
                this.errorList.emailBlank = "이메일을 입력해주세요.";
                this.$refs.userEmail.focus();
                return;
            } else if (!this.validEmail()) {
                this.errorList.emailBlank = "이메일 형식을 맞춰주세요.";
                this.$refs.userEmail.focus();
            } else if (this.password.length === 0) {
                this.errorList.passwordBlank = "비밀번호를 입력해주세요.";
                this.$refs.password.focus();
                return;
            } else {
                this.reset();
                this.postSignIn();
            }
        },
    },
};
</script>
<style scoped>
@import "./LoginPage.css";
</style>
