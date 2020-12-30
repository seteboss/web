<template>
  <div>
    <div class="jumbotron p-4 p-md-5 text-white bg-black text-main-color border-main sub">
      <div class="col-md-6 px-0 text-main-color">
        <h1 class="display-4 text-main-color">Добро пожаловать</h1>
        <p class="lead my-3">Место для информации</p>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-6" v-for="item in items" v-bind:key="item">
        <CardDiets v-bind:card="item"></CardDiets>
      </div>
    </div>
  </div>
</template>

<script>
import CardDiets from "@/components/CardDiets";
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
import token from "@/user/token";
// import url1 from "@/img/vegetables.png";
// import url2 from "@/img/суп.png";
export default {
  components: {CardDiets},
  bootstrap,
  styles,
  data(){
    return{
      items:[]
    }
  },
  created() {
    const access_token = token.accessToken
    this.$http.get('/api/v1/diets/all', {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8090/',
    })
        .then((response) => {
          this.items = response.data
        })
  }
}


</script>