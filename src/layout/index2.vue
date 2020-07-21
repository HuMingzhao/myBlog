<template>
    <div class="layout2">
        <left-bar />
        <main>
            <m-header />
           <app-main ref="appMain"/>
        </main>
    </div>
  </template>

<script>
import leftBar from '@/components/leftBar.vue'
import mHeader from '@/components/header.vue'
import AppMain from './components/appMain.vue'
export default {
  name: 'layout2',
  components: {
    leftBar,
    mHeader,
    AppMain
  }
}
</script>

<style lang="scss">
.layout2 {
    height: 100vh;
    padding-left: 80px;
    border-top: 1px solid #fff;

    main {

    }
}
</style>
