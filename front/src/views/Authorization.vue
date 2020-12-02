<template>
  <div>
    <form class="form-signin text-center">
      <img class="" src="/front/src/img/logo.png" alt="" width="100" height="100">
      <h1 class="text-header">Авторизируетесь</h1>
      <div>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required >
      </div>
      <div>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      </div>
      <div class="checkbox text-checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Запомнить меня
        </label>
      </div>
      <button class="btn " type="submit">Войти</button>
      <div class="mt-3 text-center">
        <a href="" class=" text-header ">Зарегистрироваться</a>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
    </form>
  </div>

</template>

<script>
import styles from '@/style/authorization.css'
export default {
  styles

}
</script>