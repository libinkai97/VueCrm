<template>
    <div>
        <el-container class="container">
            <el-aside width="200px">
                <el-col>
                    <el-menu
                            default-active="2"
                            class="my-menu"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-operation"></i>
                                <span>部门管理</span>
                            </template>
                            <router-link to="/org/depList">
                                <el-menu-item index="1-1">部门列表</el-menu-item>
                            </router-link>
                            <router-link to="/org/depAdd">
                                <el-menu-item index="1-2">新增部门</el-menu-item>
                            </router-link>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-receiving"></i>
                                <span>职务管理</span>
                            </template>
                            <router-link to="/org/jobList">
                                <el-menu-item index="2-1">职务列表</el-menu-item>
                            </router-link>
                            <router-link to="/org/jobAdd">
                                <el-menu-item index="2-2">新增职务</el-menu-item>
                            </router-link>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-s-custom"></i>
                                <span>员工管理</span>
                            </template>
                            <router-link to="/org/userList">
                                <el-menu-item index="3-1">员工列表</el-menu-item>
                            </router-link>
                            <router-link to="/org/userAdd">
                                <el-menu-item index="3-2">新增员工</el-menu-item>
                            </router-link>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="less">
.container{
    position: absolute;
    top: 60px;
    bottom: 40px;
    width: 100%;
    .el-aside{
        overflow: hidden;
        height: 100%;
        .el-col{
            height: 100%;
            ul{
                height: 100%;
                width: 110%;
                overflow-y: scroll;
                overflow-x: hidden;
            }
        }
        .my-menu{
            a{
                text-decoration: none;
            }
         }
    }

}
</style>
