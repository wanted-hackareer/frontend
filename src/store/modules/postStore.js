import axios from "axios";
import router from "../../router";

const API_SERVER_URL = "http://fa65-1-230-138-165.ngrok.io/api/v1";

// 게시판 Store
const postStore = {
    namespaced: true,
    state: {
        postCount: 0,
        postList: [],
        postTitle: "",
        postDesc: "",
    },
    getters: {},
    mutations: {
        // v-model data 관리
        UPDATE_POST_TITLE(state, payload) {
            state.postTitle = payload;
        },

        UPDATE_POST_DESC(state, payload) {
            state.postDesc = payload;
        },
    },
    actions: {
        // 게시물 등록
        async postBoardData({ state, rootState, dispatch }, { dayOfTheWeek, tagList }) {
            await axios
                .post(
                    `${API_SERVER_URL}/post`,
                    { title: state.postTitle, description: state.postDesc, dayOfTheWeek, maximum: 3 },
                    {
                        headers: {
                            Authorization: `Bearer ${rootState.userStore.userToken}`,
                        },
                    }
                )
                .then(({ data }) => {
                    const newTagList = tagList.map((i) => [{ ...i, postId: data.id }])[0];
                    dispatch("postTagData", { tagList: newTagList });
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },

        // 게시물 등록
        async postTagData(_, { tagList }) {
            await axios
                .post(`${API_SERVER_URL}/tags`, tagList)
                .then(() => {
                    router.replace({ path: "/chatroom" });
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },
    },
};

export default postStore;
