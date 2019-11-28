<template>
  <v-dialog
    v-model="openValue"
    persistent
    max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">修改資料</span>
      </v-card-title>
      <v-card-text/>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              v-model="compUserValue"
              label="value"
              type="text"
            />
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text/>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="blue darken-1"
          flat
          @click="cancelEdit() ">取消</v-btn>
        <v-btn
          color="blue darken-1"
          flat
          @click="sendTheData()"
        >送出</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: {
    userValue: {
      type: String,
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
      NewValue: ''
    }
  },
  computed: {
    openValue: {
      get () {
        return this.dialog
      },
      set (val) {
        this.dialog = val
      }
    },
    compUserValue: {
      get () {
        return this.userValue
      },
      set (val) {
        this.NewValue = val
      }
    }
  },
  watch: {
    value: function () {
      this.dialog = !this.dialog
    }
  },
  methods: {
    cancelEdit () {
      this.NewValue = this.userValue
      this.openValue = false
    },
    sendTheData () {
      this.$emit('sendData', this.NewValue)
      this.openValue = false
    }
  }
}
</script>
