<template>
  <div class="login">
    <el-card class="loginbox">
      <div class="title">
        <img src="../../assets/img/logo_admin.png" alt="hehe" />
      </div>

      <el-form ref="myForm" :model="loginForm" :rules="loginRules">

        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:70%" placeholder="请输入验证码"></el-input>
          <el-button plain style="float:right">发送验证码</el-button>
        </el-form-item>

        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已阅读并同意
              <el-link type="primary">用户协议</el-link>和
              <el-link type="primary">隐私条款</el-link>
            </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" style="width:100%" @click="onSubmit" >登录</el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      loginRules: {
        mobile: [{ required: true, message: '呵呵' },
          { pattern: /^1[3456789]\d{9}$/, message: 'hehe' }
        ],
        code: [{ required: true, message: '哈哈' },
          { pattern: /^\d{6}$/, message: 'haha' }
        ],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('同意吗？'))
          }
        } }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '不对呦',
              type: 'warning'
            })
          })
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/login_bg0.png");
  height: 100vh;
  // display: flex;
  // // justify-content: center;
  // align-items: center;
  .loginbox {
    width: 580px;
    height: 350px;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    float: right;
    margin-top: 230px;
    margin-right: 100px;
    .title {
      display: flex;
      justify-content: center;
      img {
        margin-bottom: 10px;
        height: 80px;

      }
    }
  }
}
</style>
