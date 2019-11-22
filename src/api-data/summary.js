import axios from 'axios'

export default {
  

}
function getSummaryData(id){
  var cache = {}
  axios.get(`https://i1qfr4wu4i.execute-api.us-east-1.amazonaws.com/dev/d1/patient/${id}/summary`)
  .then(function (response) {
    console.log(response)
  } 
)


}

export{getSummaryData}

