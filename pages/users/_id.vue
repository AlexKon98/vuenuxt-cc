<template>
  <section>
    <div class="container">
      <img :src="user.img" :alt="user.name" v-if="user.img && String(user.img).trim() !== ''">
      <img src="@/assets/user1.png" alt="Нет фото" v-else>
      <div>
        <h1 class="title">{{ user.name }}</h1>
        <a :href="user.website">{{ user.website }}</a>
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
  data() {
    return {
      user: {},
    }
  },
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({$axios, params}) {
    const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id);
    return { user };
  },
}
</script>
