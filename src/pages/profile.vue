<template>
  <div>
    <p>目前的使用者ID:{{ $route.params.id }}</p>
    <h3>{{ pageData }}</h3>
  </div>
</template>
<script>
import { getProfileData } from '@/api-data/profile.js'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      profileData: {}
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.ProfileMod
    })
  },
  watch: {
    '$route.params.id': function () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var vm = this
      if (vm.$store.state.ProfileMod.Xprofile.id !== vm.$route.params.id) {
        getProfileData(this.$route.params.id)
          .then(function (response) {
            vm.profileData = response.data
            vm.$store.dispatch('updateProfile', vm.profileData)
          })
      }
    }
  }
}
</script>
