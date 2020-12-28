<template>
  <div>
    <form class="form-signin text-center" @submit.prevent="submitHandler">
      <img class="" src="/front/src/img/logo.png" alt="" width="100" height="100">
      <h1 class="text-header">Авторизируетесь</h1>
      <div>
        <input id="email"
               type="text"
               v-model.trim="email" class="form-control" placeholder="Email address" required>
      </div>
      <div>
        <input id="password"
               type="password"
               v-model.trim="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="checkbox text-checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Запомнить меня
        </label>
      </div>
      <button class="btn " type="submit">Войти</button>
      <div class="mt-3 text-center">
        <a href="/registratoin" class=" text-header ">Зарегистрироваться</a>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
    </form>
  </div>

</template>

<script>
import styles from '@/style/authorization.css'
import querystring from "querystring";

export default {
  styles,
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    submitHandler() {
      const formData = {
        username: this.email,
        password: this.password,
        grant_type: 'password'
      };
      this.$http.post('/oauth/token', querystring.stringify(formData), {
        headers: {
          'authorization': 'Basic dWk6bXJJVG1ndnpSWE9a',
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/x-www-form-urlencoded',
          "cache-control": "no-cache"
          // 'Accept-Encoding': 'br'
        }, baseURL: 'http://localhost:8090/',
      })
          .then((response) =>
          {console.log(response.data)
            localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
            localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
            this.$router.push({ name: 'Workout' })
          })
          .catch((error) => console.log(error))
    }
  }

}
</script>