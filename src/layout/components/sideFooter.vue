<template>
  <ul class="side-footer-wrapper">
      <li v-for="item in icons" :key="item">
          <a :href="item.url" :target="item.url == 'javascript:void(0)' ? '' : '_blank'">
              <i class="iconfont" :class="item.class"></i>
          </a>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'sideFooter',
  data () {
    return {
      icons: [{
        class: 'icon-qq',
        url: 'javascript:void(0)'
      }, {
        class: 'icon-weibo',
        url: 'javascript:void(0)'
      }, {
        class: 'icon-twitter',
        url: 'javascript:void(0)'
      }, {
        class: 'icon-github',
        url: 'https://github.com/HuMingzhao'
      }, {
        class: 'icon-185078emailmailstreamline',
        url: 'mailto:821547297@qq.com'
      }]
    }
  }
}
</script>

<style lang="scss">
  .side-footer-wrapper {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 20px 40px;
      box-sizing: border-box;
      background-color: #51cbce;
      height: 63px;

      a {
        text-decoration: none;
        .iconfont {
            font-size: 20px;
            color: #fff;
            display: block;
            transition: all .3s ease-in-out;
        }
      }

      a:hover .iconfont {
        transform: scale(1.5) !important;
      }
  }
</style>
