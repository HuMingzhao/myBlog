<template>
  <div class="middle-content-wrapper">
    <div class="carousel-wrapper">
      <el-carousel ref="carousel" indicator-position="none" :height="carouselHeight + 'px'" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 style="height: 100%;background-color: gray;">{{ item }}</h3>
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
  },
  data () {
    return {
      carouselHeight: ''
    }
  },
  mounted () {
    //  509 / 906
    this.carouselHeight = Math.round(this.$refs.carousel.$el.clientWidth * 0.56)
    window.addEventListener('resize', this.getCarouselHeight)
  },
  methods: {
    getCarouselHeight () {
      this.carouselHeight = Math.round(this.$refs.carousel.$el.clientWidth * 0.56)
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.getCarouselHeight)
  }
}
</script>

<style lang="scss">
  .carousel-wrapper {
    margin-bottom: 80px;
  }
</style>
