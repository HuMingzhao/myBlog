<template>
    <main class="resume-content bg-light-gray">
      <section>
          <h1>Information</h1>
          <div class="boxes">
            <el-row :gutter="10" class="bg-light-white">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">sugar|male|1993</el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">bachelor|NanChangeHnagkong|NDT</el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">web Engineer|1 year</el-col>
            </el-row>
            <el-row :gutter="10" class="bg-light-white">
                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">expect position: web Engineer</el-col>
                <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">expect city: Xiamen</el-col>
            </el-row>
            <el-row :gutter="10" class="bg-light-white">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">Github: ：<a target="_blank" href="https://github.com/HuMingzhao">https://github.com/HuMingzhao</a></el-col>
            </el-row>
            <el-row :gutter="10" class="bg-light-white">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">personal site: ：<a target="_blank" href="#">...</a></el-col>
            </el-row>
          </div>
      </section>

      <section>
        <h1>Contact</h1>
        <div class="boxes">
          <el-row :gutter="10" class="bg-light-white">
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">phone: XXXXXXXX</el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">Email: XXXX</el-col>
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">Personal site: XXXX</el-col>
            </el-row>
        </div>
    </section>

    <section>
        <h1>Personal Project</h1>
        <div class="boxes">
          <el-row :gutter="10" class="bg-light-white">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">personal bog - using vue + vuex + element + Koa to create personal website about my resume and leaving message</el-col>
          </el-row>
          <el-row :gutter="10" class="bg-light-white">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">personal bog - using vue + vuex + element + Koa to create personal website about my resume and leaving message</el-col>
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
        .el-row {
            padding: 10px 15px;
        }
      }
      .bg-light-gray {
        background-color: #f5f5f5;
      }
      .bg-light-white {
        background-color: #fff;
      }
  </style>
