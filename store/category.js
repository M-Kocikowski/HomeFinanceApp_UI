export const state = () => ({
  categories: []
})

export const mutations = {
  categorize(state, data){
    state.categories = data;
  }
}
