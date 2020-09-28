<template>
    <div class="footer">
      <span> ©2020 HMZ - BLOG</span>
      <a class="beian-link" href="http://beian.miit.gov.cn" target="_blank">闽ICP备2020018123号</a>
    </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss">
  .footer {
     height: 72px;
     line-height: 72px;
     text-align: center;
     color: #6b6b6b;
     font-size: 12px;

     .beian-link {
       margin-left: 20px;
       color: #6b6b6b;
     }
     .beian-link:hover {
       color: #CC0000;
     }
  }
</style>
