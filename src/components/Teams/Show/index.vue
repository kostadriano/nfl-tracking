<template>
  <el-container class="team__show">
    <el-header height="inherit" class="team__show-header">
      <Header :team.sync="team" />
    </el-header>
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane label="About">
          <About :team.sync="team"/>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Header from './Header'
  import About from './About'

  export default {
    data() {
      return {
        team: null
      }
    },
    computed: {
      ...mapGetters({
        getTeam: 'getTeam'
      })
    },
    props: {
      id: {
        type: String,
        default: null
      }
    },
    components: {
      Header,
      About
    },
    created (){
      this.team = this.getTeam(this.id)
    }
  }
</script>

<style>
  .team__show {
    padding: 20px 40px 40px
  }

  .team__show-header {
    padding: 0
  }
</style>
