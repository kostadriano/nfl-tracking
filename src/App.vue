<template>
  <div id="app" v-loading="loading">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        loading: true
      }
    },
    async created() {
      await this.getTeams()
      this.loading = false
    },
    methods: {
      ...mapActions([
        'getTeams'
      ]),
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>
