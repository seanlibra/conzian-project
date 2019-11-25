<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ pageData }}</h3>
  </div>
</template>
<script>
import { getDayMoveData } from '@/api-data/daymove.js'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dayMoveData: {}
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.DayMoveMod
    })
  },
  watch: {
    '$route.params.id': function () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var vm = this
      if (vm.$store.state.DayMoveMod.Xdaymove.id !== vm.$route.params.id) {
        getDayMoveData(this.$route.params.id)
          .then(function (response) {
            vm.dayMoveData = response.data
            vm.$store.dispatch('updateDaymove', vm.dayMoveData)
          })
      }
    }
  }
}
</script>
