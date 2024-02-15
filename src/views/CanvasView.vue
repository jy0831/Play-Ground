<template>
    <div class="frame">
        <canvas width="1000" height="800" id="canvas">
        </canvas>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";

const canvas = ref({});
const ctx = ref({});;

onMounted(() => {
    draw();
    // while (true) {
    //     position.x += 1;
    // }
});
const getContext = () => {
    const canvas = document.getElementById("canvas")
    return canvas.getContext("2d");
}
const position = reactive({
    x: 10,
    y: 10
});
// const left = ref(false);
// const right = ref(false);
// const up = ref(false);
// const down = ref(false);
const clear = () => {
    const ctx = getContext();
    ctx.clearRect(position.x, position.y, 50, 50);
}
const load = () => {
    const ctx = getContext();
    ctx.beginPath();
    ctx.rect(position.x, position.y, 50, 50);
    ctx.fill();
}
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        var rectangle = new Path2D();
        rectangle.rect(position.x, position.y, 50, 50);
        ctx.fill(rectangle);

        addEventListener('keydown', (e) => {
            e.preventDefault();
            switch (e.key) {
                case 'ArrowLeft':
                    left();
                    break;
                case 'ArrowRight':
                    right();
                    break;
                case 'ArrowUp':
                    up();
                    break;
                case 'ArrowDown':
                    down();
                    break;
                default:
                    break;
            }
        });
    }
}
watch(position, () => {
    clear();
    load();
});
const moveMent = ref(10);
const left = () => {
    position.x -= moveMent.value;
}
const right = () => {
    position.x += moveMent.value;
}
const up = () => {
    position.y -= moveMent.value;
}
const down = () => {
    position.y += moveMent.value;
}

</script>

<style scoped></style>