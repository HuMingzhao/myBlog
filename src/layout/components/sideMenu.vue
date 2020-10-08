<template>
      <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <!-- <span slot="title">HOME</span> -->
          <span slot="title">Home</span>
        </el-menu-item>
        <!-- <el-menu-item index="2">
          <i class="el-icon-edit"></i>
          <span slot="title">BLOG</span>
        </el-menu-item> -->
        <el-menu-item index="/gallery">
          <i class="el-icon-film"></i>
          <span slot="title">Gallery</span>
        </el-menu-item>
        <!-- <el-menu-item index="4">
          <i class="el-icon-share"></i>
          <span slot="title">SHARE</span>
        </el-menu-item> -->
        <!-- <el-menu-item index="5">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">GBOOK</span>
        </el-menu-item> -->
        <!-- <el-menu-item index="6">
            <i class="el-icon-link"></i>
            <span slot="title">LINK</span>
        </el-menu-item> -->
        <!--<el-menu-item index="/resume">
            <i class="el-icon-setting"></i>
            <span slot="title">About me</span>
        </el-menu-item>-->
        <!-- <el-menu-item index="4">
            <i class="el-icon-user-solid"></i>
            <span slot="title" @click="$store.commit('SET_SHOW_LOGIN', true);">LOG IN</span>
        </el-menu-item> -->
      </el-menu>
  </template>

<script>
// @ is an alias to /src
export default {
  name: 'sideMenu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
    .el-menu-vertical-demo {
        .el-menu-item {
            font-size: 1.1rem
        }
        .el-menu-item, .el-submenu__title {
            height: auto;
            line-height: 1;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 40px !important;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
    }
</style>
