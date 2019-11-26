import axios from 'axios'

export default {
}
function getSummaryData (id) {
  return axios.get(`d1/patient/${id}/summary`)
}

export { getSummaryData }
