<template>
    <div class="home">
        <main class="home-container">
           <div class="side-menu-wrapper">
              <div class="logo-wrapper">
                  <div class="logo">
                    HMZ - BLOG
                  </div>
              </div>
              <side-menu />
              <side-footer />
           </div>
           <home-content />
        </main>
    </div>
  </template>

<script>
import sideMenu from './components/sideMenu.vue'
import sideFooter from './components/sideFooter.vue'
import homeContent from './components/homeContent.vue'
export default {
  name: 'Home',
  components: {
    sideMenu,
    sideFooter,
    homeContent
  }
}
</script>

<style lang="scss">
    .home {
      position: relative;
      padding-left: 310px;
      margin: 0;
      background-color: #fff;

      .home-container {
            position: relative;
            padding: 100px 95px;
        }
        .side-menu-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            box-shadow: 0 30px 50px 0 rgba(1, 1, 1, .2);
            overflow: auto;
            width: 310px;
            background-color: #fff;
        }
        .logo-wrapper {
        width: 100%;
        padding: 40px;
        box-sizing: border-box;
        }
        .logo {
        color: #CC0000;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        }
    }
</style>
