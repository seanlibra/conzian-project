<template>
  <div>
    <v-app style="margin:0;">
      <v-tabs
        color="cyan"
        dark
        slider-color="yellow">
        <v-tab :to="{name:'summary',params:{id:backID }}">概要</v-tab>
        <v-tab :to="{name:'profile',params:{id:backID }}">基本資料</v-tab>
        <v-tab :to="{name:'daymove',params:{id:backID}}">每日動作</v-tab>
      </v-tabs>
      <router-view/>
    </v-app>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  computed: {
    backID: function () {
      return this.$route.params.id ? this.$route.params.id : '1234'
    }
  }
}
</script>
