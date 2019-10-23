export const state = () => ({
  categories: []
})

export const mutations = {
  categorize(state, data) {
    state.categories = data;
  }
}

export const actions = {
  async nuxtServerInit(commit, context) {
    const resp = await context.$axios.get('http://localhost:8080/api/categories');
    commit('categorize', resp.data);
  }
}
