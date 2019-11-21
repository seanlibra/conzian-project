<template>
  <div id="app">
    <v-container grid-list-md>
      <v-layout 
        row 
        wrap>
        <v-flex 
          d-flex 
          md4>
          <sidebar />
        </v-flex>
        <v-flex 
          d-flex 
          md8>
          <router-view />
        </v-flex>
      </v-layout>
     
    </v-container>
  </div>
</template>

<script>
import sidebar from "./components/sidebar";

export default {
  name: "App",
  components: {
    sidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
