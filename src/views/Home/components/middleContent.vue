<template>
    <div class="middle-content-wrapper">
       <div>
          <el-carousel
            indicator-position="none"
            height="509px"
            :autoplay="false"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 style="height: 509px;background-color: gray;">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
       </div>
    </div>
</template>

<script>
export default {
  name: 'middleContent'
}
</script>

  <style lang="scss">

  </style>
