<template>
  <main>
    <div v-if="show" style="z-index 20; font-weight: 600; font-size: 30px; position: absolute; left: 40%; top: 40%; width: 10%; height: 10%; background-color: rgb(255, 255, 255): black;">LODING....</div>
    <div class="list" style="height: 700px; position: relative; overflow-y: scroll;">
      <div v-for="item of lists" :key="item" class="items">
        <img style="z-index 2;" :src="`src/assets/${item}`" :alt="item">
      </div>
    </div>
    <div class="grid_layout">

    </div>
  </main>
</template>
  
<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
// const canvas = ref(); 
// const ctx = ref();

const lists = ref(['1.png', '2.png', '3.png', '4.png']);
const show = ref(false);
const eventId = ref();
onBeforeUnmount(() => {
  console.log('unmounted');
  removeEventListener('scroll', eventId.value);
});
onMounted(() => {
  const div = document.querySelector('.list');
  eventId.value = div.addEventListener('scroll', (e) => {
    console.log(div.scrollHeight - div.scrollTop, div.clientHeight);
    if (div.scrollHeight - div.scrollTop === div.clientHeight) {
      show.value = true;
      setTimeout(() => {
        lists.value.push(...['1.png', '2.png', '3.png', '4.png']);
        show.value = false;
      }, 2000);
    }
  });
});

// const dino = reactive({
//   x: 10,
//   y: 200,
//   width: 50,
//   height: 50,
//   draw: () => {
//     ctx.value.fillStyle = 'green';
//     ctx.value.fillRect(dino.x, dino.y, dino.width, dino.height);
//   }
// });
// const cactus = reactive({
//   x: 500,
//   y: 200,
//   width: 50,
//   height: 50,
//   draw: () => {
//     ctx.value.fillStyle = 'red';
//     ctx.value.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);
//   }
// });
// class Cactus {
//   constructor() {
//     this.x = 500;
//     this.y = 200;
//     this.width = 50;
//     this.height = 50;
//   }
//   draw() {
//     ctx.value.fillStyle = 'red';
//     ctx.value.fillRect(this.x, this.y, this.width, this.height);
//   }
// }
// const timer = ref(0);
// const tickFrame = () => {
//   requestAnimationFrame(tickFrame);
//   timer.value++;
//   ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
//   if (timer.value % 60 === 0) {
//     // cactus.value = new Cactus();
//     cactus.x++;
//     cactus.draw();
//   }
//   dino.draw();
// }
// onMounted(() => {
//   canvas.value = document.getElementById('canvas');
//   ctx.value = canvas.value.getContext('2d');
//   canvas.value.width = window.innerWidth - 100;
//   canvas.value.height = window.innerHeight - 100;
//   dino.draw();
//   // cactus.value = new Cactus();
//   cactus.draw();
//   tickFrame();
// });
</script>

<style>
#canvas {
  background-color: #c4c4c4;
}
</style>
