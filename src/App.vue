<template>
  <div >
    
    <div id="app">
          <appheader></appheader>
          <router-view></router-view>
          <appfooter></appfooter>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    appheader:header,
    appfooter:footer
    // AddNewsfeed,
    // ListNewsfeed
  }
}
</script>

<style>

</style>
