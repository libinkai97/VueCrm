<template>
    <div class="login_box">
        <div class="content">
            <h1>CRM管理系统</h1>
            <el-input placeholder="请输入用户名" v-model="account">
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
            <el-input placeholder="请输入密码" v-model="password">
                <i slot="prefix" class="el-input__icon el-icon-tickets"></i>
            </el-input>
            <el-button type="primary" @click="loginF">登录</el-button>
        </div>
    </div>
</template>

<script>
import { login,getUserInfo } from '../api/api';
import md5 from 'md5';
import { mapMutations } from 'vuex';
    export default {
        name: "Login",
        data(){
            return{
                account:"",
                password:"",
            }
        },
        methods:{
            ...mapMutations(["setUserInfo"]),
            loginF(){
                login({account:this.account,password:md5(this.password)}).then(data=>{
                    if(data.code == 0){
                        getUserInfo().then(userInfo=>{
                            if(userInfo.code ==0){
                                this.setUserInfo({userName:userInfo.data.name,power:data.power})
                                localStorage.setItem("crmUserInfo",JSON.stringify({userName:userInfo.data.name,power:data.power}))
                                this.$message({
                                    message:"登录成功~",
                                    type:"success"
                                })
                                //跳到后台首页面
                                this.$router.push("/")
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .login_box{
        width: 100%;
        height: 100%;
        background-color: #eee;
        .content{
            width: 500px;
            height: 300px;
            padding-top: 30px;
            border-radius: 20px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -150px;
            margin-left: -250px;
            h1{
                text-align: center;
            }
            .el-input{
                width: 60%;
                margin: 30px auto 0;
                display: block;
            }
            button{
                display: block;
                width: 60%;
                margin: 30px auto;
            }
        }
    }
</style>








