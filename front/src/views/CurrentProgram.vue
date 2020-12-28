<template>
  <form class="form-signin text-main-color max-width-mod">
    <div class="modal-header">
      <h5 class="modal-title" id="modalLongProgramTitle">Текущая программа</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body text-center">
      <img class="text-center" src="/img/logo.png" alt="" width="200" height="200">
      <h3 class="text-header text-left pt-3 text-center">Программа 1</h3>
      <ul class="float-left text-left">
        <li>
          <h5>Описание программы</h5>
          <p>{{program.info}}</p>
        </li>
        <li>
          <h5>Тип программы</h5>
          <p>{{type}}</p>
        </li>
        <li>
          <h5>Сложность программы</h5>
          <p>{{complexity}}</p>
        </li>
        <li>
          <h5>Упражнения</h5>
          <ol  v-for="exerciseItem in program.exercise" v-bind:key="exerciseItem">
              {{exerciseItem.info}}
            <h6>Подходы</h6>
            <ol class="mb-3" v-for="approachItem in exerciseItem.approach" v-bind:key="approachItem">
                {{ approachItem.reiterationCount }} Повторений
            </ol>
          </ol>
        </li>
      </ul>
    </div>
<!--    <div class="modal-footer">-->
<!--      <router-link class="btn btn-secondary  text-main-color bg-black border-main" to="/profile" tag="button">Закрыть-->
<!--      </router-link>-->
<!--    </div>-->
  </form>
</template>

<script>
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'

export default {
  name: "CurrentProgram",
  styles,
  bootstrap,
  data(){
    return{
      program:[],
    }
  },
  computed: {
    type () {
      if (this.program.type === 'WEIGHT_GAIN'){
        return 'Набор массы'
      }else {
        return 'Похудение'
      }
    },
    complexity () {
      switch (this.program.complexity){
        case 'EASY': return 'Лёгкая'
        case 'AVERAGE': return 'Средняя'
        case 'COMPLICATED': return 'Сложная'
        default: return '-'
      }
    }

  },
  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    this.$http.get('/api/v1/workouts/' + this.$route.params.pId, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8090/',
    })
        .then((response) => {
          this.program = response.data
          console.log(this.program)
        })
  }

}
</script>

<style scoped>

</style>