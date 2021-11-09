<template>
    <div>
        <!-- user bottom navigation -->
        <aside class="bottom-nav footer--view">
            <router-link
                v-for="footerItem in footerList"
                :key="footerItem.name"
                :to="footerItem.path"
                class="footer-btn"
                :class="{ 'footer-btn--active': $route.path === footerItem.path }"
            >
                <div>{{ footerItem.name }}</div>
            </router-link>
        </aside>
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            footerList: [
                {
                    name: "홈",
                    path: "/",
                },
                {
                    name: "채팅방",
                    path: "/",
                },
                {
                    name: "모임",
                    path: "/",
                },
            ],
        };
    },
};
</script>
<style scoped>
@import "./Footer.css";
</style>
