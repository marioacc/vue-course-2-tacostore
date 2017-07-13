/* eslint-disable */
import axios from 'axios'

export function fetchTacos() {
    return axios.get(`http://demo3594906.mockable.io/tacos`)
}
