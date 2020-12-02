<template>
  <nav class="navbar navbar-expand-lg  bg-black bd-navbar ">
    <div class="row w-100">
      <div class="col-md-10 col-sm-10 col-10 col-s">
        <img class="navbar-brand " src="../img/logo_nav.png" alt="" height="40" width="110">
      </div>
      <div class="">
        <button class="navbar-toggler border-main" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>

    <div class="collapse navbar-collapse align-self-end w-auto" id="navbarSupportedContent">
      <ul class="navbar-nav right-align">
        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
        >

          <a class="nav-link text-main-color text-nowrap" href="#">{{link.title}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
  data: () => ({
    links:[
      {title:'Тренировки', url: '/'},
      {title:'Диеты', url: '/diets'},
      {title:'Добавить тренировку', url: '/workoutEditor'},
      {title:'Добавить диету', url: '/dietsEditor'},
      {title:'Профиль', url: '/profile'},
      {title:'Выйти', url: '/authorization'}
    ]
  })



}
</script>

<style scoped>

</style>