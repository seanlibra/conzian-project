<template>
  <div>
    <v-card height="350px">
      <v-navigation-drawer
        v-model="drawer"
        permanent
        absolut>
        <v-toolbar
          flat
          class="transparent">
          <v-list class="pa-0">
            <v-list-tile
              v-for="item in userlist"
              :key="item.id"
              avatar
              class="mymouse"
              @click="getDetail(item.id,$route.name)">
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/women/50.jpg" >
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
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
      userlist: [],
      drawer: true,
      right: null
    }
  },
  created () {
    const axios = require('axios').default
    var vm = this
    axios.get('https://i1qfr4wu4i.execute-api.us-east-1.amazonaws.com/dev/d1/list')
      .then(function (response) {
        vm.userlist = response.data
        if (vm.$route.name === 'board') {
          vm.$router.push(`/user/${vm.userlist[0].id}/summary`)
        }
      })
  },
  methods: {
    getDetail (id, name) {
      if (this.$route.params.id === id) {
        return
      }
      this.$router.push(`/user/${id}/${name}`)
    }
  }
}
</script>

<style scoped>
.mymouse {
  cursor: pointer;
}
</style>
