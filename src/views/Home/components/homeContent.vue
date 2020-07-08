<template>
    <div class="home-content">
       <ul class="home-panel-icons">
           <li>
               <i class="el-icon-search"></i>
           </li>
           <li>
            <i class="el-icon-s-fold" @click="drawer = true"></i>
           </li>
       </ul>
       <el-drawer
        :visible.sync="drawer"
        wrapperClosable
       >
        <span>我来啦!</span>
      </el-drawer>
    </div>
</template>

<script>
export default {
  name: 'homeContent',
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    handleClose () {
      console.log('closed')
    }
  }
}
</script>

  <style lang="scss">
    .home-panel-icons {
        position: fixed;
        top: 0;
        right: 30px;
        list-style: none;
        margin: 0;
        padding: 0;
        top: 0;
        z-index: 99;
        background: #333;
        border: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        li {
          display: block;
          width: 50px;
          height: 55px;
          text-align: center;
          line-height: 55px;
          border-radius: 0;
          padding: 0;
          margin: 0;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease-in-out;
          font-size: 20px;
        }

        li:hover {
          transform: scale(1.3);
        }
    }
  </style>
