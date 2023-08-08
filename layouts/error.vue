<template>
  <section>
    <div class="container">
      <h1>Error 404</h1>
      <nuxt-link to="/">Home</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style scoped lang="stylus">
  h1
    color red

  section
    margin auto
    max-width 600px
</style>
