<template>
  <form class="form-signin">
      <div class="modal-header">
        <h5 class="modal-title text-main-color" id="progressModalLongTitle">Сохранение прогресса</h5>
      </div>
      <div class="modal-body">
        <h5 class="text-left text-main-color">Вес</h5>
        <label for="inputWeight" class="sr-only "></label>
        <input id="inputWeight" class="form-control bg-black" required autofocus>
        <div class="mt-3">
          <h5 class="text-left text-main-color">Дата</h5>
          <div class="">
            <input class="form-control float-left" type="date" value="2011-08-19" id="example-date-input">
          </div>
          <label for="example-date-input" class="col-2 col-form-label"></label>
        </div>
      </div>
      <div class="modal-footer">
        <router-link class="btn btn-secondary  text-main-color bg-black border-main"  to="/profile" tag="button">Закрыть</router-link>
      </div>
  </form>
</template>



<script>
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
export default {
name: "SavingProgress",
  styles,
  bootstrap
}
</script>

<style scoped>

</style>