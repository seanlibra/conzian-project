<template>
  <div>
    <v-app style="margin:0;">
      <v-tabs  color="cyan" dark slider-color="yellow">
        <v-tab :to="{name:'summary',params:id}">概要</v-tab>
        <v-tab :to="{name:'profile',params:id}">基本資料</v-tab>
        <v-tab>每日動作</v-tab>
      </v-tabs>
      <router-view></router-view>
      <div class="text-xs-center mt-3">
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "tab-bar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>