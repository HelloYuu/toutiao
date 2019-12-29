<template>
<div class="top">
    <el-row class="layout-hesder" type="flex" justify="space-between" align="middle">
        <el-col class="left" :span="8">
             <i @click="collaspseOrOpen" :class="{'el-icon-s-unfold': collaspse,'el-icon-s-fold': !collaspse}"></i>
            <!-- <span class="title">哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</span>-->
            <a class="title" href="https://www.bilibili.com" target="_blank">哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</a>
        </el-col>
        <el-col class="right" :span="4">
            <el-row type="flex" justify="end" align="middle" style="padding-right:10px">
                <img :src="useInfo.photo?useInfo.photo:defaultImg" alt="">
                <el-dropdown @command="handle">
                    <span class="el-dropdown-link" style="color:rgb(251, 114, 153);padding-left:4px">
                      {{useInfo.name}}
                      <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="info">个人信息</el-dropdown-item>
                      <el-dropdown-item command="git">Git地址</el-dropdown-item>
                      <el-dropdown-item command="lgout" divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</div>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collaspse: false,
      useInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  created () {
    this.getUserInfo()
    eventBus.$on('updateUserInfoSuccess', () => {
      this.getUserInfo()
    })
  },
  methods: {
    collaspseOrOpen () {
      this.collaspse = !this.collaspse
      eventBus.$emit('changeCollapse')
    },
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.userInfo = result.data
      })
    },
    handle (commad) {
      if (commad === 'lgout') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://www.bilibili.com'
      } else if (commad === 'info') {
        this.$router.push('/home/account')
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .top{
        background-color: #fff;
        // background:url('../../assets/img/header.png') no-repeat ;
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
