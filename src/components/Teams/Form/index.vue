<template>
<div>
  <el-form
    ref="team"
    :model="team"
  >
    <el-form-item v-for="key in Object.keys(fields)" :label="fields[key]">
      <el-input v-model="team[key]"/>
    </el-form-item>

    <el-divider/>
    <h3>
      Stadium
    </h3>

    <el-form
      ref="stadium"
      :model="stadium"
    >
      <el-form-item v-for="key in Object.keys(stadiumFields)" :label="stadiumFields[key]">
        <el-input v-model="stadium[key]"/>
      </el-form-item>
    </el-form>

    <el-divider/>
    <h3>
      Style
    </h3>

    <el-form-item label="Image Url">
      <el-input v-model="team.WikipediaLogoUrl"/>
    </el-form-item>

    <el-form-item label="Primary Color">
      <el-color-picker v-model="team.PrimaryColor"/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{action}}</el-button>
        <router-link to="/teams" style="padding-left: 15px">
          <el-button>
            Cancel
          </el-button>
        </router-link>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  import { fields, stadiumFields } from '../../../models/teams'

  export default {
    props:{
      initialValues: { default: { team: {}, stadium: {} } },
      handleSubmit: { default: () => {}},
      action: { default: '' }
    },
    data() {
      return {
        team: this.initialValues.team,
        stadium: this.initialValues.stadium,
        fields,
        stadiumFields
      }
    },
    methods: {
      onSubmit() {
        this.handleSubmit(this.team, this.stadium)
      }
    }
  }
</script>
