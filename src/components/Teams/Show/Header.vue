<template>
  <div class="team__header"
    :style="`background: #${team.PrimaryColor};`"
  >
    <div
      class="team__avatar_wrapper"
    >
      <el-image
        class="team__avatar"
        :src="team.WikipediaLogoUrl"
        fit="scale-down"
      />
    </div>

    <h1 class="team__title">
      {{team.FanDuelName}}
    </h1>
  </div>
</template>

<script>
  export default {
    props: {
      team: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style>
  .team__avatar_wrapper {
    height: 100px;
    width: 100px;
    padding: 20px;
  }

  .team__avatar {
    height: 100%
  }

  .team__title {
    font-weight: 800;
    color: #FAFAFA;
    margin: 0;
    padding: 0;
  }

  .team__header{
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
</style>
