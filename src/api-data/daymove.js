import axios from 'axios'

export default {
  
}
function getDayMoveData(id){
  return axios.get(`https://i1qfr4wu4i.execute-api.us-east-1.amazonaws.com/dev/d1/patient/${id}/exercise`)

}

export{getDayMoveData}
