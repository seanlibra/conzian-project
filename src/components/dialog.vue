<template>
  <v-dialog
    v-model="switchData"
    max-width="400">
    <v-card>
      <v-card-title class="headline">預覽</v-card-title>
      <p>病人ID:</p>
      <p>{{ userData.id }}</p>
      <p>詳細資料</p>
      <p> {{ userData.value }} </p>
      <p>目前頁面</p>
      <p>{{ userData.page }}</p>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="$emit('backstate')"
        >關閉
          <!--it can resolve by v-model-->
        </v-btn>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="$emit('openEdit')"
        >修改
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false,
      summaryData: {}
    }
  },
  computed: {
    switchData: {
      get () {
        return this.dialog
      },
      set (val) {
        this.dialog = val
        this.$emit('backstate')
      }
    }
  },
  watch: {
    value: function () {
      this.dialog = this.value
    }
  }
}
</script>
