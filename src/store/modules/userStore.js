import axios from "axios";
import router from "../../router";
const API_SERVER_URL = "http://4748-1-230-138-165.ngrok.io/api/v1";

const userStore = {
    namespaced: true,
    state: {
        userEmail: "",
        password: "",
        userNickName: "",
        addressList: { city: "", district: "", street: "" },
        userToken: localStorage.getItem("token"),
        cartList: {},
        saveEmailCheckBoxStatus: localStorage.getItem("userEmail") ? true : false,
        errorList: { emailBlank: "", passwordBlank: "", nickNameBlank: "", addressBlank: "", notFound: "", wrong: "" },
    },
    getters: {
        // 유효성 검증
        validateNickName: (state) => {
            if (state.userNickName.length === 0) {
                state.errorList.nickNameBlank = "닉네임을 입력해주세요.";
                return true;
            } else return false;
        },
        validateUserEmail: (state) => {
            const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if (!re.test(state.userEmail)) {
                state.errorList.emailBlank = "이메일 형식을 맞춰주세요.";
                return true;
            } else if (state.userEmail.length === 0) {
                state.errorList.emailBlank = "이메일을 입력해주세요.";
                return true;
            } else return false;
        },
        validatePassword: (state) => {
            if (state.password.length === 0) {
                state.errorList.passwordBlank = "비밀번호를 입력해주세요.";
                return true;
            } else return false;
        },
        validateAddress: (state) => {
            if (state.addressList["city"].length === 0) {
                state.errorList.addressBlank = "주소를 선택해주세요.";
                return true;
            } else return false;
        },
    },
    mutations: {
        UPDATE_USER_EMAIL(state, payload) {
            state.userEmail = payload;
        },
        UPDATE_PASSWORD(state, payload) {
            state.password = payload;
        },
        UPDATE_USER_NICKNAME(state, payload) {
            state.userNickName = payload;
        },
        UPDATE_SAVE_EMAIL_CHECK_BOX_STATUS(state, payload) {
            state.saveEmailCheckBoxStatus = payload;
        },
    },
    actions: {
        // 유저 정보 가져오기
        async getMyProfile({ state }) {
            await axios
                .get(`${API_SERVER_URL}/member`, {
                    headers: {
                        Authorization: `Bearer ${state.userToken}`,
                    },
                })
                .then(({ data }) => {
                    // console.log(data);
                    state.userNickName = data.nickName;
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },

        // 로그인하기
        async postSignIn({ state }) {
            await axios
                .post(`${API_SERVER_URL}/sign-in`, {
                    email: state.userEmail,
                    password: state.password,
                })
                .then(({ data }) => {
                    state.userToken = data.token;
                    localStorage.setItem("token", data.token);
                    if (state.saveEmailCheckBoxStatus) localStorage.setItem("userEmail", state.userEmail);
                    else localStorage.removeItem("userEmail");
                    router.push({ path: "/" });
                })
                .catch((error) => {
                    const errorMessage = error.response.data.message;
                    if (errorMessage === "사용자를 찾을 수 없습니다") {
                        state.errorList["notFound"] = "사용자를 찾을 수 없습니다.";
                    } else if (errorMessage === "이메일 또는 비밀번호가 틀렸습니다") {
                        state.errorList["wrong"] = "이메일 또는 비밀번호가 틀렸습니다.";
                    }
                });
        },
        resetErrorList({ state }) {
            state.errorList.emailBlank = "";
            state.errorList.passwordBlank = "";
            state.errorList.nickNameBlank = "";
            state.errorList.addressBlank = "";
        },

        // 회원가입하기
        async postSignUp({ state }) {
            await axios
                .post(`${API_SERVER_URL}/sign-up`, {
                    email: state.userEmail,
                    nickName: state.userNickName,
                    password: state.password,
                    address: state.addressList,
                    profile: {},
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },
    },
};

export default userStore;
