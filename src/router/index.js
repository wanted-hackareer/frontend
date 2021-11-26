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
    { path: "/", redirect: "/login" },
    { path: "/home", name: "HomePage", component: HomePage },
    { path: "/login", name: "LoginPage", component: LoginPage },
    { path: "/register", name: "RegisterPage", component: RegisterPage },
    { path: "/search/:word?", name: "SearchPage", component: SearchPage },
    { path: "/home/shoppingcart", name: "ShoppingCartPage", component: ShoppingCartPage },
    { path: "/home/location", name: "LocationPage", component: LocationPage },
    { path: "/meeting:streetA?:streetB?", name: "MeetingPage", component: MeetingPage },
    { path: "/meeting/write", name: "WriteMeetingPage", component: WriteMeetingPage },
    { path: "/chatroom", name: "ChatRoomPage", component: ChatRoomPage },
    { path: "/alert", name: "AlertPage", component: AlertPage },
    { path: "/chat/:id", name: "ChatPage", component: ChatPage },
];

const router = new VueRouter({ mode: "history", routes: route });
export default router;

// 라우터 이동전에 로그인 유효성 검사
router.beforeEach((to, from, next) => {
    // 로그인 페이지 갔을때
    if (to.path === "/login") {
        // 로그인 상태가 아니면(token 없으면) 로그인 페이지로 이동
        if (localStorage.getItem("token") === null) {
            next();
        } else {
            // 로그인 상태면(key 있으면) 페이지 이동
            next({ path: "/home" });
        }
        // 입력 창 갔을 때
    } else if (to.path === "/register") {
        next();
        // 로그인, 입력창 아닐때
    } else {
        if (!localStorage.getItem("token")) {
            // 로그인 상태(key 없으면)가 아니면 로그인 페이지로 이동시킴
            next({ path: "/login" });
        } else {
            // 로그인 상태면(key 있으면) 페이지 이동
            next();
        }
    }
});
