<template>
  <div id="app" v-loading="loading">
    <Teams />
  </div>
</template>

<script>
  import Teams from './components/Teams'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        loading: true
      }
    },
    components: {
      Teams
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
