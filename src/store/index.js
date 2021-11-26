import Vue from "vue";
import Vuex from "vuex";
import postStore from "./modules/postStore.js";
import userStore from "./modules/userStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        postStore,
        userStore,
    },
});
