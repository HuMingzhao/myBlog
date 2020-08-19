<template>
  <div>
    <home-content />
    <login />
  </div>
</template>

<script>
import homeContent from './components/homeContent.vue'
import Login from '../../components/login.vue'
export default {
  name: 'Home',
  components: {
    homeContent,
    Login
  }
}
</script>
