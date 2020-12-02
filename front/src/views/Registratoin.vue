<template>
<div class="mr-auto ml-auto">
  <form class="form-signin text-center">
    <img class="" src="../img/logo.png" alt="" width="100" height="100">
    <h1 class="text-header">Регистрация</h1>
    <div class="mb-3 text-left">
      <a class="text-header">Введите адрес электронной почты</a>
    </div>
    <label for="inputEmail" class="sr-only"></label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <div class="mb-3 mt-3 text-left">
      <a class="text-header">Введите пароль</a>
    </div>
    <label for="inputPassword" class="sr-only"></label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <div class="mb-3 mt-3 text-left">
      <a class="text-header">Повторите пароль</a>
    </div>
    <label for="repeatPassword" class="sr-only"></label>
    <input type="password" id="repeatPassword" class="form-control" placeholder="Password" required>

    <button class="btn mt-3" type="submit">Зарегистрироваться</button>

  </form>
</div>
</template>


<script>
import styles from '@/style/registratoin.css'
export default {
  name: "Registratoin",


  styles
}
</script>

