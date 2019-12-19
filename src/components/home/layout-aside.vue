<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <el-menu style="border: none" background-color="#9ed9ec" text-color="#fff" active-text-color="#f25d8e">
      <el-menu-item>首页内容</el-menu-item>
      <el-submenu>
          <template slot="title">内容管理</template>
            <el-menu-item>发布内容</el-menu-item>
            <el-menu-item>内容列表</el-menu-item>
            <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
          <template slot="title">粉丝管理</template>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>账户信息</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-aside {
  width: 220px;
  .title {
    text-align: center;
    background-color: rgb(158, 217, 236);
    padding: 10px 0;
    img{
      height: 55px;
    }
  }
}
</style>>
