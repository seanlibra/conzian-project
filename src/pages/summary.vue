
<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h4><button @click="showDiagLog()">{{ pageData.Xsummary.id }}</button></h4>
    <h4>{{ pageData.Xsummary.value }}</h4>
    <h4>{{ pageData.Xsummary.page }}</h4>
    <win
      v-model="summaryData"
      :open-value="open"/>
  </div>
</template>
<script>
import { getSummaryData } from '@/api-data/summary.js'
import { mapState } from 'vuex'
import win from '../components/dialog'
export default {
  components: {
    win
  },
  data () {
    return {
      summaryData: {},
      open: true
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
    },
    showDiagLog () {
      this.open = (!this.open)
    }
  }
}
</script>
