<template>
    <GridLayout @scrollUpdate="scrollUpdate" :list="list" :childRect="childRect" v-slot="props">
        <div @click="props.openDialog($event, props.idx)" :class="props.class">
            <img class="cover_img" :src="props.data.imgUrl" alt="">
            <div class="cover_main">
                <span class="cover_main__decript">
                    {{ props.data.name + (props.idx + 1) }}
                </span>
                <div v-if="props.class.includes('__dialog')">{{ props.data.decript }}</div>
            </div>
        </div>
    </GridLayout>
</template>

<style scoped>
.cover_img {
    object-fit: cover;
    width: 240px;
    height: 240px;
}

.__dialog>.cover_main {
    height: 100%;
}

.cover_main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-size: 15px;
}

.__dialog>.cover_main>.cover_main__decript {
    font-size: 25px;
    font-weight: 600;
    padding-block: 10px;
}
</style>

<script setup>
import GridLayout from "@/components/GridLayout.vue";
import { onBeforeMount, reactive, ref } from "vue";
const childRect = reactive({
    width: 250,
    height: 300
});
const list = ref([]);
const listSize = ref(40);
const pageCnt = ref(20);
const scrEvt = ref(false);
const scrollUpdate = () => {
    if (!scrEvt.value) return;
    for (let idx = 1; idx <= pageCnt.value; idx++) {
        list.value.push({
            'name': 'Item Title',
            'imgUrl': `https://picsum.photos/200/300?random=${idx + listSize.value}`,
            'decript': `Image Description ${idx + listSize.value}`
        });
        listSize.value += 1;
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
});

</script>

<style></style>