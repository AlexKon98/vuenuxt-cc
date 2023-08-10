<template>
  <section>
    <div class="container">
      <h1 class="title">Users page</h1>
      <div class="users__view">
        <button class="user__change-view" @click.prevent="changeList(2)" :class="{'active': listView === 2}">Двойной список</button>
        <button class="user__change-view" @click.prevent="changeList(3)" :class="{'active': listView === 3}">Тройной список</button>
      </div>
      <ul class="users" :class="{'double': listView === 2}">
        <li class="users__user" v-for="user of users" :key="'user' + user.id">
          <img :src="user.img" :alt="user.name" v-if="user.img && String(user.img).trim() !== ''">
          <img src="@/assets/user1.png" alt="Нет фото" v-else>
          <div class="user__name-age">
            <a class="user__name" href="#" @click.prevent="openUser(user)">{{ user.name }}</a>,
            <span class="user__text" v-if="user.username && String(user.username).trim() !== ''">{{ user.username }}</span>
          </div>
          <div class="user__text">
            <p>{{ `${user.address.city}, ${user.address.street}, ${user.address.suite} ${user.address.zipcode}` }}</p>
            <p>{{ `${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}` }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UsersPage',
  data() {
    return {
      listView: 2,
    }
  },
  async fetch({store}) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetchUsers');
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users'];
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id);
    },
    changeList(val) {
      this.listView = val;
    }
  },
}
</script>

<style scoped lang="stylus">
.users
  display flex
  flex-wrap wrap
  gap 15px
  max-width 100%
  transition all .3s linear

.users__user
  display flex
  flex-direction column
  width calc((100% / 3) - 10px)
  padding 10px
  border-radius 8px
  border 1px solid #000
  transition all .3s linear
  img
    display block
    width 100%
    max-height 300px
    object-fit contain

.user__name-age
  margin-top auto

.users.double
  gap 30px
  .users__user
    width calc(50% - 15px)

.users__view
  margin-bottom 30px

.user__change-view
  background transparent
  border-radius 4px
  border-color #000
  &.active
    background-color #80808069
</style>
