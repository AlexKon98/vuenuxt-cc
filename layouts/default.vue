<template>
  <div>
    <Header/>
    <main>
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Header, Footer },
}
</script>


<style lang="stylus">
ul
  list-style none
  padding 0
  margin 0

.container
  display block
  width 100%
  max-width 1920px
  padding 0 20px
  margin 0 auto
</style>
