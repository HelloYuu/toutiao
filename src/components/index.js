import layoutAside from './home/layout-aside'
import layoutHesder from './home/layout-header'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHesder)
  }
}
