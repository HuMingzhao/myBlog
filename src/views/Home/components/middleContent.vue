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
  </div>
</template>

<script>
import card from './Card/index.vue'
export default {
  name: 'middleContent',
  components: {
    card
  }
}
</script>

<style lang="scss">
  .carousel-wrapper {
    margin-bottom: 80px;
  }
</style>
