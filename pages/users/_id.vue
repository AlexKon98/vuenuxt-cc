<template>
  <section>
    <div class="container">
      <h1 class="title">User: {{ id }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
}
</script>
