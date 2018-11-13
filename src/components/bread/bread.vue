<template>
    <div class="nav">
        <el-breadcrumb separator-class="el-icon-arrow-right bread">
            <el-breadcrumb-item v-for="(item,index) in breadData" :key="index" >{{item.meta.breadName}}</el-breadcrumb-item>
          
</el-breadcrumb>
    </div>
</template>
<script>
export default {
    data(){
        return{
            breadData:[]
        }
    },
    methods:{
        routerName(){
            console.log(this.$router.currentRoute)
            this.breadData = this.$router.currentRoute.matched
        }
    },
    watch:{
        '$route':'routerName'
    },
    created(){
        this.routerName()
    }
};
</script>
<style scoped>
.bread {
    font-size: 16px;
    color:#333;
    
}
.nav {
    margin-bottom:10px;
    padding-left:10px;
}
</style>
