<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ this.$store.state.Xdaymove }}</h3>
  </div>
</template>


<script>
import { getDayMoveData } from '@/api-data/daymove.js'
export default {
  
  data() {
    return {
     dayMoveData:{},
    }
  },
  watch:{
    '$route':function(){
      this.fetchData()
      this.$store.dispatch('cleandata',{})
    } 
  },
  created(){
    this.fetchData()
  },
  methods:{
    fetchData () {
     var vm = this
     if (vm.$store.state.Xdaymove == {} || vm.$store.state.Xdaymove.id !== vm.dayMoveData  )
    //  這邊有個BUG因為要判斷切換使用者的行為需要監聽vm.本地data但是在切換頁面時vm.data會destory所以會跳錯
    // 而使用id則能達到這個效果
     {
      getDayMoveData(this.$route.params.id)
      .then(function(response){
        console.log(response.data)
        vm.dayMoveData = response.data
        vm.$store.dispatch('updateDaymove',vm.dayMoveData)
        
      })
     }
     else return
    }
  }
};
</script>