<template>
  <section>
    <div class="container">
      <img :src="user.img" :alt="user.name" v-if="user.img && String(user.img).trim() !== ''">
      <img src="@/assets/user1.png" alt="Нет фото" v-else>
      <div>
        <h1 class="title">{{ user.name }}</h1>
        <a :href="'https://www.' + user.website">{{ user.website }}</a>
      </div>
      <hr>
      <h3 class="user__email">
        <a :href="'mailto:' + user.email">{{ user.email }}</a>,
        <a :href="'tel:' + user.phone">{{ user.phone }}</a>
      </h3>
      <div class="user__text">
        <p>{{ `${user.address.city}, ${user.address.street}, ${user.address.suite} ${user.address.zipcode}` }}</p>
        <p>{{ `${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}` }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  validate({params, redirect}) {
    let match = /^\d+$/.test(params.id);
    if (match) return match;
    else redirect(301, '/');
  },
  async fetch({store, params}) {
    await store.dispatch('user/fetchUser', params.id);
  },
  computed: {
    user() {
      return this.$store.getters['user/user'];
    }
  },
}
</script>
