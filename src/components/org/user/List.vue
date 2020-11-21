<template>
    <div>
        <div class="filterBox">
            <el-select v-model="value" placeholder="请选择部门">
                <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2">
            </el-input>
        </div>
        <el-table :data="tableData" border max-height="400" style="width: 100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column label="性别" width="100">
                <template slot-scope="obj">
                    <strong>男</strong>
                </template>
            </el-table-column>
            <el-table-column prop="department" label="部门" width="100"></el-table-column>
            <el-table-column prop="job" label="职务" width="100"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="100"></el-table-column>
            <el-table-column prop="phone" label="电话" width="100"></el-table-column>
            <el-table-column prop="desc" label="描述" width="180"></el-table-column>
            <el-table-column
                    label="操作"
                    width="150">
                <!--obj 代表当前这一行的数据 -->
                <template slot-scope="obj">
                    <el-button
                            @click=""
                            type="default"
                            @click=""
                            size="small">
                        编辑
                    </el-button>
                    <el-button
                            @click=""
                            type="danger"
                            @click=""
                            size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import { getDepList,getUserList } from "../../../api/api"
    export default {
        name: "List",
        created(){
            //获取部门信息
            getDepList().then(data=>{
                // console.log(data)
                if(data.code == 0){
                    let ary = data.data
                    ary.unshift({
                        id:0,
                        name:"全部"
                    })
                    this.options = ary
                }
            })
            //获取员工信息
            this.getUserList()
        },
        data(){
            return{
                value:"",  // 选择的部门
                options: [],  // 下拉菜单 中的部门列表
                input2:"",  // 搜索框中的输入的内容
                tableData:[], // 表格的数据源
            }
        },
        watch:{
            value(val){
                getUserList({departmentId:this.value,search:this.input2}).then(data=>{
                    if(data.code==0){
                        this.tableData = data.data
                    }
                })
            },
            input2(val){
                getUserList({departmentId:this.value,search:this.input2}).then(data=>{
                    if(data.code==0){
                        this.tableData = data.data
                    }
                })
            },
        },
        methods:{
            getUserList(){
                getUserList().then(data=>{
                    // console.log(data)
                    if(data.code==0){
                        this.tableData = data.data
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.filterBox{
    text-align: right;
    margin-bottom: 30px;
    .el-input{
        width: auto;
        margin-left: 20px;
    }
}
</style>