import axios from 'axios'

export default {
}
function getProfileData (id) {
  return axios.get(`d1/patient/${id}/profile`)
}

export { getProfileData }
