<template>
    <div class="layout2">
        <left-bar />
        <main>
            <m-header />
           <app-main ref="appMain"/>
        </main>
        <mFooter />
    </div>
  </template>

<script>
import leftBar from '@/components/leftBar.vue'
import mHeader from '@/components/header.vue'
import AppMain from './components/appMain.vue'
import mFooter from '@/components/footer.vue'
export default {
  name: 'layout2',
  components: {
    leftBar,
    mHeader,
    AppMain,
    mFooter
  }
}
</script>

<style lang="scss">
.layout2 {
    height: 100vh;
    padding-left: 80px;
    border-top: 1px solid #fff;

    @media only screen and (max-width: 768px) {
         padding-left: 0;
        .left-nav-wrap {
          display: none;
        }
    }
}
</style>
