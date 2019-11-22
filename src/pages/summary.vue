<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ summaryData }}</h3>
  </div>
</template>


<script>
import { getSummaryData } from '@/api-data/summary.js'
import Axios from 'axios'
export default {
 
  data() {
    return {
     summaryData:{},
    
    };
  },
  computed: {
  },
  watch:{
    '$route':function(){
      this.getNewData()
    },
    // 'route'(to,from){
     
    // } homework
  },
  created(){
    var vm = this
    var cache = getSummaryData(this.$route.params.id)
    vm.summaryData = cache
   
  },
  methods:{
   getNewData(){
    var vm = this;
    // axios.get(`https://i1qfr4wu4i.execute-api.us-east-1.amazonaws.com/dev/d1/patient/${vm.$route.params.id}/summary`)
    //      .then(function (response) {  
    //      vm.summaryDate = response.data
    //     })
    //  Axios.get(`d1/patient/${vm.$route.params.id}/summary`)
    //  .then(function(response){
       
    //  })
   }
  },
};
</script>