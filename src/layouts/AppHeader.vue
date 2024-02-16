<template>
    <header>
        <section class="title">
            <router-link class="none-a" to="/">Main Title</router-link>
            <nav>
                <router-link v-for="page of list" :key="page.name" class="header__link none-a" :to="page.path">
                    {{ page.name }}
                </router-link>
                <!-- <router-link class="header__link none-a" to="/pages">PAGES</router-link>
                <router-link class="header__link none-a" to="/components">COMPONENTS</router-link> -->
            </nav>
        </section>
    </header>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import router from "../router";
// import { routes } from "vue-router";

const list = ref([]);
onBeforeMount(() => {
    list.value = router.options.routes;
});
</script>
<style scoped>
header {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #bababa;
    box-shadow: 0px 4px 10px 0px #7bcb65;
    background-color: rgb(203, 222, 82);
}

nav {
    display: flex;
    flex-direction: row;
    gap: 12px;
    color: black;
}

router-link {}

.none-a:link,
.none-a:visited {
    color: rgb(0, 0, 0);
    text-decoration: none;
}

.header__link {
    font-size: 20px;
    font-weight: 700;
    transition: all .1s;

}

.header__link:hover {
    scale: 1.02;
}

.title {
    font-size: 35px;
    font-weight: 700;
    border-radius: 10px;
    padding: 20px;
    width: 980px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>