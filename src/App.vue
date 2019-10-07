<template>
  <div id="app">
    <el-menu :router="true" class="el-menu-demo" :default-active="activeLink" mode="horizontal">
      <el-menu-item index="/teams">Teams</el-menu-item>
    </el-menu>
    <div v-loading="true" v-if="loading" />
    <router-view v-else />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        loading: true,
        activeLink: null
      }
    },
    mounted () {
      this.activeLink = this.$route.path
    },
    watch: {
      $route (newVal, oldVal) {
        this.activeLink = newVal.path
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
