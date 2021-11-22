import Vue from "vue";
import Vuex from "vuex";
import cartStore from "./modules/cartStore.js";
import postStore from "./modules/postStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        postStore,
        cartStore,
    },
});
