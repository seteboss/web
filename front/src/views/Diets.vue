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
import Card from "@/components/Card";
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
import url1 from "@/img/vegetables.png";
import url2 from "@/img/суп.png";
export default {
  components: {Card},
  bootstrap,
  styles,
  data() {
    return {
      items: [
        {
          title: "Диета на набор массы",
          description: "Данная диета позволит спотсмену набрать мышечную массу.",
          url: url1,
          link: "Перейти к диете"

        },
        {
          title: "Диета на похудение",
          description: "Данная диета отлично способствует снижению\n" +
              "              веса",
          url: url2,
          link: "Перейти к диете"
        },
      ]
    }
  }
}


</script>