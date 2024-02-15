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
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

body {
  margin: 0px;
  background-color: #fffdff;
}
</style>
