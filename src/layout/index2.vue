<template>
    <div class="layout2">
        <left-bar />
        <main>
            <m-header />
           <!-- <app-main ref="appMain"/> -->
        </main>
    </div>
  </template>

<script>
import leftBar from '@/components/leftBar.vue'
import mHeader from '@/components/header.vue'
export default {
  name: 'layout2',
  components: {
    leftBar,
    mHeader
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
