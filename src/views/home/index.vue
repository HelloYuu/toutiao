<template>
  <el-container style="background-color:#f4f5f7"> <!-- 外层容器  -->

    <el-aside style="min-height:100vh;background-color:#fff; width: 220px"><!-- 侧边栏容器  -->
      <layout-aside></layout-aside>
    </el-aside>

    <el-container><!-- 内层容器  -->

      <el-header style="padding:0px"><!-- 顶栏容器  -->
          <layout-header></layout-header>
      </el-header>

      <el-main style="padding:10px"><!-- 主要区域容器-->
          <router-view style="height:91.7vh">

          </router-view>

      </el-main>

    </el-container>

  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader

  }
}
</script>

<style lang="less" scoped>

</style>
