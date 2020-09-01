<template>
  <div id="waterfall-wrap" :key="column">
     <ul class="waterfall-inner">
       <li class="waterfall-column" :style="{width: (100/column-2) + '%'}" v-for="(it, index) in column" :ref="'column' + index" :key="it">
         <div class="waterfall-column-item" v-for="(item, i) in goods[index]" :key="i">
           <img :src="item.imgUrl" style="width: 100%" />
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
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332838610&di=845e593e6c997913d6f9be6a3b37adac&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg'
      }, {
        order: '2',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332872091&di=f30d4e17a4ec09be6d1d0dceaa9d84df&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg'
      }, {
        order: '3',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332905289&di=751a903831c504f168536de33c47d15a&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg'
      }, {
        order: '4',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332925448&di=4fe17347fc960702c52140e26ab9155c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg'
      }, {
        order: '5',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332939972&di=51767f49e974b81204ceed69370bb955&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F48%2F69%2F01300000169041121120698749544.jpg'
      }, {
        order: '6',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332953170&di=60549042953bd8b61efc683a7527dda9&imgtype=0&src=http%3A%2F%2Fi1.sinaimg.cn%2FIT%2F2010%2F0419%2F201041993511.jpg'
      }, {
        order: '7',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332838610&di=845e593e6c997913d6f9be6a3b37adac&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg'
      }, {
        order: '8',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332872091&di=f30d4e17a4ec09be6d1d0dceaa9d84df&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg'
      }, {
        order: '9',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332905289&di=751a903831c504f168536de33c47d15a&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg'
      }, {
        order: '10',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332925448&di=4fe17347fc960702c52140e26ab9155c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg'
      }, {
        order: '11',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595332939972&di=51767f49e974b81204ceed69370bb955&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F48%2F69%2F01300000169041121120698749544.jpg'
      }]
    }
  },
  created () {
    this.getResizeColum()
    window.addEventListener('resize', this.getResizeColum)
  },
  mounted () {
    for (let i = 0; i < this.column; i++) {
      this.goods[i] = []
    }
    this.getData(this.items)
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
</style>
