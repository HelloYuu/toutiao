<template>
  <el-container style="background-color:#f4f5f7"> <!-- 外层容器  -->

    <el-aside :style="{width:collaspse ? '60px':'220px'}" style="min-height:100vh;background-color:#fff;"><!-- 侧边栏容器  -->
      <layout-aside :collaspse="collaspse"></layout-aside>
    </el-aside>

    <el-container><!-- 内层容器  -->

      <el-header style="padding:0px"><!-- 顶栏容器  -->
          <layout-header></layout-header>
      </el-header>

      <el-main style="padding:10px"><!-- 主要区域容器-->
          <router-view >
<!-- style="height:91.7vh" -->
          </router-view>

      </el-main>

    </el-container>

  </el-container>
</template>

<script>
import eventBus from '../../utils/eventBus'
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  data () {
    return {
      collaspse: false
    }
  },
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader

  },
  created () {
    eventBus.$on('changeCollapse', () => {
      this.collaspse = !this.collaspse
    })
  }
}
</script>

<style lang="less" scoped>

</style>
