<template>
  <div>
    <v-app style="margin:0;">
      <v-tabs
        color="cyan"
        dark
        slider-color="yellow">
        <v-tab :to="{name:'summary',params:$route.params.id}">概要</v-tab>
        <v-tab :to="{name:'profile',params:$route.params.id}">基本資料</v-tab>
        <v-tab :to="{name:'daymove',params:$route.params.id}">每日動作</v-tab>
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
  }
}
</script>
