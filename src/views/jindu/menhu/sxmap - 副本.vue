<template>

  <div class="mapView">

    <div class="mapBar" ref="HBMapBg2"></div>
    <div class="mapBar" ref="HBMapBg1"></div>
    <div class="mapBar" ref="HBMapBg"></div>
    <div class="mapBar" ref="HBMap"></div>
    <ul class="mapGotBar" v-if="cityName == '湖南'">

      <li v-for="(v, k) in cityList" :key="k" :class="{ on: hoverCityName == v.name }">
        <p :style="{
					            transform: `skew(0deg, 0deg) scale(${v.random})`
					          }">
        <div style="text-align: center; width:70px;">
          <h3 style="color: #ffc001;margin-bottom: 0px;">{{ v.value }}</h3>
          <div id="">
            <img src="./img/zhuzi_h.png" />
          </div>
          <h5 style="color: #e0d9b5;">{{ v.name }}</h5>
        </div>
        </p>

      </li>
    </ul>
    <div style="position: absolute;top:70vh;width:3.125rem;"><img src="./img/fangzi.png" /></div>
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
        cityName: "湖南",
        hoverCityName: "",

        pageNavIndex: 0,
        cityList: [{
            value: 6128,
            name: "自治州",
            label: "自治州",
            random: getRandom()
          },
          {
            value: 6238,
            name: "张家界市",
            label: "张家界市",
            random: getRandom()
          },
          {
            value: 9612,
            name: "常德市",
            label: "常德市",
            random: 1
          },
          {
            value: 7218,
            name: "益阳市",
            label: "益阳市",
            random: getRandom()
          },
          {
            value: 7128,
            name: "岳阳市",
            label: "岳阳市",
            random: getRandom()
          },
          {
            value: 8315,
            name: "怀化市",
            label: "怀化市",
            random: getRandom()
          },
          {
            value: 8442,
            name: "娄底市",
            label: "娄底市",
            random: getRandom()
          },
          {
            value: 7452,
            name: "湘潭市",
            label: "湘潭市",
            random: getRandom()
          },
          {
            value: 5218,
            name: "长沙市",
            label: "长沙市",
            random: getRandom()
          },
          {
            value: 7419,
            name: "邵阳市",
            label: "邵阳市",
            random: getRandom()
          },
          {
            value: 8172,
            name: "衡阳市",
            label: "衡阳市",
            random: getRandom()
          },
          {
            value: 4118,
            name: "株洲市",
            label: "株洲市",
            random: getRandom()
          },


          {
            value: 6428,
            name: "永州市",
            label: "永州市",
            random: getRandom()
          },
          {
            value: 9232,
            name: "郴州市",
            label: "郴州市",
            random: getRandom()
          },
          {
            value: 418,
            name: "省本部",
            label: "省本部",
            random: getRandom()
          },
        ],


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
        let curSelectCityName = this.cityName == "全省" ? "湖南" : this.cityName;
        const option = {
          geo: {
            map: curSelectCityName,
            layoutCenter: ["50%", "50%"],
            layoutSize: 590,
            aspectScale: 1,
            selectedMode: "single",
            emphasis: {
              label: {
                show: curSelectCityName != "湖南",
                color: "#fff"
              }
            },
            label: {
              show: curSelectCityName != "湖南",
              color: "#fff"
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(0, 160, 233, 0.8)',
                borderWidth: 1.2,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(0, 48, 132, 1)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(0, 48, 132, 0.8)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(0, 121, 248, 0.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 15
              },
              emphasis: {
                areaColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0,
                      color: "#00fcff"
                    },
                    {
                      offset: 1,
                      color: "#28aae7"
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 0
              }
            },
            select: {
              //选中显示设置
              itemStyle: {
                areaColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0,
                      color: "#00fcff"
                    },
                    {
                      offset: 1,
                      color: "#28aae7"
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 0
              }
            }
          },
          title: {
            show: false
          }
        };
        const dom = this.$refs.HBMap;
        const echart = echarts.init(dom);
        echart.setOption(option);



        setTimeout(() => {
          echart.dispatchAction({
            type: "geoSelect",
            name: curSelectCityName
          });
        });
        const optionBg = {
          geo: {
            map: curSelectCityName,
            layoutCenter: ["50%", "51%"],
            layoutSize: 590,
            aspectScale: 1,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                areaColor: "rgba(35,79,128,0.3)",
                borderWidth: 1.2,
                borderColor: 'rgba(0, 160, 233, 0.8)',
                shadowColor: 'rgba(0, 160, 233, 0.8)',
                shadowBlur: 28,
                shadowOffsetY: 2
              },
              emphasis: {
                label: {
                  show: false
                },
                areaColor: "#091b31",
                borderWidth: 1.2,
                borderColor: "#00fcff"
              }
            }
          },
          title: {
            show: false
          }
        };
        const optionBg1 = {
          geo: {
            map: curSelectCityName,
            layoutCenter: ["50%", "52%"],
            layoutSize: 590,
            aspectScale: 1.01,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                areaColor: "rgba(35,79,128,0.2)",
                borderWidth: 1.2,
                borderColor: 'rgba(0, 160, 233, 0.6)',
                shadowColor: 'rgba(0, 160, 233, 0.6)',
              },
              emphasis: {
                label: {
                  show: false
                },
                areaColor: "rgba(0, 160, 233, 0.2)",
                borderWidth: 1.2,
                borderColor: 'rgba(0, 160, 233, 0.2)',
                shadowColor: 'rgba(0, 160, 233, 0.2)',
              }
            }
          },
          title: {
            show: false
          }
        };
        const optionBg2 = {
          geo: {
            map: curSelectCityName,
            layoutCenter: ["50%", "53%"],
            layoutSize: 590,
            aspectScale: 1.01,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                areaColor: "rgba(35,79,128,0.2)",
                borderWidth: 1.2,
                borderColor: "rgba(0,255,240,0.3)"
              },
              emphasis: {
                label: {
                  show: false
                },
                areaColor: "rgba(9,27,49,0.3)",
                borderWidth: 1.2,
                borderColor: "rgba(0,255,240,0.3)"
              }
            }
          },
          title: {
            show: false
          }
        };
        const domBg = this.$refs.HBMapBg,
          domBg1 = this.$refs.HBMapBg1,
          domBg2 = this.$refs.HBMapBg2;
        const echartBg = echarts.init(domBg),
          echartBg1 = echarts.init(domBg1),
          echartBg2 = echarts.init(domBg2);
        echartBg.setOption(optionBg);
        echartBg1.setOption(optionBg1);
        echartBg2.setOption(optionBg2);
        window.addEventListener("resize", () => {
          echart.resize();
          echartBg.resize();
          echartBg1.resize();
          echartBg2.resize();
        });
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
      border: 0.0625rem solid #ff00ff;
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      height: 82%;
      overflow: visible;
      // transform: rotateX(45deg) rotateZ(8deg) skew(8deg, -7.5deg);
      // transform-origin: center top;
    }

    .mapGotBar {
      pointer-events: none;
      
      li {
        position: absolute;
        width: 2.5vw;
        height: 7vw;
        z-index: 2;
        margin-left: calc(50% - 177px);
        margin-top: -7vw;

        &:before {
          position: absolute;
          content: "";

          width: 10px;
          height: 38px;
          // background: url("./img/zhuzi_h.png") no-repeat center center;
          // background-size: 100% auto;
          animation: opacity infinite 2s alternate;
        }

        p {
          width: 50px;
          margin: 0px;
          padding: 4px;
          text-align: center;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 100;
          color: #FFFFFF;
          font-size: 12px;
          text-shadow: 0px 0px 10px #00FFF0;
        }

        .tooltipBar {
          position: absolute;
          top: 0.5vw;
          left: calc(50% - 10.5vw + 2.2vw);
          width: 21vw;
          padding-top: 7.3vw;
          overflow: hidden;
          z-index: 100;

          &:before,
          .box {
            transition: ease 0.3s all 0s;
          }

          &:before {
            position: absolute;
            content: "";
            top: 0;
            left: calc(50% - 2.2vw);
            width: 4.4vw;
            height: 0;
            background: url("~@/assets/viewImg/map-tip-line.png") no-repeat center top;
            background-size: 100% auto;
          }

          .box {
            width: 100%;
            height: 0;
            box-sizing: border-box;
            padding-left: 0.4vw;
            background: url("~@/assets/viewImg/map-tip-bg.png") no-repeat center top;
            background-size: 100% auto;
            overflow: hidden;

            .title {
              margin: 1vw 1vw 0 0.7vw;
              background: url("~@/assets/viewImg/map-tip-title-bg.png") no-repeat left top;
              background-size: auto 100%;
              padding: 0.2vw 0.5vw;
              font-size: 1.2vw;
              color: #fff;
              text-align: left;
            }

            .dataBar {
              width: 100%;
              display: flex;
              align-items: center;

              .item {
                width: calc(100% / 3);
                position: relative;
                line-height: normal;
                text-align: center;
                margin-top: 1.2vw;

                &:before {
                  position: absolute;
                  content: "";
                  top: 0;
                  bottom: 0;
                  right: 0;
                  width: 1px;
                  background: linear-gradient(to bottom,
                      rgba(0, 255, 255, 0.2) 0%,
                      rgba(0, 255, 255, 0.64),
                      rgba(0, 255, 255, 0.2) 90%),
                    transparent;
                }

                .label {
                  color: #00ffff;
                  font-size: 0.84vw;
                  font-weight: bold;
                }

                .num {
                  color: #ffff00;
                  font-size: 1.84vw;
                  font-family: "DS-Digital";
                  margin-top: 0.8vw;
                }
              }

              .item:last-of-type {
                &:before {
                  display: none;
                }
              }
            }
          }

          &.bottom {
            padding-top: 10;
            padding-bottom: 7.3vw;
            transform: translateY(-100%);

            &:before {
              top: auto;
              bottom: 0;
              transform: rotateX(180deg);
            }
          }
        }

        &.on {
          z-index: 100;

          .tooltipBar {
            &:before {
              height: 7.3vw;
            }

            .box {
              height: 9.12vw;
            }
          }
        }
      }

      li:nth-child(1) {
        top: 28vh;
        left: -12vh;
      }

      li:nth-child(2) {
        top: 20vh;
        left: 2vh;
      }

      li:nth-child(3) {
        top: 20vh;
        left: 20vh;
      }

      li:nth-child(4) {
        top: 31vh;
        left: 25vh;
      }

      li:nth-child(5) {
        top: 22vh;
        left: 50vh;
      }

      li:nth-child(6) {
        top: 47vh;
        left: -8vh;
      }

      li:nth-child(7) {
        top: 39vh;
        left: 18vh;
      }

      li:nth-child(8) {
        top: 42vh;
        left: 40vh;
      }

      li:nth-child(9) {
        top: 35vh;
        left: 48vh;
      }

      li:nth-child(10) {
        top: 55vh;
        left: 5vh;
      }

      li:nth-child(11) {
        top: 58vh;
        left: 40vh;
      }

      li:nth-child(12) {
        top: 52vh;
        left: 57vh;
      }

      li:nth-child(13) {
        top: 75vh;
        left: 24vh;
      }

      li:nth-child(14) {
        top: 76vh;
        left: 54vh;
      }

      li:nth-child(15) {
        top: 90vh;
        left: -14vh;
      }
    }
  }
</style>
