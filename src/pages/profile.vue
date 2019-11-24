<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}   </p>
    <h3>{{ this.$store.state.Xprofile }}</h3>
  </div>
</template>

<script>
import { getProfileData } from '@/api-data/profile.js'
export default {
  
  data() {
    return {
     profileData:{},
     
    };
  },
   watch:{
    '$route.params.id':function(){
      this.fetchData()
      
    }
  },
  created(){
    this.fetchData()
   
  },
  methods:{
    fetchData(){
     var vm = this
     if (vm.$store.state.Xprofile == {} || vm.$store.state.Xprofile.id !== vm.profileData  )
     {
      getProfileData(this.$route.params.id)
      .then(function(response){
    
        vm.profileData = response.data
        vm.$store.dispatch('updateProfile',vm.profileData)
      })
     }
     else return
    }
  }
};
</script>

