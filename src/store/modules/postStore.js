// import axios from "axios";
// const API_SERVER_URL = "http://localhost:3000";

// 게시판 Store
const postStore = {
    namespaced: true,
    state: { postTitle: "", postDesc: "", postTag: "" },
    getters: {},
    mutations: {
        // v-model data 관리
        UPDATE_POST_TITLE(state, payload) {
            state.postTitle = payload;
        },

        UPDATE_POST_DESC(state, payload) {
            state.postDesc = payload;
        },

        UPDATE_POST_TAG(state, payload) {
            state.postTag = payload;
        },
    },
    actions: {},
};

export default postStore;
