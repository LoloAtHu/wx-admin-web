<template lang="html">
  <div calss="menu-wrapper">
    <div class="app-title">
      {{ appName }}
    </div>
    <el-menu
      class="tac"
      :default-active="this.$route.path"
      unique-opened
      router
    >
      <div v-for="menu in menus" :key="menu.path">
        <!-- root level menu -->
        <el-menu-item :index="menu.path" v-if="menu.subMenus.length === 0">
          <i class="iconfont" :class="menu.icon"></i>
          <span slot="title" class="menu-span" >{{menu.name}}</span>
        </el-menu-item>

        <el-submenu :index="menu.path" v-else>
          <el-menu-item :index="subMenu.path" v-for="subMenu in menu.subMenus" :key="subMenu.path" class="menu-span">
            <span class="menu-span" slot="title">{{subMenu.name}}</span>
          </el-menu-item>
        </el-submenu>

      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      appName: 'KWB App Demo',
      menus: [
        {
          path: '/index',
          name: '首页',
          subMenus: [],
          icon: 'el-icon-location'
        },
        // { path: '/question', name: '问题管理', subMenus: [], icon: 'el-icon-document' },
        {
          path: '/setting',
          name: '设置',
          subMenus: [],
          icon: 'el-icon-setting'
        }
      ],
      activeIndex: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    $route (to, from) {
      // 如果meta.parentPath有值则取parentPath为当前激活菜单
      console.log('menu route:', from, to)
      if (to.meta.parentPath) {
        this.activeIndex = to.meta.parentPath
      } else {
        this.activeIndex = to.fullPath
      }
    }
  }
}
</script>

<style scope>
.el-col-12 {
}
</style>
