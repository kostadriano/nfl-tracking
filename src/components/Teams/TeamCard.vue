<template>
  <el-card class="team" shadow="hover" :title="team.FanDuelName">
    <img v-bind:src="team.WikipediaLogoUrl" class="team__logo">
    <div class="team__info">
      <span class="team__name">{{team.FanDuelName}}</span>
    </div>
  </el-card>
</template>

<style>
  .team {
    height: 100%;
    cursor: pointer;
    border-radius: 5px;
  }

  .team__logo {
    display: block;
    width:  150px;
    height: 150px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
  }

  .team__info {
    margin: 10px auto;
  }

  .team__name {
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
