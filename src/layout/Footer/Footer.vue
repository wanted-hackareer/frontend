<template>
    <div>
        <!-- user bottom navigation -->
        <footer class="bottom-nav footer--view">
            <input v-if="$route.path === '/chat/1'" class="footer-chat-btn" type="text" placeholder="채팅을 입력해주세요." />
            <router-link
                v-else
                v-for="footerItem in footerList"
                :key="footerItem.name"
                :to="footerItem.path"
                class="footer-btn"
                :class="{ 'footer-btn--active': $route.path === footerItem.path }"
            >
                <div class="footer-btn-item">
                    <img class="footer-item-image" :src="$route.path === footerItem.path ? footerItem.activeUrl : footerItem.imageUrl" />
                    <div class="footer-item-text">{{ footerItem.name }}</div>
                </div>
            </router-link>
        </footer>
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            footerList: [
                {
                    name: "채팅방",
                    path: "/chatroom",
                    imageUrl: require("@/assets/images/Footer/chatting.png"),
                    activeUrl: require("@/assets/images/Footer/chatting-active.png"),
                    active: false,
                },
                {
                    name: "홈",
                    path: "/",
                    imageUrl: require("@/assets/images/Footer/home.png"),
                    activeUrl: require("@/assets/images/Footer/home-active.png"),
                    active: false,
                },
                {
                    name: "모임",
                    path: "/meeting",
                    imageUrl: require("@/assets/images/Footer/meeting.png"),
                    activeUrl: require("@/assets/images/Footer/meeting-active.png"),
                    active: false,
                },
            ],
        };
    },
    computed: {
        checkCurrentPath2(curPath) {
            const path = this.$route.path.split("/");
            if (path.findIndex((i) => i === curPath) === -1) return true;
            else return false;
        },

        checkCurrentPath() {
            const path = this.$route.path;
            if (path === "/login") {
                return false;
            } else if (path === "/register") {
                return false;
            } else {
                return true;
            }
        },
    },
    // mounted() {
    //     this.test();
    // },
    // methods: {
    //     test() {
    //         const path = this.$route.path.split("/");
    //         if (path.findIndex((i) => i === footerItem.path) === -1) return true;
    //         else return false;
    //     },
    // },
};
</script>
<style scoped>
@import "./Footer.css";
</style>
