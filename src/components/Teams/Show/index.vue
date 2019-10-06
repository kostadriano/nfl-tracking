<template>
  <div>
    <el-container>
      <el-header height="inherit">
        <Header :team.sync="team" />
      </el-header>
    </el-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Header from './Header'

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
      Header
    },
    created (){
      this.team = this.getTeam(this.id)
    }
  }
</script>
