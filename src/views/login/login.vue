<template>
<div class="container">
   <div class="contain">
    <h1 class="title">后台管理系统</h1>
    <el-input v-model="username" placeholder="请输入内容"></el-input>
    <el-input class="password" v-model="password" type="password" placeholder="请输入密码"></el-input>
    <el-button type="primary" class="btn" @click="submit">确认</el-button>
   </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      username: "", //登入名
      password: "" // 密码
    };
  },
  methods: {
    //   用户登入
    async submit() {
      if (this.username == "") {
        this.$message({
          type: "warning",
          message: "请输入正确的用户名"
        });
      } else if (this.password == "") {
        this.$message({
          type: "warning",
          message: "请输入正确的密码"
        });
      }
      let data = {
        username: this.username,
        password: this.password
      };
      let res = await this.$http.post(
        "/api/manage/user/login.do",
        this.$qs.stringify(data)
      );
      if (res.data.status == 0) {
        this.$message({
          type: "success",
          message: "恭喜，登入成功"
        });
      }
      this.$router.push({
        path:"/home",
        params:{
          name:this.username
        }
      })

    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f1f1f1;
  width: 100%;
  height: 100%;
}
.contain {
  width: 300px;
}
.title {
  font-size: 24px;
  color: #666;
  padding-bottom:10px;
  font-weight: 400;
}
.btn {
  width: 100%;
}
.password {
  margin: 20px 0;
}
</style>