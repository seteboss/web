<template>
  <form class="form-signin">
    <div class="modal-header">
      <h5 class="modal-title text-main-color" id="exampleModalLongTitle">Редактирование профиля</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <h5 class="text-left text-main-color">Имя</h5>
      <label for="inputName" class="sr-only "></label>
      <input id="inputName" class="form-control bg-black" required autofocus>
      <h5 class="text-left text-main-color">Фамилия</h5>
      <label for="inputSecondName" class="sr-only "></label>
      <input id="inputSecondName" class="form-control bg-black" required autofocus>
      <h5 class="text-left text-main-color">Фото профиля</h5>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="customFile">
        <label class="custom-file-label" for="customFile">Выберете новое фото</label>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary text-main-color bg-black border-main">Сохранить изменения</button>
      <router-link class="btn btn-secondary  text-main-color bg-black border-main"  to="/profile" tag="button">Закрыть</router-link>
    </div>
  </form>
</template>

<script>

import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
export default {
name: "EditUser",
  styles,
  bootstrap
}
</script>

<style scoped>

</style>