<template>
  <form class="form-signin text-main-color max-width-mod">
    <div class="modal-header">
      <h5 class="modal-title" id="modalLongDietTitle">Текущая диета</h5>
    </div>
    <div class="modal-body text-center">
      <img class="border-img" src="/img/vegetables.png" alt="" width="180" height="180">
      <h3 class="text-header text-left pt-3 text-center">{{diet.name}}</h3>
      <ul class="float-left text-left">
        <li>
          <h5>Описание диеты</h5>
          <p>{{diet.info}}</p>
        </li>
        <li>
          <h5>Тип диеты</h5>
          <p>{{type}}</p>
        </li>
        <li>
          <h5>Расписание</h5>
          <ol v-for="item in diet.eating" v-bind:key="item">
            <ol>
              {{item.name}}
              <ol>
                {{item.info}}
              </ol>
            </ol>
          </ol>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
export default {
name: "CurrentDiet",
  bootstrap,
  styles,
  data(){
    return{
      diet:[],
    }
  },
  computed: {
    type() {
      if (this.diet.type === 'WEIGHT_GAIN') {
        return 'Набор массы'
      } else {
        return 'Похудение'
      }
    }
  },

  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    this.$http.get('/api/v1/diets/' + this.$route.params.dId, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8090/',
    })
        .then((response) => {
          this.diet = response.data
        })
  }

}






</script>

<style scoped>

</style>