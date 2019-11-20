<template>
  <div>
    <v-app>
      <v-tabs  color="cyan" dark slider-color="yellow">
        <v-tab to="/page1">概要</v-tab>
        <v-tab to="/page2">基本資料</v-tab>
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