<template>
  <div class="d-flex">
    <Tab/>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import Tab from '../components/tab'
import sidebar from '../components/sidebar'

export default {
  name: 'Board',
  components: {
    Tab,
    sidebar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
