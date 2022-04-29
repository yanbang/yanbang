<template>
  <div>
    <div id="GressChart" style="width: 430px; height: 100px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "GressChart",
  methods: {
    GressChart() {
      var myColor = ["#33CCFF"];
      var chartDom = document.getElementById("GressChart");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        grid: {
          left: "11%",
          top: "10%",
          right: "0%",
          bottom: "15%",
          containLabel: true,
        },
        xAxis: [
          {
            show: false,
          },
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "27",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16",
              },
            },
            data: [],
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16",
              },
            },
            data: [],
          },
          {
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)",
              },
            },
            data: [],
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [88],
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: "16",
                },
              },
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
              },
            },
            z: 2,
          },
          {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [99.5],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "#0e2147",
                barBorderRadius: 5,
              },
            },
            z: 1,
          },
          {
            name: "外圆",
            type: "scatter",
            hoverAnimation: false,
            data: [0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                opacity: 1,
              },
            },
            z: 2,
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.GressChart();
  },
};
</script>