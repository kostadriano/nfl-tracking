<template>
  <el-container class="team__new">
    <el-header>
      <h1>Edit Team</h1>
    </el-header>

    <el-main>
      <Form
        :initialValues.sync="initialValues"
        :handleSubmit="handleSubmit"
        action="Update"
      />
    </el-main>
  </el-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Form from '../Form'

  export default {
    created (){
      const team = this.getTeam(this.id)
      this.initialValues = {team, stadium: team.StadiumDetails}
    },
    data() {
      return {
        initialValues: {
          team: {},
          stadium: {}
        },
        handleSubmit: (team, stadium) => {
          team.StadiumDetails = stadium

          this.updateTeam({ id: team.id, team })
          this.$router.push(`/teams/${team.Key}`)
        }
      }
    },
    components: {
      Form
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
    methods: {
      ...mapActions([
        'updateTeam'
      ]),
    }
  }
</script>

<style>
  .team__new {
    padding: 50px
  }
</style>
