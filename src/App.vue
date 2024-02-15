<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './layouts/AppHeader.vue'
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView />
</template>

<style>
#app,
body,
html {
  width: 100%;
  height: auto;
}

#app {
  display: flex;
  flex-direction: column;
}

body {
  margin: 0px;
  background-color: rgba(119, 166, 255, 0.195);
}
</style>
