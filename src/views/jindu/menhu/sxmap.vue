<template>

  <div class="mapView">


    <div class="mapBar" ref="HBMap"></div>

    <img src="./img/fangzi.png"  style="position: absolute;top:78vh;width:3.125rem; left:6vw; width:2.5vw;"/>
  </div>


</template>

<script>
  import echarts from "echarts";

  import 湖南省 from "@/assets/js/map/hunan/湖南省.json";

  import 常德市 from "@/assets/js/map/hunan/常德市.json";
  import 郴州市 from "@/assets/js/map/hunan/郴州市.json";
  import 衡阳市 from "@/assets/js/map/hunan/衡阳市.json";
  import 怀化市 from "@/assets/js/map/hunan/怀化市.json";
  import 娄底市 from "@/assets/js/map/hunan/娄底市.json";

  import 邵阳市 from "@/assets/js/map/hunan/邵阳市.json";
  import 湘潭市 from "@/assets/js/map/hunan/湘潭市.json";
  import 自治州 from "@/assets/js/map/hunan/湘西土家族苗族自治州.json";
  import 益阳市 from "@/assets/js/map/hunan/益阳市.json";
  import 永州市 from "@/assets/js/map/hunan/永州市.json";

  import 岳阳市 from "@/assets/js/map/hunan/岳阳市.json";
  import 张家界市 from "@/assets/js/map/hunan/张家界市.json";
  import 长沙市 from "@/assets/js/map/hunan/长沙市.json";
  import 株洲市 from "@/assets/js/map/hunan/株洲市.json";

  function getRandom(start = 0.6, end = 1) {
    let num = Math.random() * (end - start) + start;
    return num;
  }
  export default {
    name: "StrategyDecoding",
    components: {

    },
    data() {
      return {
        curSelectCityName: "湖南",
        hoverCityName: "",
    
        pageNavIndex: 0,
        


      };
    },
    watch: {
      cityName(val) {
        this.getHBMapData();
      }
    },
    created() {
      echarts.registerMap("湖南", 湖南省);

      echarts.registerMap("常德市", 常德市);
      echarts.registerMap("郴州市", 郴州市);
      echarts.registerMap("衡阳市", 衡阳市);
      echarts.registerMap("怀化市", 怀化市);
      echarts.registerMap("娄底市", 娄底市);

      echarts.registerMap("邵阳市", 邵阳市);
      echarts.registerMap("湘潭市", 湘潭市);
      echarts.registerMap("自治州", 自治州);
      echarts.registerMap("益阳市", 益阳市);
      echarts.registerMap("永州市", 永州市);

      echarts.registerMap("岳阳市", 岳阳市);
      echarts.registerMap("张家界市", 张家界市);
      echarts.registerMap("长沙市", 长沙市);
      echarts.registerMap("株洲市", 株洲市);




    },
    mounted() {
      this.getHBMapData();
    },
    methods: {

      isTipBottom(name) {
        if (!name) return false;
        return ["株洲市"].some(v => v == name);
      },
      getHBMapData() {
        
        // 动态计算柱形图的高度（定一个max）
            function lineMaxHeight () {
                const maxValue = Math.max(...customerBatteryCityData.map(item => item.value))
                
                return 0.9/maxValue
            }
                // 柱状体的主干
            function lineData () {
                return customerBatteryCityData.map((item) => {
                  return {
                    coords: [geoCoordMap[item.name], [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]]
                  }
                })
            }
            // 柱状体的顶部
            function scatterData () {
                return customerBatteryCityData.map((item) => {
                  return [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]
                })
                console.log()
            }
            // 柱状体的底部
            function scatterData2 () {
                return customerBatteryCityData.map((item) => {
                  return {
                    name: item.name,
                    value: geoCoordMap[item.name]
                  }
                })
            }
            
        
        
        var geoCoordMap = {
          
          娄底市: [111.996396357,27.7410733023],
          岳阳市: [113.146195519,29.3780070755],
          常德市: [111.653718137,29.0121488552],
          张家界市: [110.481620157,29.1248893532],
          怀化市: [109.986958796,27.5574829012],
          株洲市: [113.131695341,27.8274329277],
          永州市: [111.614647686,26.4359716468],
          湘潭市: [112.935555633,27.835095053],
          湘西自治州: [109.7457458,28.3179507937],
          益阳市: [112.366546645,28.5880877799],
          衡阳市: [112.583818811,26.8981644154],
          邵阳市: [111.461525404,27.2368112449],
          郴州市: [113.037704468,25.7822639757],
          长沙市: [112.979352788,28.2134782309],
          省本部:[109.959466,25.134381],
            }
        var customerBatteryCityData = [
                {name: "娄底市", value: 70},
                {name: "岳阳市", value: 20},
                {name: "常德市", value: 70},
                {name: "张家界市", value: 70},
                {name: "怀化市", value: 120},
                {name: "株洲市", value: 70},
                {name: "永州市", value: 70},
                {name: "湘潭市", value: 0},
                {name: "湘西自治州", value: 70},
                {name: "益阳市", value: 10},
                {name: "衡阳市", value: 70},
                {name: "邵阳市", value: 110},
                {name: "郴州市", value: 60}, 
                {name: "省本部", value: 42},        
        ]
        
        echarts.registerMap('湖南', 湖南省);
        
        const option = {
           backgroundColor: 'rgba(0,2,89,0)',
                      tooltip: {
                          trigger: 'item',
                          show: true,
                          enterable: true,
                          textStyle:{
                              fontSize:20,
                              color: '#fff'
                          },
                          backgroundColor: 'rgba(0,2,89,0.8)',
                          formatter: '{b}<br />{c}'
                      },
                      geo: [
                        {
                          map: '湖南',
                          aspectScale: 0.9,
                          roam: false, // 是否允许缩放
                          zoom: 1, // 默认显示级别
                          layoutSize: '100%',
                          layoutCenter: ['50%', '50%'],
                          itemStyle: {
                            normal: {
                              areaColor: {
                                type: 'linear-gradient',
                                x: 0,
                                y: 400,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                  offset: 0,
                                  color: 'rgba(37,108,190,0.3)' // 0% 处的颜色
                                }, {
                                  offset: 1,
                                  color: 'rgba(15,169,195,0.3)' // 50% 处的颜色
                                }],
                                global: true // 缺省为 false
                              },
                              borderColor: '#4ecee6',
                              borderWidth: 1
                            },
                            emphasis: {
                              areaColor: {
                                type: 'linear-gradient',
                                x: 0,
                                y: 300,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                  offset: 0,
                                  color: 'rgba(37,108,190,1)' // 0% 处的颜色
                                }, {
                                  offset: 1,
                                  color: 'rgba(15,169,195,1)' // 50% 处的颜色
                                }],
                                global: true // 缺省为 false
                              }
                            }
                          },
                          emphasis: {
                            itemStyle: {
                              areaColor: '#0160AD'
                            },
                            label: {
                              show: 0,
                              color: '#fff'
                            }
                          },
                          zlevel: 3
                        },
                        {
                          map: '湖南',
                          aspectScale: 0.9,
                          roam: false, // 是否允许缩放
                          zoom: 1, // 默认显示级别
                          layoutSize: '100%',
                          layoutCenter: ['50%', '50%'],
                          itemStyle: {
                            normal: {
                              borderColor: 'rgba(192,245,249,.6)',
                              borderWidth: 2,
                              shadowColor: '#2C99F6',
                              shadowOffsetY: 0,
                              shadowBlur: 120,
                              areaColor: 'rgba(29,85,139,.2)'
                            }
                          },
                          zlevel: 2,
                          silent: true
                        },
                        {
                          map: '湖南',
                          aspectScale: 0.9,
                          roam: false, // 是否允许缩放
                          zoom: 1, // 默认显示级别
                          layoutSize: '100%',
                          layoutCenter: ['50%', '51.2%'],
                          itemStyle: {
                            // areaColor: '#005DDC',
                            areaColor: 'rgba(0,27,95,0.4)',
                            borderColor: '#004db5',
                            borderWidth: 1
                          },
                          zlevel: 1,
                          silent: true
                        }
                      ],
                      series: [
                        // map
                        {
                          geoIndex: 0,
                          // coordinateSystem: 'geo',
                          showLegendSymbol: true,
                          type: 'map',
                          roam: true,
                          label: {
                            normal: {
                              show: false,
                              textStyle: {
                                color: '#fff'
                              }
                            },
                            emphasis: {
                              show: false,
                              textStyle: {
                                color: '#fff'
                              }
                            }
                          },
              
                          itemStyle: {
                            normal: {
                              borderColor: '#2ab8ff',
                              borderWidth: 1.5,
                              areaColor: '#12235c'
                            },
                            emphasis: {
                              areaColor: '#2AB8FF',
                              borderWidth: 0,
                              color: 'red'
                            }
                          },
                          map: '湖南', // 使用
                          data: customerBatteryCityData
                          // data: this.difficultData //热力图数据   不同区域 不同的底色
                        },
                        // 柱状体的主干
                        {
                          type: 'lines',
                          zlevel: 5,
                          effect: {
                            show: false,
                            // period: 4, //箭头指向速度，值越小速度越快
                            // trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                            // symbol: 'arrow', //箭头图标
                            // symbol: imgDatUrl,
                            symbolSize: 5 // 图标大小
                          },
                          lineStyle: {
                            width: 20, // 尾迹线条宽度
                            color: 'rgb(252,205,55, .6)',
                            opacity: 1, // 尾迹线条透明度
                            curveness: 0 // 尾迹线条曲直度
                          },
                          label: {
                            show: 0,
                            position: 'end',
                            formatter: '245'
                          },
                          silent: true,
                          data: lineData()
                        },
                        // 柱状体的顶部
                        {
                          type: 'scatter',
                          coordinateSystem: 'geo',
                          geoIndex: 0,
                          zlevel: 5,
                          label: {
                            show: true,
                            formatter: function (item) {
                              return '656'
                            },
                            position: "top"
                          },
                          symbol: 'circle',
                          symbolSize: [20, 10],
                          itemStyle: {
                            color: 'rgb(255,205,25, 1)',
                            opacity: 1
                          },
                          silent: true,
                          data: scatterData()
                        },
                        // 柱状体的底部
                        {
                          type: 'scatter',
                          coordinateSystem: 'geo',
                          geoIndex: 0,
                          zlevel: 4,
                          label: {
                            // 这儿是处理的
                            formatter: '{b}',
                            position: 'bottom',
                            color: '#fff',
                            fontSize: 12,
                            distance: 10,
                            show: true
                          },
                          symbol: 'circle',
                          symbolSize: [20, 10],
                          itemStyle: {
                            // color: '#F7AF21',
                            color: 'rgb(255,205,55, 1)',
                            opacity: 1
                          },
                          silent: true,
                          data: scatterData2()
                        },
                        // 底部外框
                        {
                          type: 'scatter',
                          coordinateSystem: 'geo',
                          geoIndex: 0,
                          zlevel: 4,
                          label: {
                            show: false
                          },
                          symbol: 'circle',
                          symbolSize: [40, 20],
                          itemStyle: {
                              color: {
                              type: 'radial',
                              x: 0.5,
                              y: 0.5,
                              r: 0.5,
                              colorStops: [
                                  {
                                      offset: 0, color: 'rgb(255,205,55, 0)' // 0% 处的颜色
                                  }, 
                                  {
                                      offset: .75, color: 'rgb(252,205,25, 0)' // 100% 处的颜色
                                  },
                                  {
                                      offset: .751, color: 'rgb(252,205,125, 1)' // 100% 处的颜色
                                  },
                                  {
                                      offset: 1, color: 'rgb(255,205,15, 1)' // 100% 处的颜色
                                  }
                              ],
                              global: false // 缺省为 false
                          },
          
                            opacity: 1
                          },
                          silent: true,
                          data: scatterData2()
                        }
                      ]
                    }
        const dom = this.$refs.HBMap;
        const echart = echarts.init(dom);
        echart.setOption(option);

      },

        
      slidechange(refName) {
        if (!refName) return;

        var mySlide = this.$refs[refName];
        let activeIndex = mySlide.swiper.activeIndex;

        if (refName == "ygpjslide") {
          this.ygpjindex = activeIndex;
        } else if (refName == "gdmxslide") {
          this.gdmxindex = activeIndex;
        } else if (refName == "fxpj1slide") {
          this.fxpj1index = activeIndex;
        } else if (refName == "fxpj2slide") {
          this.fxpj2index = activeIndex;
        }
      },
      indexchange(refName, k) {
        if (!refName) return;

        var mySlide = this.$refs[refName];
        let swiper = mySlide.swiper;

        if (refName == "ygpjslide") {
          this.ygpjindex = k;
        } else if (refName == "gdmxslide") {
          this.gdmxindex = k;
        } else if (refName == "fxpj1slide") {
          this.fxpj1index = k;
        } else if (refName == "fxpj2slide") {
          this.fxpj2index = k;
        }

        swiper.slideTo(k, 1000, false);
      },
      goToPage(url) {
        if (!url) return;
        this.$router.push(url);
      }
    }
  };
</script>

<style lang="less" scoped>
  .mapView {

    .mapBar {
      
      position: absolute;
      top: 5vh;
      left: 0;
      width: 100%;
      height:85vh;
      overflow: visible;
      // transform: rotateX(45deg) rotateZ(8deg) skew(8deg, -7.5deg);
      // transform-origin: center top;
    }

    
  }
</style>
