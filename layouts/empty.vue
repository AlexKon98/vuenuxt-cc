<template>
  <section class="empty-layout">
    <Nuxt/>
  </section>
</template>

<script>
export default {
  name: 'EmptyPage',
}
</script>

<style lang="stylus" scoped>
.empty-layout
  display flex
  padding-top 5rem
  justify-content center
</style>
