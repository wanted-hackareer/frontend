import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
Vue.use(VueRouter); // 라우트 정보

const route = [
    { path: "/", name: "Home", component: Home }, // 루트(/)로 접속했을때, Home 컴포넌트를 보여준다.
]; // Vue 라우터 인스턴스 생성

const router = new VueRouter({ mode: "history", routes: route });
export default router;
