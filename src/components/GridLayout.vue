<template>
  <div class="frame" ref="frame">
    <div class="blur" v-if="isBlur" @click="clickDialog"></div>
    <div class="layout" @scroll="scollFun($event)">
      <div class="item" v-for="(item, idx) of props.list" :key="item.imgUrl">
        <slot :openDialog="openDialog" :class="['child', `child-${idx}`, { __dialog: selectCompoIdx === idx }]"
          :data="item" :idx="idx" :selectIdx="selectCompoIdx">
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onBeforeMount, defineEmits } from "vue";

const props = defineProps(['list', 'childRect', 'row', 'gapRow', 'gapColumn']);
const emit = defineEmits(['scrollUpdate']);
const isBlur = ref(false);
const frame = ref(null);

const dialogW = ref(0);
const dialogH = ref(0);
const childW = ref(0);
const childH = ref(0);

const selectCompoIdx = ref(null);
const layoutW = ref();
const frameW = ref();
const rowCnt = ref(4);

const rowGap = ref(0);
const columnGap = ref(0);

const scollFun = (e) => {
  const div = document.querySelector('.layout');
  if (div.scrollHeight - div.scrollTop === div.clientHeight) {
    emit('scrollUpdate');
  }
}
onBeforeMount(() => {
  rowCnt.value = props.row || 4;
  rowGap.value = props.gapRow || 0;
  columnGap.value = props.gapColumn || 0;
  childW.value = props.childRect.width;
  childH.value = props.childRect.height;
  layoutW.value = ((childW.value) * rowCnt.value) + (rowGap.value * (rowCnt.value - 1));
  frameW.value = (window.innerWidth - (layoutW.value + 70)) / 2;
  console.log(rowCnt.value);
});
const clickDialog = (e) => {
  selectCompoIdx.value = null;
  isBlur.value = false;
  e.stopPropagation();
}

const openDialog = (e, idx) => {
  if (selectCompoIdx.value !== idx) {
    selectCompoIdx.value = idx;
    isBlur.value = true;
    const target = document.querySelector(`.child-${idx}`).getBoundingClientRect();
    dialogW.value = (window.innerWidth / 2) - (childW.value / 2) - target.left;
    dialogH.value = (window.innerHeight / 2) - (childH.value / 2) - target.top;
    e.stopPropagation();
  }
}
</script>

<style>
.frame {
  height: 100%;
  background-color: rgb(88, 187, 112);
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 10px;
}

.sub_title {
  font-size: 25px;
  font-weight: 600;
  padding: 8px 12px;
}

.layout {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: v-bind(columnGap + 'px') v-bind(rowGap + 'px');
  padding-inline: 10px;
  padding-block: 15px;
  background-color: rgb(243, 187, 253);
  width: v-bind(layoutW + 'px');
}

.frame::-webkit-scrollbar {
  width: 8px;
}

.frame::-webkit-scrollbar-thumb {
  background: rgb(185, 122, 220);
  border-radius: 10px;
}


.item {
  transition: all .3s;
  width: v-bind((childW)+'px');
  height: v-bind((childH)+'px');
  /* padding: 10px; */
  font-size: 35px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* background-color: aquamarine; */
}

.item:hover>:not(.__dialog) {
  /* scale: 1.03; */
  transform: translateY(-3px);
}

.child {
  width: v-bind(childW + 'px');
  height: v-bind(childH + 'px');
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: cornflowerblue; */
  border-radius: 5px;
  transition: all .3s;
}

.child:active {
  background-color: rgb(102, 237, 100);
}

.blur {
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background-color: #00000080;
  position: fixed;
  z-index: 10;
}

.__dialog {
  transform: translate(v-bind(dialogW + 'px'), v-bind(dialogH + 'px'));
  /* background-color: chocolate; */
  background-color: #eeeeee;
  width: 512px;
  height: 264px;
  z-index: 11;
  position: absolute;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-inline: 10px;
  border-radius: 12px;
  gap: 10px;
}
</style>
  