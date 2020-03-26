<template>
  <div id="app">
    <home></home>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import home from './views/home'
export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
 @import "assets/css/main.css";
</style>
