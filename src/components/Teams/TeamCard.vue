<template>
  <el-card class="team-card" shadow="hover" :title="team.FanDuelName">
    <img v-bind:src="team.WikipediaLogoUrl" class="team-card__logo">

    <div class="team-card__name">
      {{team.FanDuelName}}
    </div>
  </el-card>
</template>

<style>
  .team-card {
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
  }

  .team-card__logo {
    display: block;
    width:  150px;
    height: 150px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
  }

  .team-card__name {
    margin: 15px auto;
    font-weight: bold
  }
</style>

<script>
  export default {
    props:{
      team:{
        type: Object,
        default: () => {}
      }
    }
  }
</script>
