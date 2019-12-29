<template>
    <div class="home">
        <div ref="myChart" class="echarts"></div>
    </div>
</template>

<script>
import echarts from '../../../node_modules/echarts'
export default {
  mounted () {
    let myChart = echarts.init(this.$refs.myChart)
    myChart.setOption(myChart.option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2017', '2018', '2019', '2020'],
          ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
          ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
          ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
      },
      xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 }
      ],
      yAxis: [
        { gridIndex: 0 },
        { gridIndex: 1 }
      ],
      grid: [
        { bottom: '55%' },
        { top: '55%' }
      ],
      series: [
        // These series are in the first grid.
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // These series are in the second grid.
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
      ]
    })
  }
}
</script>

<style lang='less' scoped>
.home{
    height: 100vh;
    background-size: cover;
    background-color: #fff;
}
.echarts{
    width: 1400px;
    height: 900px;
}
</style>
