<template>
  <el-container class="container">
  <el-aside class="asider" width="200px">
     <aside-nav></aside-nav>
  </el-aside>
  <el-container>
    <el-header class="header">
        <head-index></head-index>
    </el-header>
    <el-main class="main">
      <bread-name></bread-name>
        <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import HeadIndex from "@/components/topnav/topnav.vue"
import AsideNav from "@/components/aside/aside.vue"
import breadName from "@/components/bread/bread"
export default {
  components: {
    HeadIndex,
    AsideNav,
    breadName
  }
};
</script>
<style scoped >
.container {
  height: 100%;
}
.asider {
  height: 100%;
  background-color: #545c64;
}
.header {
  width: 100%;
  background-color: #fff;
  height: 50px;
  line-height: 50px;
}
.main {
  background-color: #eee;
}
</style>
