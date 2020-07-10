<template>
    <div class="home-content">
       <ul class="home-panel-icons">
           <li>
               <i class="el-icon-search"></i>
           </li>
           <li>
            <i class="el-icon-s-fold" @click="drawer = true"></i>
           </li>
       </ul>
       <middle-content />
       <el-drawer
        :visible.sync="drawer"
        wrapperClosable
        :show-close="false"
        class="drawer-wrapper"
       >
        <div class="center-menu-drawer">
          <button class="close-drawer-btn" @click="drawer=false">×</button>
          <div class="auther-info">
            <img class="auther-avatar" src="https://img.cdn.heanny.cn/ww_200.gif" />
            <span class="auther-name">HMZ</span>
            <span class="auther-programer-type">web</span>
            <button class="auther-contact">CONTACT ME</button>
          </div>

          <h3><span>Popular Posts</span></h3>
          <ul>
            <li class="post-item" v-for="(item, index) in items" :key="index">
              <div class="post-item-content">
                <img class="post-avatar" src="https://cdn.heanny.cn/HeadPortrait/moren.gif">
                <div class="post-right">
                  <p class="post-content">
                     Apache 配置https及强制使用443端,Apache 配置https及强制使用443端,Apache 配置https及强制使用443端，Apache 配置https及强制使用443端
                  </p>
                  <div class="post-time">
                    <i class="el-icon-time"></i>
                    <span>2020-07-09</span>
                    <i class="el-icon-view"></i>
                    <span>3720</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-drawer>
    </div>
</template>

<script>
import middleContent from './middleContent.vue'
export default {
  name: 'homeContent',
  components: {
    middleContent
  },
  data () {
    return {
      drawer: false,
      items: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    handleClose () {
      console.log('closed')
    }
  }
}
</script>

  <style lang="scss">
    ul, li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    p {
      padding: 0;
      margin: 0;
    }
    .home-content {
      .home-panel-icons {
        position: fixed;
        top: 0;
        right: 30px;
        list-style: none;
        margin: 0;
        padding: 0;
        top: 0;
        z-index: 99;
        background: #333;
        border: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        li {
          display: block;
          width: 50px;
          height: 55px;
          text-align: center;
          line-height: 55px;
          border-radius: 0;
          padding: 0;
          margin: 0;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease-in-out;
          font-size: 20px;
        }

        li:hover {
          transform: scale(1.3);
        }
      }

      .drawer-wrapper .el-drawer {
        height: 100%;
        overflow-y: auto;
      }
      .center-menu-drawer {
        padding: 10px 40px;
        overflow-y: auto;
        box-sizing: border-box;
      }

      .close-drawer-btn {
        outline: none;
        border: none;
        position: absolute;
        top: 0px;
        right: 60px;
        font-size: 30px;
        color: #fff;
        background: #f5593d;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        transition: background 0.2s ease-in-out;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        &:hover {
          background: hsl(9, 92%, 52%);
        }
      }
      .auther-info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 60px;

        .auther-name {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }
        .auther-programer-type {
          margin-top: -1.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }
        button {
          box-sizing: border-box;
          font-size: 0.875rem;
          font-weight: 700;
          padding: 0.5rem 18px;
          line-height: 1.75;
          cursor: pointer;
          text-transform: uppercase;
          background-color: #333;
          border: 2px solid #333;
          color: #FFFFFF;
          opacity: 1;
          transition: all 150ms linear;
          outline: none !important;
          box-shadow: none !important;
          border-radius: 0px !important;
          width: 100%;
        }
      }
      .auther-avatar {
        width: 150px;
        height: 150px;
        margin: 0 auto 2rem auto;
        display: block;
        border-radius: 50%;
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      }

      h3 {
          border-bottom: 3px solid rgba(0, 0, 0, 0.02);

          span {
            padding-bottom: 7px;
            position: relative;
            font-size: 1.45rem;
            font-weight: 700;
            color: #333333;
            display: inline-block;
          }
          span:after {
            content: "";
            height: 3px;
            width: 100%;
            background: #51cbce;
            left: 0;
            bottom: -3px;
            position: absolute;
            z-index: 2;
          }
        }

      .post-item {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .post-item-content {
          display: flex;
          align-items: top;
          justify-content: space-between;

          .post-content {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
        }
        .post-avatar {
          width: 55px;
          height: 55px;
          margin-right: 15px;
        }
        .post-right {
          width: calc(100% - 70px)
        }

      }
    }
  </style>
