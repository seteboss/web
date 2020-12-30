<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    info:"",
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'Данные 1',
          backgroundColor: '#00de8d',
          data: []
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));
    const user_id = JSON.parse(localStorage.getItem('user_id'));

    this.$http.get('/api/v1/users/points/' + user_id, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8090/',
    })
        .then((response) => {
          this.info = response.data
          console.log(this.info)
          for (let i = 0; i < this.info.length; i++) {
            this.chartdata.labels[i] = this.info[i].date
            this.chartdata.datasets[0].data[i] = this.info[i].value
          }
          this.renderChart(this.chartdata, this.options)
        })
  }
}

</script>