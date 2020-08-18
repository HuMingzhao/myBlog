<template>
  <div class="blog">
    <p v-html="html" v-highlight></p>
    <h2>工作 时间戳处理</h2>
    <div>
      <p v-html="html2" v-highlight></p>
    </div>
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

    const codeStr2 = `
                    /** 
                     * 时间戳转化为年 月 日 
                     *
                     * @param {*} timestamp ts: 传入时间戳
                     * @param {*} format 返回格式，支持自定义，但参数必须与formateArr里保持一致
                     */
                    function timeFormatTime(timestamp,format){
                      const formateArr = ['Y', 'M', 'D'];
                      let returnArr = [];

                      let date = new Date(timestamp);
                      let year = date.getFullYear()
                      let month = date.getMonth() + 1
                      let day = date.getDate()
                      returnArr.push(year, month, day);  // 得到年-月-日

                      returnArr = returnArr.map(formatNumber);

                      for (var i in returnArr) {
                          format = format.replace(formateArr[i], returnArr[i]);
                      }
                      return format;
                    }
                    /* 输出 */
                    module.exports = {
                      timeFormatTime:timeFormatTime
                    }
    `
    return {
      html: '<pre><code>' + codeStr + '</code></pre>',
      html2: '<pre><code>' + codeStr2 + '</code></pre>'
    }
  }
}
</script>

<style lang="scss">

</style>
