<template>
  <ul class="side-footer-wrapper">
      <li v-for="item in icons" :key="item">
          <a href="#">
              <i class="iconfont" :class="item"></i>
          </a>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'sideFooter',
  data () {
    return {
      icons: [
        'icon-qq',
        'icon-weibo',
        'icon-twitter',
        'icon-github',
        'icon-185078emailmailstreamline'
      ]
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
