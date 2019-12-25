<template>
  <el-card class="articles">
      <bread-crumb slot="header">
      <template slot="title">内容列表</template>
      </bread-crumb>

      <el-row class="searchTool">
        <el-col :span="3">
          <span>文章状态 :</span>
        </el-col>
        <el-col :span="18">
          <el-radio-group>
            <el-radio>全部</el-radio>
            <el-radio>草稿</el-radio>
            <el-radio>待审核</el-radio>
            <el-radio>审核通过</el-radio>
            <el-radio>审核失败</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-row class="searchTool">
        <el-col :span="3">
          <span>频道列表 :</span>
        </el-col>
          <el-col :span="18">
            <el-select  placeholder="请选择">
            <el-option label="开发者资讯" value="1"></el-option>
            <el-option label="iOS" value="1"></el-option>
            <el-option label="C++" value="1"></el-option>
            <el-option label="Android" value="1"></el-option>
          </el-select>
        </el-col>
      </el-row>

      <el-row class="searchTool">
        <el-col :span="3">
          <span>时间选择 :</span>
        </el-col>
        <el-col :span="18">
          <div class="1">
            <el-date-picker
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-col>

      </el-row>
  </el-card>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.articles{
  .searchTool{
    height: 60px;
    margin-left: 30px;
  }
}
</style>
