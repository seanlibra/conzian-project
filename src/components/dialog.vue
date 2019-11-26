/* eslint-disable vue/require-prop-types */
<template>
  <div>
    <v-app>
      <v-layout
        row
        justify-center>
        <v-dialog
          v-model="dialog"
          max-width="290">
          <v-card>
            <v-card-title class="headline">預覽</v-card-title>
            <p>使用者ID:</p>
            <input :value="value.id">
            <p>Value</p>
            <input
              :value="value.value">
            <p>Page</p>
            <input :value="value.page">
            <v-card-actions>
              <v-spacer/>
              <v-btn
                color="green darken-1"
                flat="flat"
                @click.native="dialog = false">修改</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-app>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    openValue: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  created () {
  },
  methods: {

  }
}
</script>
