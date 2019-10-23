export const state = () => ({

})

export const mutations = {}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    const resp = await context.$axios.get('http://localhost:8080/api/categories');
    vuexContext.commit('category/categorize', resp.data);
  }
}
