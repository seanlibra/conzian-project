<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ summaryDate }}</h3>
  </div>
</template>


<script>
export default {
 
  data() {
    return {
     summaryDate:{},
    
    };
  },
  computed: {
    // checkid: function() {
    //  
    //   if (2 !== 1 ){
    //     return 1
    //   }
    //   else return 1
    // }
    // }
  },
  watch:{
    '$route':function(){
      this.getNewData()
    },
    // 'route'(to,from){
     
    // }
  },
  created(){
   this.getNewData()
   
  },
  methods:{
   getNewData(){
    const axios = require('axios').default;
    var vm = this;
    axios.get(`https://i1qfr4wu4i.execute-api.us-east-1.amazonaws.com/dev/d1/patient/${vm.$route.params.id}/summary`)
         .then(function (response) {  
         vm.summaryDate = response.data
        })
   }
  },
};
</script>