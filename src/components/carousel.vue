<template>
    <div class="carousel-wrapper">
      <ul>
          <li class="carousel-item" v-for="(item, index) in items" :key="index">
              <a href="#">
                  <img :src="item.url" />
              </a>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'middleContent',
  props: {
    items: {
      default: () => [{
        url: '../assets/img/city.webp',
        name: '1'
      }, {
        url: '../assets/img/sky1.webp',
        name: '2'
      }, {
        url: '../assets/img/sky2.webp',
        name: '3'
      }],
      type: Array
    }
  }
}
</script>

<style lang="scss">
    .carousel-wrapper {
        width: 100%;
        height: 100%;
    }
</style>
