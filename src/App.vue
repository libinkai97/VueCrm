-<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
