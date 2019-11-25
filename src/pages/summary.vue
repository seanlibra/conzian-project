
<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ pageData }}</h3>
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
  computed: mapState({
    pageData: state => state.Xsummary
  }),
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
      if (vm.$store.state.Xsummary.id !== this.$route.params.id) {
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
