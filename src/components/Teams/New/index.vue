<template>
  <el-container class="team__new">
    <el-header>
      <h1>New Team</h1>
    </el-header>

    <el-main>
      <Form
        :initialValues="initialValues"
        :handleSubmit="handleSubmit"
        action="Create"
      />
    </el-main>
  </el-container>
</template>

<script>
  import { mapActions } from 'vuex'
  import Form from '../Form'
  import { fields, stadiumFields, resetFields } from '../../../models/teams'

  export default {
    data() {
      return {
        teamData: {},
        initialValues: {
          team: resetFields(fields),
          stadium: resetFields(stadiumFields)
        },
        handleSubmit: (team, stadium) => {
          team.StadiumDetails = stadium

          this.addTeam(team)
          this.$router.push('/teams')
        }
      }
    },
    components: {
      Form
    },
    methods: {
      ...mapActions([
        'addTeam'
      ]),
    }
  }
</script>

<style>
  .team__new {
    padding: 50px
  }
</style>
