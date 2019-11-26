import axios from 'axios'

export default {
}
function getDayMoveData (id) {
  return axios.get(`d1/patient/${id}/exercise`)
}

export { getDayMoveData }
