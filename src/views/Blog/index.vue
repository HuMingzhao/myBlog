<template>
    <div class="blog">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
          <div class="blog-left">
            <p v-html="html" v-highlight></p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <div class="blog-right">
            right
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>

export default {
  name: 'Blog',
  components: {
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

</style>
