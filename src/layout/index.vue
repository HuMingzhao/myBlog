<template>
  <div class="home">
    <main class="home-container">
      <div class="side-menu-wrapper">
        <div class="logo-wrapper">
          <div class="logo">
            HMZ - BLOG
          </div>
        </div>

        <div class="user-info">
           <div class="user-avatar-wrap">
             <img width="100" src="https://thirdqq.qlogo.cn/g?b=oidb&k=UbNEiajdXXAUgiamgTNEBhFg&s=100&t=1483330474" />
           </div>

           <div class="user-name">sugar</div>
        </div>

        <div class="toggle-wrap">
          <span class="toggle-name">Menu</span>
          <i class="toggle-icon el-icon-arrow-down" @click="handleToggleClick"></i>
          <!-- <i class="el-icon-arrow-up"></i> -->
        </div>

        <div class="side-menu">
          <side-menu />
          <side-footer />
        </div>
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
  },
  methods: {
    handleToggleClick () {
      document.querySelector('.side-menu').classList.toggle('side-menu-active')
    }
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

    .toggle-wrap {
      width: 100%;
      overflow: hidden;
      display: none;
      position: relative;
      padding: 20px 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      font-size: 1.45rem;
      font-weight: 700;
      cursor: pointer;
      box-sizing: border-box;

      .toggle-name {
        float: left;
      }
      .toggle-icon {
        float: right;
      }
    }

    .logo-wrapper,
    .user-info
     {
      width: 100%;
      padding: 40px;
      box-sizing: border-box;
    }
    .user-info {
      padding-top: 10px;
    }
    .logo {
      color: #CC0000;
      font-size: 30px;
      font-weight: 700;
      text-align: center;
    }
    .user-avatar-wrap {
      margin-bottom: 10px;
    }
    .user-avatar-wrap,
    .user-name {
      text-align: center;
    }

    @media only screen and (max-width: 999px) {
      .side-menu-wrapper {
          position: relative;
          top: auto;
          left: auto;
          right: auto;
          width: 100%;
          height: auto;
          margin-bottom: 60px;
          overflow-y: hidden;
      }

      & {
        padding-left: 0;
      }

      .toggle-wrap {
        display: block;
      }

      .side-menu {
        /* display: none; */
        max-height: 0;
        transition: all .5s;
        opacity: 0;
      }
      .side-menu-active {
        /* display: block; */
        max-height: 600px;
        opacity: 1;
      }
    }

  }
</style>
