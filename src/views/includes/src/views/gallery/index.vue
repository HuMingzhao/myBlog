<template>
    <div>
      <self-info />
      <water-fall />
    </div>
</template>

<script>
import selfInfo from './components/selfInfo.vue'
import waterFall from './components/waterfall.vue'
export default {
  name: 'Share',
  components: {
    selfInfo,
    waterFall
  }
}
</script>
