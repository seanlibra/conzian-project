<template>
  <div>
    <v-card height="350px">
    <v-navigation-drawer v-model="drawer" permanent absolute>
      <v-toolbar flat class="transparent">
        <v-list  class="pa-0">
          <v-list-tile avatar v-for='item in list' :key="item.id"  >
            <v-list-tile-avatar>
              <img @click="getDetail(item.id)" :src="item.bg" class="mymouse" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title >{{item.name}}</v-list-tile-title>
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
        list:[
        {id:1234555,name:'Amy',bg:'https://randomuser.me/api/portraits/women/50.jpg'},
        {id:4567888,name:'Bob',bg:'https://randomuser.me/api/portraits/men/51.jpg'},
        {id:7654321,name:'Chirs',bg:'https://randomuser.me/api/portraits/men/6.jpg'}],
        right: null
      }
    },
    methods:{
      getDetail(id){
       this.$router.push(`/user/${id}/summary`)
      }
    },
  }
</script>

<style scoped>
.mymouse{
   cursor: pointer;
 }
</style>