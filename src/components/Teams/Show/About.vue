<template>
  <div>
    <div class="team__info">
      <p v-for="key in Object.keys(fields)">
        <span style="font-weight: bold">{{fields[key]}}</span>: <span>{{team[key]}}</span>
      </p>

      <el-divider/>
      <h2>
        Stadium
      </h2>

      <p v-for="key in Object.keys(stadiumFields)">
        <span style="font-weight: bold">{{stadiumFields[key]}}</span>: <span>{{team.StadiumDetails[key]}}</span>
      </p>
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
    text-align: start
  }
</style>
