<template>
  <div class="layout-aside">
    <div class="title">
      <img :src="collaspse ? smallImg : bigImg" alt="">
    </div>
    <el-menu :collapse="collaspse" :router="true" style="transition:all 0.3s; border: none;font-size: 80px;" background-color="#fff" text-color="#000" active-text-color="#f25d8e">
      <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span>首页内容</span>
      </el-menu-item>
      <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>内容管理</span>
          </template>
            <el-menu-item index="/home/publish">发布内容</el-menu-item>
            <el-menu-item index="/home/articles">内容列表</el-menu-item>
            <el-menu-item index="/home/comment">评论列表</el-menu-item>
            <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-comment"></i>
            <span>粉丝管理</span>
          </template>
          <el-menu-item index="/home/picture">图文数据</el-menu-item>
          <el-menu-item index="/home/fansinfo">粉丝画像</el-menu-item>
          <el-menu-item index="/home/fanslife">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-s-custom"></i>
        <span>账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['collaspse'],
  data () {
    return {
      bigImg: require('../../assets/img/logo.png'),
      smallImg: require('../../assets/img/toutiao.png')
    }
  }
}
</script>

<style lang="less" scoped>
.layout-aside {

  .el-menu{
    border-right: none;
  }
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
