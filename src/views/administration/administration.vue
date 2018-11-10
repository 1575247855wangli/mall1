<template>
    <div class="contanier">
        <el-row>
            <el-col :span="24"> 
                <div class="toptitle">
                    <div class="contain"><h1>商品管理</h1></div>
                    <el-button @click="addpriduct">添加商品</el-button>
                </div>
                <div>
                    <el-select v-model="search" placeholder="请选择">
                        <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <el-input v-model="input" class="select" placeholder="请输入内容"></el-input>

                     <el-button type="primary" @click="handleselect">搜索</el-button>
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
                        >
                        <template slot-scope="scope">
                            
                            <span style="margin-left: 10px">{{ scope.row.name}}</span>
                        </template>
                        </el-table-column>
                         <el-table-column
                        label="商品价格"
                       >
                        <template slot-scope="scope">
                            
                            <span style="margin-left: 10px">{{ scope.row.price}}</span>
                        </template>
                        </el-table-column>
                          <el-table-column
                          class="poiner"
                        label="状态"
                        width="180">
                        <template slot-scope="scope">
                             <el-button type="warning" size="mini"  @click="changestatus(scope.$index, scope.row)"  >{{ scope.row.status=="1"?"下架":"上架"}}</el-button>
                            <span  class="poiner" >{{ scope.row.status=="1"?"在售":"已下架"}}</span>
                           
                            <!-- <p  class="poiner" @click="changestatus(scope.$index, scope.row)" style="margin-left:10px;background:#E6A23C;padding:3px 0px;color:#fff;width:50px;text-align: center" v-if="scope.row.status=='1'">上架</p>
                             <p  class="poiner" @click="changestatus(scope.$index, scope.row)" style="margin-left:10px;background:#E6A23C;padding:3px 0px;color:#fff;width:50px;text-align: center" v-else>下架</p> -->
                        </template>
                        </el-table-column>
                        <el-table-column label="操作" width="200" class="poiner">
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
                    @current-change="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="total">
                    </el-pagination>
            </div>
            </el-col>
        </el-row>
       <!-- 点击详情出来的弹框 -->
        <el-dialog title="详细信息" :visible.sync="dialogTableVisible">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="商品名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-input v-model="formLabelAlign.subtitle"></el-input>
                </el-form-item>
                <el-form-item label="所属品类">
                    <el-input v-model="formLabelAlign.categoryId"></el-input>
                </el-form-item>
                 <el-form-item label="商品价格">
                    <el-input v-model="formLabelAlign.price"></el-input>
                </el-form-item>
                 <el-form-item label="商品库存">
                    <el-input v-model="formLabelAlign.stock"></el-input>
                </el-form-item>
                 <el-form-item label="商品图片">
                    <img :src="formLabelAlign.imageHost" alt="">
                </el-form-item>
                  <el-form-item label="商品详情">
                    <div class="detail" v-html="formLabelAlign.detail"></div>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 点击增加出来 -->
               <el-dialog title="详细信息" :visible.sync="addproductstatus">
            <el-form :label-position="labelPosition" label-width="80px" :model="add">
                <el-form-item label="商品名称">
                    <el-input v-model="add.name"></el-input>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-input v-model="add.subtitle"></el-input>
                </el-form-item>
                <el-form-item label="所属品类">
                    <el-input v-model="add.categoryId"></el-input>
                </el-form-item>
                 <el-form-item label="商品价格">
                    <el-input v-model="add.price"></el-input>
                </el-form-item>
                 <el-form-item label="商品库存">
                    <el-input v-model="add.stock"></el-input>
                </el-form-item>
                 <el-form-item label="商品图片">
                    <img  alt="">
                </el-form-item>
            
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      productlist: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      options2: [
        {
          value: "productId",

          label: "按商品ID"
        },
        {
          value: "productName",
          label: "按商品名称查询"
        }
      ],
      search: "productId",
      input: "",
      labelPosition: "right",
      dialogTableVisible: false,
      addproductstatus: false, // 增加时候弹框
      formLabelAlign: {
        name: "",
        subtitle: "",
        stock: 0,
        price: 0,
        imageHost: "",
        detail: "",
        categoryId: ""
      },
      add: {
        name: "",
        subtitle: "",
        stock: 0,
        price: 0,
        imageHost: "",
        detail: "",
        categoryId: ""
      }
    };
  },
  created() {
    this.handletotalData();
  },
  methods: {
    //   查看详情
    async handleEdit(index, row) {
      console.log(index, row);
      this.dialogTableVisible = true;
      let id = row.id;
      let data = {
        productId: id
      };
      let respone = await this.$http.get("/api/manage/product/detail.do", {
        params: data
      });
      console.log(respone);
      let res = respone.data;
      this.formLabelAlign = res.data;
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 获取当前页数
    handleCurrentChange(val) {
      this.pageNum = val;
      this.handletotalData();
    },
    // 初始化页面获取数据
    async handletotalData() {
      let json = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      let data = await this.$http.get("/api/manage/product/list.do", {
        params: json
      });
      let res = data.data;
      if (res.status == 0) {
        this.productlist = res.data.list;
        this.total = res.data.total;
      }
    },
    // 根据id 或者名称查询
    async handleselect() {
      let data = {
        pageNum: this.pageNum,
        [this.search]: this.input
      };
      let respone = await this.$http.get("/api/manage/product/search.do", {
        params: data
      });
      console.log(respone);
      let res = respone.data.data;
      this.productlist = res.list;
      this.total = res.total;
    },
    // 商品的上架或者下架
    // 思路 先知道当前行是什么状态 ，然后弄相反的状态就行
    changestatus(index, row) {
      let id = row.id;
     
      // 1先获取当前行的状态
      let currentStatus = row.status;
       let statussend = currentStatus == 1 ? 2 : 1;
      let title = currentStatus == 1 ? "下架" : "上架";
      this.$confirm(`确认${title}此商品?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let data = {
            productId: id,
            status: statussend
          };
          this.$http
            .get("/api/manage/product/set_sale_status.do", {
              params: data
            })
            .then(res => {
              if (res.data.status == 0) {
                       this.handletotalData()
                this.$message({
                  type: "success",
                  message: "修改状态成功"
                });
              }
              this.handletotalData()
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 增加商品
    async addpriduct() {
      this.addproductstatus = true;
      let data = await this.$http.get("/api/manage/product/save.do", {
        params: this.add
      });
      console.log(data);
    }
  }
};
</script>
<style scoped>
.toptitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.table {
  background-color: #fff;
  margin-top: 20px;
}
.toptitle h1 {
  font-size: 24px;
  color: #333;
}
.select {
  width: 200px;
}
.poiner {
  cursor: pointer;
}
.detail {
  width: 500px;
}
.detail img {
  width: 100% !important;
}
</style>
