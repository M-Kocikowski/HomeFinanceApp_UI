export const state = () => ({
  categories: []
})

export const mutations = {
  categorize(state, data) {
    state.categories = data;
  },

  addCategory(state, category){
    state.categories.push(category);
  },

  editCategory(state, category){
    const index = state.categories.findIndex(el => el.id === category.id);
    state.categories[index] = category;
  }
}

export const getters = {
  getCategoryNames(state){
    let names = [];
    for(let i = 0; i < state.categories.length; i++){
      names.push(state.categories[i].name);
    }
    return names;
  }
}
