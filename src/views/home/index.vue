<template>
  <el-container> <!-- 外层容器  -->

    <el-aside style="height:100vh;background-color:#9ed9ec; width: 220px"><!-- 侧边栏容器  -->
      <layout-aside></layout-aside>
    </el-aside>

    <el-container><!-- 内层容器  -->

      <el-header><!-- 顶栏容器  -->
        顶栏容器
      </el-header>

      <el-main><!-- 主要区域容器-->
        内容
      </el-main>

    </el-container>

  </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style>

</style>
