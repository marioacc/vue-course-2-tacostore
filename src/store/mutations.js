import Vue from 'vue'

export default {
  SET_TACOS (state, { tacos }) {
    tacos.forEach(taco => {
      if (taco) {
        Vue.set(state.tacos, taco.id, taco)
      }
    })
  },
  ADD_TACO (state, { taco }) {
    state.cart.push(taco)
  },
  REMOVE_TACO (state, { id }) {
    const index = state.cart.findIndex(taco => taco.id === id)
    state.cart = [...state.cart.slice(0, index), ...state.cart.slice(index + 1)]
  },
  EMPTY_CART (state) {
    state.cart = []
  }
}
