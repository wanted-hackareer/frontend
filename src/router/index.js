import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
import Search from "../pages/Search/Search.vue";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage.vue";
import MeetingPage from "../pages/MeetingPage/MeetingPage.vue";
import ChatRoomPage from "../pages/ChatRoomPage/ChatRoomPage.vue";
Vue.use(VueRouter); // 라우트 정보

const route = [
    { path: "/", name: "Home", component: Home },
    { path: "/search/:word?", name: "Search", component: Search },
    { path: "/shoppingcart", name: "ShoppingCartPage", component: ShoppingCartPage },
    { path: "/meeting", name: "MeetingPage", component: MeetingPage },
    { path: "/chatroom", name: "ChatRoomPage", component: ChatRoomPage },
]; // Vue 라우터 인스턴스 생성

const router = new VueRouter({ mode: "history", routes: route });
export default router;
