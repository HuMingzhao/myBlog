<template>
  <div class="middle-content-wrapper">
    <div class="carousel-wrapper">
      <el-carousel ref="carousel" @change="handleChangeCarousel" arrow="always" indicator-position="none" :height="carouselHeight + 'px'" :autoplay="false">
        <el-carousel-item>
           <img width="100%" src="http://cdn.mingzhao.fun/assets/img/carsoursel-1.jpg" />
           <transition name="fade">
            <div v-if="currentIndex===0" class="carousel-text" style="background-color: #fff;position: absolute;">
              Yesterday i saw a lion kiss a deer
            </div>
           </transition>
        </el-carousel-item>
        <el-carousel-item>
           <img width="100%" src="http://cdn.mingzhao.fun/assets/img/carsoursel-2.jpg" />
           <transition name="fade">
            <div v-if="currentIndex===1" class="carousel-text" style="background-color: #fff;position: absolute;">
              City of stars are you shining just for me ?
            </div>
           </transition>
        </el-carousel-item>
        <el-carousel-item>
           <img width="100%" src="http://cdn.mingzhao.fun/assets/img/carsoursel-3.jpg" />
           <transition name="fade">
            <div v-if="currentIndex===2" class="carousel-text" style="background-color: #fff;position: absolute;">
              云在半空中 被微风剪碎
            </div>
           </transition>
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
      carouselHeight: '',
      items: [{
        url: 'http://cdn.mingzhao.fun/assets/img/carsoursel-1.jpg',
        name: '1'
      }, {
        url: 'http://cdn.mingzhao.fun/assets/img/carsoursel-2.jpg',
        name: '2'
      }, {
        url: 'http://cdn.mingzhao.fun/assets/img/carsoursel-3.jpg',
        name: '3'
      }],
      currentIndex: ''
    }
  },
  mounted () {
    //  509 / 906
    this.carouselHeight = Math.round(this.$refs.carousel.$el.clientWidth * 0.56)
    window.addEventListener('resize', this.getCarouselHeight)
    this.currentIndex = 0
  },
  methods: {
    getCarouselHeight () {
      this.carouselHeight = Math.round(this.$refs.carousel.$el.clientWidth * 0.56)
    },
    handleChangeCarousel (nextIndex, preIndex) {
      console.log(preIndex, nextIndex)
      this.currentIndex = nextIndex
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
  .el-carousel__container {
    position: relative;
  }
  .carousel-text {
    position: absolute;
    right: 0;
    bottom: 15%;
    font-size: 30px;
    font-weight: bold;
    padding: 20px 30px;
    max-width: 60%;
    opacity: .8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2);
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 3s;
    transform: translate3d(0, 0, 0);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
</style>
