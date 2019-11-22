<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}   </p>
    <h3>{{ profileData }}</h3>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
     profileData:{},
     
    };
  },
   watch:{
    '$route.params.id':function(){
      this.getNewData()
      
    }
  },
  created(){
    this.getNewData()
   
  },
  methods:{
    getNewData(){
    const axios = require('axios').default;
    var vm = this;
    axios.get(`https://i1qfr4wu4i.execute-api.us-east-1.amazonaws.com/dev/d1/patient/${vm.$route.params.id}/profile`)
         .then(function (response) {
           console.log(response)
         vm.profileData = response.data
           console.log(vm.profileDate)
        })
    }
  }
};
</script>

