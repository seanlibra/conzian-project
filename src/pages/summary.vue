<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ this.$store.state.Xsummary }}</h3>
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
      this.fetchData()
    },
  },
  created(){
    this.fetchData()
  },
  methods:{
    fetchData () {
     var vm = this
     if (vm.$store.state.Xsummary == {} || vm.$store.state.Xsummary.id !== vm.summaryData  )     
     {
      getSummaryData(this.$route.params.id)
      .then(function(response){
        vm.summaryData = response.data
        vm.$store.dispatch('updateSummary',vm.summaryData)
        
      })
     }
     else return
    }
  },
};
</script>