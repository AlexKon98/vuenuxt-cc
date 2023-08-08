<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="https://v2.nuxt.com/">Nuxt SSR</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item" v-if="!hasToken">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li class="nav-item" v-else>
          <a @click.prevent="logout" href="#" class="nav-link" to="/login">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped lang="stylus">
nav
  padding-left 20px
  padding-right 20px
</style>
