import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage/HomePage.vue";
import LoginPage from "../pages/LoginPage/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage/RegisterPage.vue";
import SearchPage from "../pages/SearchPage/SearchPage.vue";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage.vue";
import LocationPage from "../pages/LocationPage/LocationPage.vue";
import MeetingPage from "../pages/MeetingPage/MeetingPage.vue";
import ChatRoomPage from "../pages/ChatRoomPage/ChatRoomPage.vue";
import WriteMeetingPage from "../pages/WriteMeetingPage/WriteMeetingPage.vue";
import AlertPage from "../pages/AlertPage/AlertPage.vue";
import ChatPage from "../pages/ChatPage/ChatPage.vue";

Vue.use(VueRouter); // 라우트 정보

const route = [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/login", name: "LoginPage", component: LoginPage },
    { path: "/register", name: "RegisterPage", component: RegisterPage },
    { path: "/search/:word?", name: "SearchPage", component: SearchPage },
    { path: "/shoppingcart", name: "ShoppingCartPage", component: ShoppingCartPage },
    { path: "/location", name: "LocationPage", component: LocationPage },
    { path: "/meeting", name: "MeetingPage", component: MeetingPage },
    { path: "/chatroom", name: "ChatRoomPage", component: ChatRoomPage },
    { path: "/write", name: "WriteMeetingPage", component: WriteMeetingPage },
    { path: "/alert", name: "AlertPage", component: AlertPage },
    { path: "/chat/:id", name: "ChatPage", component: ChatPage },
];

const router = new VueRouter({ mode: "history", routes: route });
export default router;
