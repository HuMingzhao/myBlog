import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/iconfont.css'
import {
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Drawer,
  Carousel,
  CarouselItem
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Drawer)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
