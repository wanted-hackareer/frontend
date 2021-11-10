import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
import Search from "../pages/Search/Search.vue";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage.vue";
import LocationPage from "../pages/LocationPage/LocationPage.vue";
import MeetingPage from "../pages/MeetingPage/MeetingPage.vue";
import ChatRoomPage from "../pages/ChatRoomPage/ChatRoomPage.vue";
import WriteMeetingPage from "../pages/WriteMeetingPage/WriteMeetingPage.vue";
import AlertPage from "../pages/AlertPage/AlertPage.vue";
import ChatPage from "../pages/ChatPage/ChatPage.vue";

Vue.use(VueRouter); // 라우트 정보

const route = [
    { path: "/", name: "Home", component: Home },
    { path: "/search/:word?", name: "Search", component: Search },
    { path: "/shoppingcart", name: "ShoppingCartPage", component: ShoppingCartPage },
    { path: "/location", name: "LocationPage", component: LocationPage },
    { path: "/meeting", name: "MeetingPage", component: MeetingPage },
    { path: "/chatroom", name: "ChatRoomPage", component: ChatRoomPage },
    { path: "/write", name: "WriteMeetingPage", component: WriteMeetingPage },
    { path: "/alert", name: "AlertPage", component: AlertPage },
    { path: "/chat/:id", name: "ChatPage", component: ChatPage },
]; // Vue 라우터 인스턴스 생성

const router = new VueRouter({ mode: "history", routes: route });
export default router;
