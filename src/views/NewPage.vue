<template>
    <main>
        <section class="slider">
            <article style="display: flex; align-items: center;">
                <div class="arrow" @click="left($event)">{{ '<' }}</div>
                        <article class="slider__frame">
                            <div class="slider__item" v-for="(item, idx) of list" :key="item.imgUrl">
                                <img style="width: 100%; height: 100%;" :src="item.imgUrl" alt="">
                            </div>
                        </article>
                        <div class="arrow" @click="right($event)">></div>
            </article>
            <article class="page">
                <div v-for="item of totalPage" :key="item" class="page__item" :class="item == (curPage + 1) ? 'bold' : ''">
                    {{ item }}
                </div>
            </article>
        </section>
    </main>
</template>
<style scoped>
.page {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px 5px;
}

.bold {
    font-weight: 900;
}
</style>
<script setup>
import { onBeforeMount, reactive, ref, Transition } from "vue";


const list = ref([]);
const listSize = ref(16);

const frameW = ref();

const viewList = ref([]);
const curPage = ref(0);
const pageCnt = ref(4);
const totalPage = ref(0);
const left = (e) => {
    if (curPage.value > 0) {
        curPage.value -= 1;
        document.querySelector('.slider__frame').scrollTo({ left: (266 * curPage.value) * 4, top: 0, behavior: "smooth" });
    } else {
        curPage.value = totalPage.value - 1;
        document.querySelector('.slider__frame').scrollTo({ left: (266 * curPage.value) * 4, top: 0, behavior: "smooth" });
    }
}
const right = (e) => {
    if ((curPage.value + 1) * 4 < list.value.length) {
        curPage.value += 1;
        document.querySelector('.slider__frame').scrollTo({ left: (266 * curPage.value) * 4, top: 0, behavior: "smooth" });
    } else {
        curPage.value = 0;
        document.querySelector('.slider__frame').scrollTo({ left: (266 * curPage.value) * 4, top: 0, behavior: "smooth" });
    }
}
onBeforeMount(() => {
    for (let i = 0; i < listSize.value; i++) {
        list.value.push({
            'name': 'Item Title',
            'imgUrl': `https://picsum.photos/200/300?random=${i + 1}`,
            'decript': `Image Description ${i + 1}`
        });
    }
    frameW.value = (4 * 260) + (12 * 3);
    totalPage.value = Math.ceil(list.value.length / pageCnt.value);
    viewList.value = [...list.value].splice(curPage.value * pageCnt.value, pageCnt.value);
    console.log(list.value);
});
</script>

<style scoped>
.arrow {
    font-size: 35px;
    padding-inline: 12px;
    cursor: pointer;
}

.slider {
    width: 100%;
    height: 250px;
    background-color: #79797950;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.slider .slider__frame {
    scroll-snap-align: start;
}

.slider__frame {
    width: v-bind(frameW + 'px');
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    gap: 0px 12px;
    flex-wrap: nowrap;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;

    position: relative;
}

.slider__item {
    background-color: #ffffff;
    width: 260px;
    height: 220px;
    margin-block: 8px;
    flex-shrink: 0;
    scroll-snap-align: start;
    object-fit: cover;
}
</style>