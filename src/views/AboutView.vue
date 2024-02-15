<template>
  <div class="frame">
    <div class="sub_title">SUB Title</div>
    <div class="layout" ref="layout">
      <!-- <div class="blur" v-if="isBlur"></div> -->
      <div class="item" v-for="i of 40" :key="i">
        <div @click="openDialog($event)" class="child">
          {{ i }}번
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue";
const isBlur = ref(false);
const layout = ref(null);
onMounted(() => {
  console.log();
});
const w = ref(0);
const h = ref(0);
const clickDialog = (e) => {
  if (!e.target.classList.contains('_dialog')) {
    const target2 = document.querySelector('._dialog');
    target2.classList.remove('_dialog');
    removeEventListener('click', clickDialog);
    const blur = document.querySelector('.blur');
    console.log(blur);
    blur.remove();
    isBlur.value = false;
  }
}
const openDialog = (e) => {
  if (!e.target.classList.contains('_dialog')) {
    e.target.classList.add('_dialog');
    document.querySelector('.frame').insertAdjacentHTML(
      'beforeend',
      `<div class="blur"></div>`
    );
    isBlur.value = true;
    const target = e.target.getBoundingClientRect();
    w.value = (window.innerWidth / 2) - (target.width / 2) - target.left;
    h.value = (window.innerHeight / 2) - (target.height / 2) - target.top;
    console.log(w.value, h.value);
    addEventListener('click', clickDialog);
  }
}
</script>

<style>
.frame {
  /* width: 100%; */
  height: 100%;
  background-color: aliceblue;
  margin-block: 150px;
  margin-inline: 400px;
  padding-block: 10px;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sub_title {
  font-size: 25px;
  font-weight: 600;
  padding: 8px 12px;
  background-color: burlywood;
}

.layout {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 13px 10px;
  padding: 10px;
  background-color: rgb(243, 187, 253);
}

.item {
  transition: all .3s;
  width: 260px;
  height: 210px;
  font-size: 35px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: aquamarine;
}

.item:hover>:not(._dialog) {
  scale: 1.03;
}

.child {
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
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

._dialog {
  transform: translate(v-bind(w + 'px'), v-bind(h + 'px'));
  background-color: chocolate;
  width: 900px;
  height: 500px;
  z-index: 11;
  position: absolute;
}</style>
