<template>
<div class="top">
    <el-row class="layout-hesder" type="flex" justify="space-between" align="middle">
        <el-col class="left" :span="8">
            <i class="el-icon-s-unfold"></i>
            <!-- <span class="title">哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</span>-->
            <a class="title" href="https://www.bilibili.com" target="_blank">哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</a>
        </el-col>
        <el-col class="right" :span="4">
            <el-row type="flex" justify="end" align="middle" style="padding-right:10px">
                <img :src="useInfo.photo?useInfo.photo:defaultImg" alt="">
                <el-dropdown>
                    <span class="el-dropdown-link" style="color:rgb(251, 114, 153);padding-left:4px">
                      {{useInfo.name}}
                      <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>个人信息</el-dropdown-item>
                      <el-dropdown-item>Git地址</el-dropdown-item>
                      <el-dropdown-item divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      useInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  created () {
    let token = window.localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.useInfo = result.data.data
    })
  }
}
</script>

<style lang="less" scoped>
    .top{
        background-color: #fff;

        .layout-hesder{
            height: 55px;
            padding: none;
            padding-left: 10px;
        .left{
            font-size: 22px;
            color: rgb(251, 114, 153) ;
            .title{
                font-size: 20px;
                margin-left: 4px;
            }
        }
        .right{
            img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
        }
    }
}
</style>
