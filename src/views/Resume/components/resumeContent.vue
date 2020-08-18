<template>
    <main class="resume-content bg-light-gray">
      <section>
          <h1>123</h1>
          <div class="boxes">
            <el-row :gutter="10" class="bg-light-white">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">111</el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">222</el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">333</el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">555</el-col>
            </el-row>
          </div>
      </section>
    </main>
  </template>

<script>

export default {
  name: 'resumeContent'
}
</script>

  <style lang="scss">
      h1, section {
          padding: 0;
          margin: 0;
      }
      .resume-content {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 1px 1px 8px rgba(0,0,0,.15);
        color: #3f1c1c;
        font-size: 14px;

        h1 {
            font-weight: 900;
            font-size: 18px;
            margin-bottom: 20px;
            margin-left: -20px;
            padding-left: 15px;
            border-left: 5px solid #e38fa9;
            text-align: left;
        }
        .boxes {
            border-radius: 5px;
            margin-bottom: 20px;
        }
      }
      .bg-light-gray {
        background-color: #f5f5f5;
      }
      .bg-light-white {
        background-color: #fff;
      }
  </style>
