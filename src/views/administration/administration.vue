<template>
    <div class="contanier">
        <el-row>
            <el-col :span="24"> 
                <div class="toptitle">
                    <div class="contain"><h1>商品管理</h1></div>
                    <el-button>添加商品</el-button>
                </div>
                <div class="table">
                     <el-table
                        :data="productlist"
                        style="width: 100%">
                        <el-table-column
                        label="商品id"
                        width="180">
                        <template slot-scope="scope">
                           
                            <span style="margin-left: 10px">{{ scope.row.id}}</span>
                        </template>
                        </el-table-column>
                         <el-table-column
                        label="商品信息"
                        width="180">
                        <template slot-scope="scope">
                            
                            <span style="margin-left: 10px">{{ scope.row.name}}</span>
                        </template>
                        </el-table-column>
                         <el-table-column
                        label="商品价格"
                        width="180">
                        <template slot-scope="scope">
                            
                            <span style="margin-left: 10px">{{ scope.row.price}}</span>
                        </template>
                        </el-table-column>
                          <el-table-column
                        label="状态"
                        width="180">
                        <template slot-scope="scope">
                            
                            <span style="margin-left: 10px">{{ scope.row.status=="1"?"已下架":"在售"}}</span>
                            <p style="margin-left:10px;background:#E6A23C;padding:3px 0px;color:#fff;width:50px;text-align: center" v-if="scope.row.status=='1'">上架</p>
                             <p style="margin-left:10px;background:#E6A23C;padding:3px 0px;color:#fff;width:50px;text-align: center" v-else>下架</p>
                        </template>
                        </el-table-column>
                        <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">详情</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                    :page-size="pageSize"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="total">
                    </el-pagination>
            </div>
            </el-col>
        </el-row>
       
    </div>
</template>
<script>
export default {
  data() {
    return {
      productlist: [],
      pageNum:1,
      pageSize:10,
      total:1
    }
  },
  methods: {
    //   编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 获取每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.handletotalData()
    },
    // 获取当前页数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val
      console.log(this.pageNum)
      this.handletotalData()
    },
    // 初始化页面获取数据
    async handletotalData() {
      let data = await this.$http.post("/api/manage/product/list.do",{
          pageNum:this.pageNum,
          pageSize:this.pageSize
      })
      console.log(data)
      if (data.data.status==0){
         this.productlist = data.data.data.list
         this.total = data.data.data.total
         console.log(this.total)
      }
    }
  },
  created(){
      this.handletotalData()
  }
};
</script>
<style scoped>
.toptitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.table{
    background-color: #fff;
    margin-top:20px;
    
}
</style>
