<template>
  <div class="row no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative border-main">
    <div class="col p-4 d-flex flex-column position-static">
      <h4 class="mb-0 p-4 text-main-color ">{{card.name}}</h4>
      <p class="card-text mb-auto pl-4 text-main-color">{{card.info}}</p>

      <a v-on:click="$router.push({ name: 'CurrentDiet',params:{pId:card.id} })" class="stretched-link pl-4 text-main-color">Подробнее</a>
    </div>
    <div class="col-auto d-none d-lg-block">
      <img class="" :src="card.previewUri" alt=""  width="250" height="251">
    </div>
  </div>
</template>

<script>


export default {
  name: "Card",
  props:{card:{
      previewUri:String
    }},
}

</script>

<style scoped>

</style>