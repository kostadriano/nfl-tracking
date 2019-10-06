<template>
  <div>
    <el-container>
      <el-header height="inherit">
        <Header :team.sync="team" />
      </el-header>
      <el-main>
        <el-tabs>
          <el-tab-pane label="About">
            <About :team.sync="team"/>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
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
