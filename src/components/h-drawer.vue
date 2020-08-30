<template>
    <div class="h-drawer-wrap" v-if="modelVisible">
      <div class="h-drawer-modal"></div>
      <div class="h-drawer" :class="{'active':contentVisible}">
         <slot name="h-content"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'h-drawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      contentVisible: false,
      modelVisible: false
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.modelVisible = val
        setTimeout(() => {
          this.contentVisible = val
        })
      } else {
        this.contentVisible = val
        setTimeout(() => {
          this.modelVisible = val
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss">
  .h-drawer-wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2020;

    .h-drawer-modal {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: .5;
        background: #000;
    }

    .h-drawer {
        opacity: 1;
        width: 30%;
        min-width: 350px;
        position: absolute;
        right: 0;
        background: #fff;
        height: 100%;
        overflow-y: auto;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .h-drawer.active {
        transform: translate3d(0, 0, 0);
    }
  }
</style>
