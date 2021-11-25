<template>
    <div>
        <Header headerNavigationTitle="회원가입" />
        <div class="app-container">
            <div class="register-container">
                <div class="register-profile__image">사진</div>
                <input class="register-nickname__input" v-model="userNickNameValue" ref="nickName" placeholder="닉네임 입력" />
                <div v-if="errorList.nickNameBlank.length !== 0" class="login-error">{{ errorList.nickNameBlank }}</div>
                <div class="register-input-container">
                    <input class="register-input" type="text" v-model="userEmailValue" ref="userEmail" placeholder="이메일" />
                    <div v-if="errorList.emailBlank.length !== 0" class="login-email-error login-error">{{ errorList.emailBlank }}</div>
                    <input class="passwd-input" type="password" v-model="userPasswordValue" ref="password" placeholder="비밀번호" />
                    <div v-if="errorList.passwordBlank.length !== 0" class="login-error">{{ errorList.passwordBlank }}</div>
                </div>
                <div class="register-address-container">
                    <div class="register-adderss-title">주소(필수)</div>
                    <SearchInputComponent :isRegister="true" @getSearchData="execDaumPostcode" />
                    <div>{{ addressList.city }} {{ addressList.district }} {{ addressList.street }}</div>
                    <div v-if="errorList.addressBlank.length !== 0" class="login-error">{{ errorList.addressBlank }}</div>
                </div>
            </div>
            <div class="register__button" :class="{ 'register__button--active': addressList.active }" @click="clickSignUp">확인</div>
        </div>
    </div>
</template>
<script>
import SearchInputComponent from "../../components/SearchInputComponent/SearchInputComponent.vue";
import Header from "../../layout/Header/Header.vue";
import { createNamespacedHelpers } from "vuex";
const userHelper = createNamespacedHelpers("userStore");

export default {
    name: "RegisterPage",
    data() {
        return {};
    },
    components: {
        Header,
        SearchInputComponent,
    },
    computed: {
        ...userHelper.mapState({
            userEmail: (state) => state.userEmail,
            password: (state) => state.password,
            addressList: (state) => state.addressList,
            userNickName: (state) => state.userNickName,
            errorList: (state) => state.errorList,
        }),
        ...userHelper.mapGetters(["validateNickName", "validateUserName"]),

        userEmailValue: {
            get() {
                return this.userEmail;
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

        userNickNameValue: {
            get() {
                return this.userNickName;
            },
            set(value) {
                this.UPDATE_USER_NICKNAME(value);
            },
        },
    },
    methods: {
        ...userHelper.mapMutations(["UPDATE_USER_EMAIL", "UPDATE_PASSWORD", "UPDATE_USER_NICKNAME"]),
        ...userHelper.mapActions(["postSignUp", "resetErrorList"]),

        execDaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    this.addressList.city = data.sido;
                    this.addressList.district = data.sigungu;
                    this.addressList.street = data.bname;
                    this.addressList.active = true;
                },
            }).open(this.$refs.embed);
        },
        validate() {
            if (this.validateNickName()) {
                this.$refs.nickName.focus();
                return true;
            } else if (this.validateUserName()) {
                this.$refs.userEmail.focus();
                return true;
            } else if (this.validatePassword()) {
                this.$refs.password.focus();
                return true;
            } else if (this.validateAddress()) {
                return true;
            } else return false;
        },
        clickSignUp() {
            this.resetErrorList();
            if (this.validate()) return;
            // else {
            //     this.resetErrorList();
            //     this.postSignUp();
            // }
        },
    },
};
</script>
<style scoped>
@import "./RegisterPage.css";
</style>
