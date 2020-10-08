<template>
  <div id="waterfall-wrap" :key="column">
     <ul class="waterfall-inner">
       <li class="waterfall-column" :style="{width: (100/column-2) + '%'}" v-for="(it, index) in column" :ref="'column' + index" :key="it">
         <div class="waterfall-column-item" v-for="(item, i) in goods[index]" :key="i">
           <img :src="item.imgUrl" style="width: 100%" class="item-pic" />
         </div>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'Waterfall',
  data () {
    return {
      column: 0,
      imgArr: [],
      goods: [],
      items: [{
        order: '1',
        imgUrl: 'https://img1.doubanio.com/view/photo/l/public/p2503003759.webp'
      }, {
        order: '2',
        imgUrl: 'https://img2.doubanio.com/view/photo/l/public/p1514180043.webp'
      }, {
        order: '3',
        imgUrl: 'https://img1.doubanio.com/view/photo/l/public/p2381631408.webp'
      }, {
        order: '4',
        imgUrl: 'https://img1.doubanio.com/view/photo/l/public/p1259692789.webp'
      }, {
        order: '5',
        imgUrl: 'https://img9.doubanio.com/view/photo/l/public/p2595298496.webp'
      }, {
        order: '6',
        imgUrl: 'https://img3.doubanio.com/view/photo/l/public/p2550927931.webp'
      }, {
        order: '7',
        imgUrl: 'https://img1.doubanio.com/view/photo/l/public/p681141767.webp'
      }, {
        order: '8',
        imgUrl: 'https://img1.doubanio.com/view/photo/l/public/p2293569209.webp'
      }, {
        order: '9',
        imgUrl: 'https://img9.doubanio.com/view/photo/l/public/p2395677306.webp'
      }, {
        order: '10',
        imgUrl: 'https://img9.doubanio.com/view/photo/l/public/p1990574015.webp'
      }, {
        order: '11',
        imgUrl: 'https://img3.doubanio.com/view/photo/l/public/p1891801030.webp'
      }]
    }
  },
  created () {
    this.getResizeColum()
    window.addEventListener('resize', this.getResizeColum)
  },
  mounted () {
    // for (let i = 0; i < this.column; i++) {
    //   this.goods[i] = []
    // }
    // this.getData(this.items)
  },
  methods: {
    getData (data) {
      this.imgArr = data
      this.formatData(this.items)
    },
    formatData (data) {
      const test = async () => {
        let lowColumn = 0
        for (let i = 0; i < data.length; i++) {
          if (!this.goods[lowColumn]) {
            this.goods[lowColumn] = []
          }

          const tar = this.goods[lowColumn].concat([data[i]])
          this.$set(this.goods, lowColumn, tar)
          lowColumn = await this.getHeightArr(lowColumn)
        }
      }
      test()
    },
    getHeightArr (lowColumn) {
      return new Promise((resolve, reject) => {
        const newImg = new Image()
        newImg.src = this.goods[lowColumn][this.goods[lowColumn].length - 1].imgUrl
        newImg.onload = () => {
          const arr = document.querySelector('.waterfall-inner').children
          const heightArr = []
          for (let i = 0; i < arr.length; i++) {
            heightArr.push(arr[i].offsetHeight)
          }

          let min = heightArr[0]
          let minIndex = 0
          for (let i = 0; i < heightArr.length; i++) {
            if (min > heightArr[i]) {
              min = heightArr[i]
              minIndex = i
            }
          }
          resolve(minIndex)
        }
      })
    },
    getlowHeightColumn () {
      let lowColumn = 0
      if (this.column < 2) return lowColumn
      for (let i = 0; i < this.column - 1; i++) {
        const h1 = this.$refs['column' + i][0].offsetHeight || 0
        const h2 = this.$refs['column' + (i + 1)][0].offsetHeight || 0
        lowColumn = h2 > h1 ? i + 1 : lowColumn
      }
      return lowColumn
    },
    getResizeColum () {
      const widthArr = [768, 992, 1200, 1920]
      const curWidth = document.documentElement.clientWidth
      for (let i = 0; i < widthArr.length - 1; i++) {
        if (curWidth < widthArr[0]) {
          this.column = 1
          break
        }

        if (curWidth >= widthArr[widthArr.length - 1]) {
          this.column = 5
          break
        }

        if (curWidth <= widthArr[i + 1] && curWidth > widthArr[i]) {
          this.column = i + 2
          break
        }
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.getResizeColum)
  },
  watch: {
    column (val) {
      this.goods = []
      for (let i = 0; i < this.val; i++) {
        this.goods[i] = []
      }
      this.getData(this.items)
    }
  }
}
</script>

<style>
.waterfall-inner {
  overflow: hidden;
}
.waterfall-column {
  margin-right: 10px;
  float: left;
}
.waterfall-column-item {
  margin-bottom: 10px;
}
.waterfall-inner .waterfall-column:last-child {
  margin-right: 0;
}
.waterfall-inner .item-pic {
  animation: changeImg .5s;
}

@keyframes changeImg {
  0% {
    transform: scale(0.6);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
