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
        url: 'https://img.cdn.heanny.cn/18623246165198.jpg',
        name: '1'
      }, {
        url: 'https://img.cdn.heanny.cn/12312421512.jpg',
        name: '2'
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
