<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2 text-main-color">График</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <button type="button" class="btn btn-sm btn-outline-secondary text-main-color border-main">Тренировки
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary text-main-color border-main">Диета
          </button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle text-main-color border-main">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-calendar text-main-color border-main">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Эта неделя
        </button>
      </div>
    </div>
    <line-chart class="text-main-color"> </line-chart>
    <div class="row text-main-color text-center">
      <div class="col-md-4 ">
        <h2>Профиль</h2>
        <img class="" src="../img/logo.png" alt="" width="100" height="100">
        <p>
          <span>Имя - </span>
          <span>Олег</span>
        </p>
        <p>
          <span>Фамилия - </span>
          <span>Андреев</span>
        </p>
        <p>
          <span>Вес - </span>
          <span>80кг</span>
        </p>
        <p>
          <span>Рост - </span>
          <span>185см</span>
        </p>
        <div class="btn-group mr-2">
          <router-link class="btn btn-sm btn-outline-secondary text-main-color border-main" to="/editUser" tag="button">Редакировать профиль</router-link>

          <router-link class="btn btn-sm btn-outline-secondary text-main-color border-main" to="/savingProgress" tag="button">Сохранить прогресс</router-link>
        </div>
        <!-- Modal -->
      </div>
      <div class="col-md-4">
        <h2>Программа</h2>
        <img class="" src="../img/logo.png" alt="" width="100" height="100">
        <h3>Программа1</h3>
        <p>Программа 1 предназначена для тренировки мужчин – новичков (жим лежа менее 110-120 кг), подростков
          или девушек которым нужен «акцент на верх тела». Программа подойдет мужчинам у которых слабый мышечный
          корсет спины, «грыжи». Вертикальная нагрузка при выполнении упражнения снижена до минимума, почти нет
          упражнений стоя.</p>
        <div class="btn-group mr-2">
          <router-link class="btn btn-sm btn-outline-secondary text-main-color border-main" to="/currentProgram" tag="button">Открыть</router-link>
          <button type="button" class="btn btn-sm btn-outline-secondary text-main-color border-main">Удалить</button>
        </div>
      </div>
      <div class="col-md-4">
        <h2>Диета</h2>
        <img class="" src="../img/logo.png" alt="" width="100" height="100">
        <h3>Диета1</h3>
        <p>
          <span>Вид диеты - </span>
          <span>Для набора массы</span>
        </p>
        <div class="btn-group mr-2">
          <router-link class="btn btn-sm btn-outline-secondary text-main-color border-main" to="/currentDiet" tag="button">Открыть</router-link>
          <button type="button" class="btn btn-sm btn-outline-secondary text-main-color border-main">Удалить</button>
        </div>

      </div>
    </div>
  </div>
</template>
<link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/blog/">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

<script>


export default {
  data: () => ({
    linkEditUser:{
      url: '/editUser'
    },
  })
}
</script>

<style scoped>

</style>