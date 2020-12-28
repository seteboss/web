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
        <Card v-bind:card="item"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/CardDiets";
// import bootstrap from '@/style/bootstrap.css'
// import styles from '@/style/style.css'
// import url1 from "@/img/vegetables.png";
// import url2 from "@/img/суп.png";
export default {
  components: {Card},
  bootstrap,
  styles,
  data(){
    return{
      items:[]
    }
  },
  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

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