<template>
    <div>
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
                                    <i class="el-icon-s-custom"></i>
                                    <span>客户管理</span>
                                </template>
                                <router-link to="/crm/customList">
                                    <el-menu-item index="1-1">客户列表</el-menu-item>
                                </router-link>
                                <router-link to="/crm/customAdd">
                                    <el-menu-item index="1-2">新增客户</el-menu-item>
                                </router-link>
                                <router-link to="/crm/upload">
                                    <el-menu-item index="1-3">批量上传</el-menu-item>
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
    </div>
</template>

<script>
    export default {
        name: "Crm",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
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
