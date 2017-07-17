import { fetchTacos } from '../api'

export default {
  fetchTacos ({ commit, state }) {
    return fetchTacos().then(({data}) => {
      const { tacos } = data
      commit('SET_TACOS', { tacos })
    })
  }
}
