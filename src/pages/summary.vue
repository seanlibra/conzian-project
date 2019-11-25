
<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ this.$store.state.Xsummary }}</h3>
  </div>
</template>
<script>
import { getSummaryData } from '@/api-data/summary.js'
import { mapState } from 'vuex'
// import Axios from 'axios'
export default {
  data () {
    return {
      summaryData: {}
    }
  },
  computed: {
    
  },
  watch: {
    '$route.params.id': function () {
      this.fetchData()
    }
  },
  created () {
    this.summaryData = {
    }
    this.fetchData()
  },
  methods: {
    fetchData () {
      var vm = this
      if (vm.$store.state.Xsummary.id === '') {
        getSummaryData(this.$route.params.id)
          .then(function (response) {
            vm.summaryData = response.data
            vm.$store.dispatch('updateSummary', vm.summaryData)
          })
      // eslint-disable-next-line no-useless-return
      } else return
    }
  }
}
</script>
