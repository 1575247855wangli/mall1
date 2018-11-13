<template>
  <el-row class="tac">
  <el-col :span="24">
  
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b"
      >
      
      <el-menu-item index="/home/index">
        <i class="el-icon-menu"></i>
        <span slot="title" >首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/total/administration">商品管理</el-menu-item>
          <el-menu-item index="/home/total/product">品类管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/home/order">
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="/home/user">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  
</el-row> 
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style></style>
