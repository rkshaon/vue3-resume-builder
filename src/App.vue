<template>
  <nav-bar />
  <router-view />
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@font-face {
  font-family: 'AkcelerA';
  src: url('@/assets/fonts/AkcelerA.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AkcelerA-Medium';
  src: url('@/assets/fonts/AkcelerA-Medium.ttf') format('truetype');
  font-weight: bold;
}
/* Font */
.akceler-a-font {
  font-family: 'AkcelerA';
}
.akceler-a-medium-font {
  font-family: 'AkcelerA-Medium';
}
</style>
