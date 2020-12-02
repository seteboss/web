import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueChartJs from "vue-chartjs";

Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      datasets: [
        {
          label: 'Вес',
          borderColor: "#36d88e",
          // backgroundColor: '#36d88e',
          data: [77, 80, 83, 85, 85, 83, 85, 88, 90, 91, 90, 92]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

