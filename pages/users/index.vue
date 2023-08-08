<template>
  <section>
    <h1>Users page</h1>
    <ul class="users">
      <li class="users__user" v-for="user in users" :key="user.id">
        <img :src="user.img" :alt="user.name" v-if="user.img && String(user.img).trim() !== ''">
        <div class="user__name-age">
          <span class="user__name">{{ user.name }}</span>,
          <span class="user__text" v-if="user.age && String(user.age).trim() !== ''">{{ user.age }}</span>
        </div>
        <div class="user__text">
          {{ user.text }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'UsersPage',
  data() {
    return {
      users: [
        {
          name: 'John',
          age: 32,
          link: '/',
          img: '',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam pariatur possimus cupiditate accusamus, id ut, sint commodi, labore aut ad sed expedita dicta nesciunt iusto tenetur! Ducimus, explicabo dolor.',
          id: 0,
        },
        {
          name: 'Erik',
          age: '22',
          link: '/',
          img: '',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam pariatur possimus cupiditate accusamus, id ut, sint commodi, labore aut ad sed expedita dicta nesciunt iusto tenetur! Ducimus, explicabo dolor.',
          id: 1,
        },
        {
          name: 'Joe',
          age: 72,
          link: '/',
          img: '',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam pariatur possimus cupiditate accusamus, id ut, sint commodi, labore aut ad sed expedita dicta nesciunt iusto tenetur! Ducimus, explicabo dolor.',
          id: 2,
        },
      ],
    }
  },
}
</script>
