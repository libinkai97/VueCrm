<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <h1>CRM管理系统</h1>
        <div class="middle">
          <router-link to="/crm" active-class="currnt">客户管理</router-link>
          <router-link to="/org" active-class="currnt">组织管理</router-link>
        </div>
        <div class="right">
          欢迎你：{{userInfo.userName}}
          <span @click="logout">安全退出</span>
        </div>
      </el-header>
      <router-view></router-view>
      <el-footer>vue练手项目</el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { logout } from "../api/api"
export default {
  name: 'Home',
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    ...mapMutations(["setUserInfo"]),
    logout(){
      logout().then(data=>{
        // console.log(data)
        if(data.code==0){
          //清空localStore中的数据
          localStorage.removeItem("crmUserInfo")
          //清空vuex中的数据
          this.setUserInfo({});
          //跳到登录界面
          this.$router.push("/login")
        }
      })
    }
  },
  components: {
  }
}
</script>

<style lang="less">
  .header{
    display: flex;
    background-color: #333333;
    color: #ffffff;
    h1{
      width: 200px;
      text-align: center;
      margin-left: -20px;
    }
    .middle{
      flex: auto;
      text-align: left;
      padding-left: 50px;
      a{
        color: #fff;
        padding: 0 10px;
        font-weight: bold;
        text-decoration: none;
        font-size: 20px;
      }
      a.currnt{
        color: salmon;
      }
    }
    .right{
      width: 200px;
    }
  }


  .el-footer{
    background-color: #333333;
    color: #ffffff;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 40px !important;
    line-height: 40px;
    text-align: center;
  }

  .el-header{
    text-align: center;
    line-height: 60px;
    height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }


</style>
