export const state = () => ({
  user: {},
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export const actions = {
  async fetchUser({commit}, id) {
    const user = await this.$axios.$get('https://jsonplaceholder.typicode.com/users/' + id);
    commit('setUser', user);
  }
};

export const getters = {
  user: s => s.user,
};
