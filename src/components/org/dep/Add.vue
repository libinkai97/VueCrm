<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="150px"
    class="demo-ruleForm"
  >
    <el-form-item label="部门名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="部门创建时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            type="fixed-time"
            placeholder="选择时间"
            v-model="ruleForm.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="部门描述" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { addDep, getDepById, updateDep } from "../../../api/api";
export default {
  name: "List",
  created() {
    this.id = this.$route.query.id;
    // console.log(id)
    // if(id){
    //   getDepInfo(id)
    // }
    this.id && this.getDepInfo();
  },
  data() {
    return {
      ruleForm: {
        name: "", // 部门的名字

        date1: "", // 部门创建时间之选择日期
        date2: "", // 部门创建时间之选择时间

        desc: "", // 部门描述
      },
      rules: {
        // 放数据的校验规则
        name: [
          { required: true, message: "请输入部门名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "请填写部门名称", trigger: "blur" }],
      },
    };
  },

  methods: {
    getDepInfo() {
      getDepById(this.id).then((data) => {
        // console.log(data)
        (this.ruleForm.name = data.data.name),
          (this.ruleForm.desc = data.data.desc),
          (this.ruleForm.date1 = new Date("2020-11-20")),
          (this.ruleForm.date2 = new Date("2020-11-20 20:20:20"));
      });
    },
    formateDate(date) {
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    },
    formateTime(time) {
      return time.getHours() + ":" + time.getMinutes() + ":" + time.getDate();
    },
    //创建部门
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 只有校验通过了，才进行提交
          this.id
            ? updateDep({
                departmentId:this.id,
                name: this.ruleForm.name,
                desc: this.ruleForm.desc,
                time:
                  this.formateDate(this.ruleForm.date1) +
                  " : " +
                  this.formateTime(this.ruleForm.date2),
              }).then((data) => {
                // console.log(data);
                if (data.code == 0) {
                  this.$message({
                    message: "恭喜你，更新部门成功~",
                    type: "success",
                  });
                  this.$router.push("/org/depList");
                } else {
                  this.$message.error("更新部门失败");
                }
              })
            : addDep({
                name: this.ruleForm.name,
                desc: this.ruleForm.desc,
                time:
                  this.formateDate(this.ruleForm.date1) +
                  " : " +
                  this.formateTime(this.ruleForm.date2),
              }).then((data) => {
                console.log(data);
                if (data.code == 0) {
                  this.$message({
                    message: "恭喜你，创建部门成功~",
                    type: "success",
                  });
                  this.$router.push("/org/depList");
                } else {
                  this.$message.error("创建部门失败");
                }
              });
        } else {
          console.log("套你猴子");
          return false;
        }
      });
    },
    //重置
    resetForm(formName) {
      this.$refs[formName].resetFileds();
    },
  },
};
</script>