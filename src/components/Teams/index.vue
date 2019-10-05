<template>
  <body>
    <Teamlist :loading.sync="loading" :teams.sync="teams"/>
  </body>
</template>

<script>
  import Teamlist from './TeamsList'
  import * as TeamRepository from '../../repositories/TeamRepository'

  export default {
    data: () => ({
      loading: true,
      teams: []
    }),
    created() {
      this.fetchTeams();
    },
    methods: {
      async fetchTeams() {
        this.teams = await TeamRepository.getAllTeams();
        this.loading = false;
      },
    },
    components:{
      Teamlist
    }
  }
</script>

