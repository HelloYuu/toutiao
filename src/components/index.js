import layoutAside from './home/layout-aside'
import layoutHesder from './home/layout-header'
import BreadCrumb from './common/bread-crumb.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHesder)
    Vue.component('bread-crumb', BreadCrumb)
  }
}
