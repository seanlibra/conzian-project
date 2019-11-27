<template>
  <v-layout
    row
    justify-center>
    <v-dialog
      v-model="keyValue"
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
                v-model="innerValue"
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
  </v-layout>
</template>

<script>

export default {
  props: {
    userValue: {
      type: String,
      required: true
    },
    openEditKey: {
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
    keyValue: {
      get () {
        return this.dialog
      },
      set (val) {
        this.dialog = val
      }
    },
    innerValue: {
      get () {
        return this.userValue
      },
      set (val) {
        this.NewValue = val
        console.log(this.NewValue)
      }
    }
  },
  watch: {
    openEditKey: function () {
      this.dialog = !this.dialog
    }
  },
  methods: {
    cancelEdit () {
      this.NewValue = this.userValue
      this.keyValue = false
    },
    sendTheData () {
      this.$emit('sendData', this.NewValue)
      this.keyValue = false
    }
  }

}
</script>
