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
@font-face {
  font-family: 'CityBoysSoft-Light';
  src: url('@/assets/fonts/CityBoysSoft-Light.otf') format('opentype');
}
@font-face {
  font-family: 'CityBoysSoft-Regular';
  src: url('@/assets/fonts/CityBoysSoft-Regular.otf') format('opentype');
}
@font-face {
  font-family: 'CityBoysSoft-Bold';
  src: url('@/assets/fonts/CityBoysSoft-Bold.otf') format('opentype');
}
@font-face {
  font-family: 'CityBoysSoft-SemiBold';
  src: url('@/assets/fonts/CityBoysSoft-SemiBold.otf') format('opentype');
}
/* Font */
.akceler-a-font {
  font-family: 'AkcelerA';
}
.akceler-a-medium-font {
  font-family: 'AkcelerA-Medium';
}
.city-boys-soft-light-font {
  font-family: 'CityBoysSoft-Light';
}
.city-boys-soft-regular-font {
  font-family: 'CityBoysSoft-Regular';
}
.city-boys-soft-bold-font {
  font-family: 'CityBoysSoft-Bold';
}
.city-boys-soft-semibold-font {
  font-family: 'CityBoysSoft-SemiBold';
}
/* Font Size */
.font-size-18 {
  font-size: 18px;
}
/* List */
.list-style-type-none {
  list-style-type: none;
}
.list-style-type-circle {
  list-style-type:circle;
}
.font-weight-bold {
  font-weight: bold;
}
</style>
