<template>
  <div class="middle-content-wrapper">
    <div class="carousel-wrapper">
      <el-carousel indicator-position="none" height="509px" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 style="height: 509px;background-color: gray;">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <card />
    <p v-html="html" v-highlight></p>
  </div>
</template>

<script>
import card from './Card/index.vue'
export default {
  name: 'middleContent',
  components: {
    card
  },
  data () {
    const codeStr = `
                    import hljs from 'highlight.js'
                    import 'highlight.js/styles/googlecode.css' //样式文件

                    Vue.directive('highlight',function (el) {
                      let blocks = el.querySelectorAll('pre code');
                      
                      blocks.forEach((block)=>{
                        hljs.highlightBlock(block)
                      })
                    })`
    return {
      html: '<pre><code>' + codeStr + '</code></pre>'
    }
  }
}
</script>

<style lang="scss">
  .carousel-wrapper {
    margin-bottom: 80px;
  }
</style>
