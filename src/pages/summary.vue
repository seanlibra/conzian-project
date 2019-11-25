
<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ pageData }}</h3>
  </div>
</template>
<script>
import { getSummaryData } from '@/api-data/summary.js'
import { mapState } from 'vuex'
// import Board from '@/router/main.js'
// import Axios from 'axios'
export default {
  data () {
    return {
      summaryData: {}
    }
  },
  computed: mapState({
    pageData: state => state.SummaryMod
    // 自定義名 : 狀態 = >要讀取的狀態
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
      if (vm.$store.state.SummaryMod.Xsummary.id !== this.$route.params.id) {
        // 如果現在vuex裡面的id不等於載入頁面的使用者id則執行
        getSummaryData(this.$route.params.id)
          .then(function (response) {
            vm.summaryData = response.data
            vm.$store.dispatch('updateSummary', vm.summaryData)
          })
      }
    }
  }
}
</script>
