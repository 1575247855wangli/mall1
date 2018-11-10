<template>
   <div class="container">
        <el-row>
            <el-col :span="24">
                <h1>首页</h1>
                <div class="total">
                    <div class="item usser">
                        <h1>{{userCount}}</h1>
                        <p><i class="fa fa-user"></i>用户总数</p>
                    </div>
                     <div class="item product">
                        <h1>{{productCount}}</h1>
                        <p><i class="fa fa-align-justify"></i>商品数量</p>
                    </div>
                    <div class="item order">
                        <h1>{{orderCount}}</h1>
                        <p><i class="fa fa-align-justify"></i>订单总数</p>
                    </div>
                </div>
            </el-col>
        </el-row>
       
   </div>
</template>
<script>
export default {
  data() {
    return {
      userCount: 0,
      productCount: 0,
      orderCount: 0
    };
  },
  created() {
    this.handletotaldate();
  },
  methods: {
    // 获取后台统计接口
    async handletotaldate() {
      let res = await this.$http.get("/api/manage/statistic/base_count.do");
      console.log(res);
      if (res.data.status == 0) {
        this.userCount = res.data.data.userCount;
        this.productCount = res.data.data.productCount;
        this.orderCount = res.data.data.orderCount;
        console.log(this.orderCount);
      }
    }
  }
};
</script>
<style scoped>
.container {
  padding: 0 10px;
}
.total {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.item {
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.item:nth-child(3) {
  margin-right: 0;
}
.usser {
  background-color: #e6a23c;
}
.product {
  background-color: #67c23a;
}
.order {
  background-color: #409eff;
}
.item h1 {
  font-size: 40px;
  color: #fff;
}
.item p {
  color: #fff;
}
.item i {
  padding-right: 10px;
}
</style>
