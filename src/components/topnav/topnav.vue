<template>
    <div class="head-container">
         <i class="fa fa-address-book icon-font"></i>
        <span>欢迎, admin</span>
       
        <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出登入</el-dropdown-item>
            
        </el-dropdown-menu>

</el-dropdown>
    </div>
</template>
<script>
export default {
  name: "head",
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
      this.$message({
        type: "success",
        message: "退出成功"
      });
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style >
.head-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 100px;
  color: #333;
  height: 50px;
}
.icon-font {
  margin-top: 17px;
  font-size: 14px;
  padding-right: 7px;
}
.logout {
}
</style>
