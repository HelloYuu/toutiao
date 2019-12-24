<template>
  <el-card>
      <bread-crumb slot="header">
      <template slot="title">素材管理</template>
      </bread-crumb>
      <el-tabs v-model="activeName" @tab-click="changeTab">
          <el-tab-pane label="全部素材" name="all">
            <div class="img-list">
                <el-card class="img-card" v-for="item in list" :key="item.id">
                    <img :src="item.url" alt="">
                    <el-row class="operate" type="flex" justify="space-around">
                        <i class="el-icon-star-off"></i>
                        <i class="el-icon-delete"></i>
                    </el-row>
                </el-card>
            </div>
            <el-row type="flex" justify="center" style="height:50px; margin-top:40px" align="middler">
                <el-pagination background layout="prev, pager, next"
                :total="page.total"
                :current-page="page.currentPage"
                :page-size="page.pageSize"
                @current-change="changePage" >
                </el-pagination>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="收藏素材" name="collect">
            <div class="img-list">
                <el-card class="img-card" v-for="item in list" :key="item.id">
                    <img :src="item.url" alt="">
                </el-card>
            </div>
            <el-row type="flex" justify="center" style="height:50px; margin-top:40px" align="middler">
                    <el-pagination background layout="prev, pager, next"
                    :total="page.total"
                    :current-page="page.currentPage"
                    :page-size="page.pageSize"
                    @current-change="changePage" >
                    </el-pagination>
                </el-row>
          </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        currentPage: 1,
        pageSize: 15,
        total: 0
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getAllMaterial()
    },
    changeTab () {
      this.page.currentPage = 1
      this.getAllMaterial()
    },
    getAllMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getAllMaterial()
  }
}
</script>

<style lang="less" scoped>
.img-list{
    display: flex;
    flex-wrap: wrap;
    .img-card{
        width:220px;
        height:200px;
        margin: 10px 45px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .operate{
            width: 100%;
            font-size: 25px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color:#ccc;
            height: 30px;
            i{
                width:25px;
                height:25px;
                line-height: 30px;
                color:rgb(251, 114, 153);;
            }
        }
    }
}
</style>
