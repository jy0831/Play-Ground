<template>
    <section class="frame">
        <article class="chat_box">
            <div class="chat_line" :class="chat.isMine ? 'right' : 'left'" v-for="chat of chatList" :key="chat">
                <div class="chat" :class="chat.isMine ? 'mine' : 'orther'">
                    {{ chat.text }}
                </div>
            </div>
        </article>
        <article class="chat_input_box">
            <input @keypress.enter="send" class="chat_input" type="text" v-model="sendChat">
        </article>
    </section>
</template>
<style scoped>
.chat_line {
    display: flex;
}

.right {
    justify-content: flex-end;
}

.left {
    justify-content: flex-start;
}
</style>
<script setup>
import { ref } from "vue";
const chatList = ref([]);
const sendChat = ref('');
const ws = new WebSocket('ws://localhost:30001');

const send = async () => {
    chatList.value.push({ text: sendChat.value, isMine: true });
    ws.send(sendChat.value);
    sendChat.value = '';
    // let a;
    // console.log('start');
    // await fetch('http://localhost:3000/users/test').then(res => {
    //     a = res;
    // });
    // console.log('end: ', a);
}
ws.onmessage = (event) => {
    chatList.value.push({ text: event.data, isMine: false });
}

</script>
<style scoped>
.chat_input {
    width: 450px;
    height: 30px;
    border-radius: 30px;
    border: 1px;
    font-size: 17px;
    padding-inline: 10px;
    padding-block: 5px;
}

.frame {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.chat_box {
    background-color: #fefefe;
    width: 500px;
    height: 800px;
    overflow-y: scroll;
    border-radius: 30px;
    border: 1px solid #eeeeee;
    padding-block: 10px;
    padding-inline: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.chat_box::-webkit-scrollbar {
    width: 10px;
}

.chat {
    border: 1px solid #dddddd;
    width: fit-content;
    padding-inline: 20px;
    padding-block: 10px;
    border-radius: 15px;
    color: #000000;
    position: relative;
}

.mine {
    background-color: #52c365;

}

.orther {
    background-color: #fefefe;
}
</style>


