<template>
<div class="login">
<el-card class="loginbox">
    <div class="title">
        <img src="../../assets/img/logo_admin.png" alt="hehe">
    </div>

    <el-form>
        <el-form-item>
            <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input style="width:70%" placeholder="请输入验证码"></el-input>
            <el-button plain style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="success" style="width:100%">登录</el-button>
        </el-form-item>
    </el-form>

</el-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login{
    background-image: url('../../assets/img/login_bg.jpg');
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .loginbox{
        width: 580px;
        height: 350px;
        background-color: rgba(255, 255, 255, 0.3);
        border: none;
        .title{
            display: flex;
            justify-content: center;
                img{
                    margin-bottom: 20px;
                }
        }

    }
}
</style>
