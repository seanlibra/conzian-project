
<template>
  <div>
    <p>目前的病人ID:{{ $route.params.id }}</p>
    <h4><button @click="showDiagLog()">病人ID:{{ pageData.Xsummary.id }}</button></h4>
    <h4>病人詳細資料:{{ pageData.Xsummary.value }}</h4>
    <h4>目前頁面:{{ pageData.Xsummary.page }}</h4>
    <win
      v-model="open"
      :user-data="summaryData"
      @backstate="backStateData()"
      @openEdit="showEdit()"/>
    <br>
    <edit
      :user-value="summaryData.value"
      :open-edit-key="openEdit"
      @sendData="afterData"/>
  </div>
</template>
<script>
import { getSummaryData } from '@/api-data/summary.js'
import { mapState } from 'vuex'
import win from '../components/dialog'
import edit from '../components/edit'
export default {
  components: {
    win,
    edit
  },
  data () {
    return {
      summaryData: {
        value: ''
      },
      open: false,
      openEdit: false,
      valueFromEdit: ''
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
    },
    backStateData () {
      this.open = false
    },
    showEdit () {
      console.log(this.openEdit)
      this.openEdit = !this.openEdit
    },
    afterData (Value) {
      console.log('this is from parent', Value)
      this.summaryData.value = Value
    }
  }
}
</script>
