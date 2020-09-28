<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
         <mFooter />
    </section>
</template>

<script>
import mFooter from '@/components/footer.vue'
export default {
  name: 'AppMain',
  components: {
    mFooter
  },
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">

</style>
