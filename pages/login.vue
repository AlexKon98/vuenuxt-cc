<template>
  <section>
    <div class="alert alert-danger mb-3" v-if="$route.query.message">
      Need login first
    </div>
    <div class="container">
      <h1 class="title">Login form</h1>
      <form class="form login-form" @submit.prevent="onSubmit">
        <div class="form-group">
          <input type="text" class="form-control" v-model="email">
        </div>
        <p>
          <nuxt-link to="/">To home page</nuxt-link>
        </p>
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'empty',
  data() {
    return {
      email: '',
      error: '',
    }
  },
  watch: {
    error(v) {
      console.log(v);
    }
  },
  methods: {
    onSubmit() {
      if(this.email.length > 0) {
        this.$store.dispatch('login');
        this.$router.push('/');
      } else {
        this.error = 'Введите ваш логин';
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.login-form
  max-width 75%
  display flex
  flex-direction column
  margin 0 auto

.title
  text-align center
</style>
