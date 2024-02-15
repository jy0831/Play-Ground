<template>
    <main>
        <section class="dev">
            <div class="dev_hide">
                <article class="dev__frame">
                    <div v-for="i of 4" :class="Math.ceil(i % 2) ? 'left' : 'right'" :key="i" class="dev__cover">
                        <img v-for="item of list[i]" :key="item.imgUrl" class="dev__item" :src="item.imgUrl" alt="">
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
const list = ref([]);
const listSize = ref(6);
onBeforeMount(() => {
    for (let i = 0; i <= listSize.value; i++) {
        const arr = [];
        for (let d = 0; d < listSize.value * 2; d++) {
            arr.push({
                'name': 'Item Title',
                'imgUrl': `https://picsum.photos/200/300?random=${Math.ceil(i % 2) ? 1 : 2}`,
                'decript': `Image Description ${d * i}`
            });
        }
        list.value[i] = arr;
        // list.value[i].push(...arr);
    }
});
onMounted(() => {
    const rect = document.querySelector('.dev__cover').getBoundingClientRect();
    console.log(rect);
});
</script>

<style scoped>
.dev_hide {
    width: 1260px;
    height: 600px;
    overflow: hidden;
}

.dev {
    margin-block: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes slideRight {
    0% {
        transform: translate(0, 0%);
    }

    100% {
        transform: translate(0, -25%);
    }

    /* 각 이미지 컨테이너의 너비에 따라 조정 필요 */
}

@keyframes slideLeft {
    0% {
        transform: translate(0, -25%);
    }

    100% {
        transform: translate(0%, 0%);
    }

    /* 각 이미지 컨테이너의 너비에 따라 조정 필요 */
}

.left {
    animation: slideLeft 20s linear infinite;
}

.right {
    animation: slideRight 20s linear infinite;
}

.dev__cover {
    display: flex;
    flex-direction: column;
    transform: rotate(45deg) translateX(0);
    gap: 0px 0px;
    overflow-y: hidden;
    width: 300px;
    flex-shrink: 0;
    /* 애니메이션 지속 시간과 반복 설정 */
}

.dev__item {
    /* object-fit: cover; */
}

.dev__frame {
    position: relative;
    left: -200px;
    width: 200%;
    height: 250%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0px 10px;
    transform: rotate(40deg);
}
</style>