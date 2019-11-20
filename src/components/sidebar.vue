<template>
  <div>
    <v-card height="350px">
    <v-navigation-drawer v-model="drawer" permanent absolute>
      <v-toolbar flat class="transparent">
        <v-list  class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img @click="go(123)" src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title >amy</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img @click="go(456)"  src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title >bob</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img @click="go(789)" src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title >chirs</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        
      </v-toolbar>
   
       
    </v-navigation-drawer>
  </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        list:['amy','bob','chirs'],
        right: null
      }
    },
    methods:{
      go(id){
       this.$router.push(`/${id}`)
      }
    },
  }
</script>