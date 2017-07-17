export default {

  activeIds (state) {
    const { itemsPerPage, tacos } = state
    const page = Number(state.route.params.page) || 1
    const start = (page - 1) * itemsPerPage
    const end = page * itemsPerPage
    return Object.keys(tacos).slice(start, end)
  },

  activeTacos (state, getters) {
    return getters.activeIds.map(id => state.tacos[id])
  },
  itemsOnCart (state) {
    return state.cart.length || 0
  }
}
