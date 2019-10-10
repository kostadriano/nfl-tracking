<template>
  <div class="team__info">
    <p v-for="key in Object.keys(fields)" v-if="team[key]">
      <span style="font-weight: bold">{{fields[key]}}</span>: <span>{{team[key]}}</span>
    </p>

    <el-divider/>
    <h2>
      Stadium
    </h2>

    <p v-for="key in Object.keys(stadiumFields)" v-if="team.StadiumDetails[key]">
      <span style="font-weight: bold">{{stadiumFields[key]}}</span>: <span>{{team.StadiumDetails[key]}}</span>
    </p>

    <div v-if="team.isUserTeam">
      <router-link :to="`/teams/${team.Key}/edit`">
        <el-button type="primary">
          Edit
        </el-button>
      </router-link>

      <el-button style="margin-left: 15px"> Delete </el-button>
    </div>
  </div>
</template>

<script>
  import { fields, stadiumFields } from '../../../models/teams';

  export default {
    data() {
      return {
        fields,
        stadiumFields
      }
    },
    props: {
      team: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style>
  .team__info {
    text-align: start;
    padding: 0 20px 20px
  }
</style>
