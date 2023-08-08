<template>
  <section>
    <div class="container">
      <h1 class="title">Login form</h1>
      <form action="" class="form login-form">
        <div class="form-group">
          <input type="text" class="form-control">
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
