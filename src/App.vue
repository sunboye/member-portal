<template>
  <div id="app">
    <router-view v-if="$route.path === '/' || $route.path === '/login'"></router-view>
    <Home v-else></Home>
  </div>
</template>

<script>
import './assets/style/base.css'
import Home from './components/HomePage.vue';
export default {
  name: 'app',
  components: {
    Home
  },
  created() {}
}
</script>

<style>
#app {
    height: 100vh;
}
</style>
