<template>
    <div>
        <!-- user bottom navigation -->
        <footer class="bottom-nav footer--view" v-if="checkCurrentPath">
            <input v-if="$route.path === '/chat/1'" class="footer-chat-btn" placeholder="채팅을 입력해주세요." type="text" />
            <router-link
                v-else
                v-for="footerItem in footerList"
                :key="footerItem.name"
                :to="footerItem.path"
                class="footer-btn"
                :class="{ 'footer-btn--active': $route.path === footerItem.path }"
            >
                <div>{{ footerItem.name }}</div>
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
                    active: false,
                },
                {
                    name: "홈",
                    path: "/",
                    active: false,
                },
                {
                    name: "모임",
                    path: "/meeting",
                    active: false,
                },
            ],
        };
    },
    computed: {
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
};
</script>
<style scoped>
@import "./Footer.css";
</style>
