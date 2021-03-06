import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/iconfont.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import {
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Drawer,
  Carousel,
  CarouselItem,
  Row,
  Col,
  Tooltip,
  Dialog,
  Button,
  Form,
  FormItem,
  Input,
  Image
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Drawer)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Image)

Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
