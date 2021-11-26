<template>
    <div>
        <Header headerNavigationTitle="회원가입" />
        <div class="app-container">
            <div class="register-container">
                <div class="register-profile__image"></div>
                <input class="register-nickname__input" v-model="userNickName" ref="nickName" placeholder="닉네임 입력" />
                <div v-if="registerErrorList.nickNameBlank.length !== 0" class="error-text">{{ registerErrorList.nickNameBlank }}</div>
                <div v-if="errorList.alreadyNickName.length !== 0" class="error-text">{{ errorList.alreadyNickName }}</div>

                <div class="register-input-container">
                    <input class="register-input" type="text" v-model="userEmail" ref="userEmail" placeholder="이메일" />
                    <div v-if="registerErrorList.emailBlank.length !== 0" class="login-email-error error-text">
                        {{ registerErrorList.emailBlank }}
                    </div>
                    <div v-if="errorList.alreadyEmail.length !== 0" class="error-text">{{ errorList.alreadyEmail }}</div>
                    <input class="passwd-input" type="password" v-model="userPassword" ref="password" placeholder="비밀번호" />
                    <div v-if="registerErrorList.passwordBlank.length !== 0" class="error-text">{{ registerErrorList.passwordBlank }}</div>
                </div>
                <div class="register-address-container">
                    <div class="register-adderss-title">주소(필수)</div>
                    <SearchInputComponent :isRegister="true" @getSearchData="execDaumPostcode" ref="searchInput" />
                    <div>{{ addressList.city }} {{ addressList.district }} {{ addressList.street }}</div>
                    <div v-if="registerErrorList.addressBlank.length !== 0" class="address-error error-text">
                        {{ registerErrorList.addressBlank }}
                    </div>
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
    components: {
        Header,
        SearchInputComponent,
    },
    data() {
        return {
            userNickName: "",
            userEmail: "",
            userPassword: "",
            addressList: { city: "", district: "", street: "", active: false },
            registerErrorList: { nickNameBlank: "", emailBlank: "", passwordBlank: "", addressBlank: "" },
        };
    },
    computed: {
        ...userHelper.mapState({
            errorList: (state) => state.errorList,
        }),
    },
    methods: {
        ...userHelper.mapActions(["postSignUp"]),

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

        resetErrorList() {
            this.registerErrorList.nickNameBlank = "";
            this.registerErrorList.emailBlank = "";
            this.registerErrorList.passwordBlank = "";
            this.registerErrorList.addressBlank = "";
        },

        validateNickName() {
            if (this.userNickName.length === 0) {
                this.registerErrorList.nickNameBlank = "닉네임을 입력해주세요.";
                this.$refs.nickName.focus();
                return true;
            }
        },

        validateUserEmail() {
            const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if (this.userEmail.length === 0) {
                this.registerErrorList.emailBlank = "이메일을 입력해주세요.";
                this.$refs.userEmail.focus();
                return true;
            } else if (!re.test(this.userEmail)) {
                this.registerErrorList.emailBlank = "이메일 형식을 맞춰주세요.";
                this.$refs.userEmail.focus();
                return true;
            } else return false;
        },

        validatePassword() {
            if (this.userPassword.length === 0) {
                this.registerErrorList.passwordBlank = "비밀번호를 입력해주세요.";
                this.$refs.password.focus();
                return true;
            } else return false;
        },

        validateAddress() {
            if (this.addressList["city"].length === 0) {
                this.registerErrorList.addressBlank = "주소를 선택해주세요.";
                this.$refs.searchInput.focusInput();
                return true;
            } else return false;
        },

        validate() {
            this.resetErrorList();
            if (this.validateNickName()) {
                return true;
            } else if (this.validateUserEmail()) {
                return true;
            } else if (this.validatePassword()) {
                return true;
            } else if (this.validateAddress()) {
                return true;
            }
            return false;
        },

        clickSignUp() {
            if (this.validate()) return;
            this.postSignUp({
                userEmail: this.userEmail,
                userNickName: this.userNickName,
                password: this.userPassword,
                addressList: { city: this.addressList.city, district: this.addressList.district, street: this.addressList.street },
            });
        },
    },
};
</script>
<style scoped>
@import "./RegisterPage.css";
</style>
