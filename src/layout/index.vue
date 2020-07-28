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
      <app-main ref="appMain" />
      <!-- <home-content /> -->
    </main>
  </div>
</template>

<script>
import AppMain from './components/appMain.vue'
import sideMenu from './components/sideMenu.vue'
import sideFooter from './components/sideFooter.vue'
export default {
  name: 'Home',
  components: {
    sideMenu,
    sideFooter,
    AppMain
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

    @media only screen and (max-width: 999px) {
      .side-menu-wrapper {
          position: relative;
          top: auto;
          left: auto;
          right: auto;
          width: 100%;
          height: 100%;
          margin-bottom: 60px;
      }

      & {
        padding-left: 0;
      }
    }

    side-menu-wrapper

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
