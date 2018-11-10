<template>
  <el-container class="container">
  <el-aside class="asider" width="200px">
     <aside-nav></aside-nav>
  </el-aside>
  <el-container>
    <el-header class="header">
        <HeadIndex/>
    </el-header>
    <el-main class="main">
        <router-view/>
    </el-main>
  </el-container>
  <!-- <header-index/> -->
</el-container>
</template>
<script>
import HeadIndex from "@/components/topnav/topnav.vue"
import AsideNav from "@/components/aside/aside.vue"
// import HeaderIndex from '@/components/index.vue'
export default {
  components: {
    HeadIndex,
    AsideNav
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
