<template>
    <el-table
            :data="tableData"
            style="width: 100%"
            :border='true'
            :stripe='true'
            max-height="450">
        <el-table-column
                type='index'
                :index='indexFn'
                label="编号"
                width="120">
        </el-table-column>
        <el-table-column
                prop="name"
                label="名称"
                width="200">
        </el-table-column>
        <el-table-column
                prop="desc"
                align='center'
                label="描述"
        >
        </el-table-column>
        <el-table-column

                label="操作"
                width="150">
            <template slot-scope="obj">
                <!-- qqq 对应的是 当前这一行所对应的那一条数据 -->
                <el-button
                        @click=""
                        type="default"
                        @click="edit(obj)"
                        size="small">
                    编辑
                </el-button>
                <el-button
                        @click=""
                        type="danger"
                        @click="deleteRow(obj)"
                        size="small">
                    移除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import { getDepList,removeDeg } from "../../../api/api"
    export default {
        name: "List",
        data(){
            return{
                tableData:[],
            }
        },
        methods:{
            indexFn(n){
                return n+1;
            },
            edit(obj){
                // console.log(obj)
                this.$router.push({path:"/org/depAdd",query:{id:obj.row.id}})
            },
            deleteRow(obj){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // 点击确定
                    removeDeg(obj.row.id).then(data=>{
                        if(data.code == 0){
                            this.tableData.splice(obj.$index,1)
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    })
                }).catch(() => {
                    // 点击消失
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        // 有两个地方，可以发起ajax请求，一个是created，一个是mounted
        created() {
            getDepList().then(data=>{
                // console.log(data);
                this.tableData = data.data;
            })
        }
    }
</script>

<style scoped>

</style>
