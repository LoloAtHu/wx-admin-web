<template>
  <div id="app">
    <div class="nav" v-if="$route.name !== 'Login'">
      <Menu></Menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  .nav {
    min-width: 180px;
  }
}
</style>
