<template>
    <div class="row no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative border-main">
      <div class="col p-4 d-flex flex-column position-static">
        <h4 class="mb-0 p-4 text-main-color ">{{card.title}}</h4>
        <p class="card-text mb-auto pl-4 text-main-color">{{card.description}}</p>
        <a href="#" class="stretched-link pl-4 text-main-color">{{card.link}}</a>
      </div>
      <div class="col-auto d-none d-lg-block">
        <img class="" :src="card.url" alt=""  width="250" height="251">
      </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props:['card'],
}
</script>

<style scoped>

</style>