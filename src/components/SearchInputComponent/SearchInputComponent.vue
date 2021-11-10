<template>
    <div class="search-wrap">
        <input type="texxt" class="select__input" placeholder="구매하고 싶은 항목을 검색해보세요." />
        <router-link to="/search">
            <button class="search__button">
                <img src="" />
            </button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: "SearchInputComponent",
};
</script>
<style scoped>
@import "./SearchInputComponent.css";
</style>
