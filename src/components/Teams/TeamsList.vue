<template>
  <div class="teams">
    <h1>Teams</h1>
    <el-row :gutter="20" class="teams__list">
      <el-col
        v-for="team in teams"
        class="team__card-wrapper"
        :key="team.Key"
        :xs="20"
        :sm="10"
        :md="8"
        :lg="6"
        :xl="4"
      >
        <TeamCard :team="team"/>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .teams {
    padding: 50px
  }

  .team__card-wrapper {
    padding: 10px;
  }
</style>

<script>
  import TeamCard from './TeamCard'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      TeamCard
    },
    computed: {
      ...mapGetters({
        teams: 'getTeams'
      })
    }
  }
</script>
