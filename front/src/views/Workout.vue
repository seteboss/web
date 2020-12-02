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
import url1 from "@/img/hand.png"
import url2 from "@/img/бонус.png"
import url3 from "@/img/скакалка.png"
import url4 from "@/img/секундомер.png"

export default {
  name: "Workout",
  components: {Card},
  data(){
    return{
      items:[
        {
          title: "Программа на развитие выносливости",
          description: "Данная программа будет интересна тем, кто хочет\n" +
              "              себя проверить на прочность.",
          url: url1,
          link: "Перейти к программе"

        },
        {
          title: "Программа на развитие выносливости 2",
          description: "Данная программа подойдёт новичкам",
          url: url2,
          link: "Перейти к программе"

        },
        {
          title: "Программа на набор массы",
          description: "Данная программа будет интересна тем, кто хочет\n" +
              "              себя проверить на прочность.",
          url: url4,
          link: "Перейти к программе"

        },
        {
          title: "Программа на снижение веса",
          description: "Данная программа позволит сбросить лишний вес.",
          url: url3,
        link: "Перейти к программе"
        }
      ]
    }
  }


}

</script>