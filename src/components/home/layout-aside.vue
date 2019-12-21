<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <el-menu :router="true" style="border: none;font-size: 80px;" background-color="#fff" text-color="#000" active-text-color="#f25d8e">
      <el-menu-item index="/home">首页内容</el-menu-item>
      <el-submenu index="1">
          <template slot="title">内容管理</template>
            <el-menu-item index="/home/publish">发布内容</el-menu-item>
            <el-menu-item index="/home/articles">内容列表</el-menu-item>
            <el-menu-item index="/home/comment">评论列表</el-menu-item>
            <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title">粉丝管理</template>
          <el-menu-item index="/home/picture">图文数据</el-menu-item>
          <el-menu-item index="/home/fansinfo">粉丝画像</el-menu-item>
          <el-menu-item index="/home/fanslife">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
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
    background-color:#fff;
    padding: 15px 0;

    img{
      height: 55px;
    }
  }
}
</style>>
