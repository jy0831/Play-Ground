<template>
    <GridLayout 
        @scrollUpdate="scrollUpdate" 
        v-slot="props" 
        :list="list" 
        :childRect="childRect" 
        :row="4" 
        :gapRow="12"
        :gapColumn="13"
    >
        <div @click="props.openDialog($event, props.idx)" :class="props.class">
            <img class="cover_img" :src="props.data.imgUrl" alt="">
            <div class="cover_main">
                <span class="cover_main__decript">
                    {{ props.data.name + (props.idx + 1) }}
                </span>
                <div v-if="props.selectIdx === props.idx">{{ props.data.decript }}</div>
            </div>
        </div>
    </GridLayout>
</template>

<style scoped>
.cover_img {
    object-fit: cover;
    width: 240px;
    height: 240px;
    border-radius: 6px;
    transition: all 0.3s;
}

.cover_main {
    height: 100%;
}

.cover_main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-size: 15px;
}

.cover_main>.cover_main__decript {
    font-size: 25px;
    font-weight: 600;
    padding-block: 10px;
}
</style>

<script setup>
import GridLayout from "@/components/GridLayout.vue";
import { onBeforeMount, reactive, ref } from "vue";
const childRect = reactive({
    width: 240,
    height: 300
});
const list = ref([]);
const listSize = ref(40);
const pageCnt = ref(20);
const scrEvt = ref(false);

// Make Mockup Data
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
    // Make Mockup Data
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