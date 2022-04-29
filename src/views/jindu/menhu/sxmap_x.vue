<template>
	<layout>


		<!-- 中上 -->

		<!-- 政企运营区域视图 -->
		<div class="specBox mapView">
			<div class="charInfo">
				<div class="mapBar" ref="HBMapBg2"></div>
				<div class="mapBar" ref="HBMapBg1"></div>
				<div class="mapBar" ref="HBMapBg"></div>
				<div class="mapBar" ref="HBMap"></div>
				<ul class="mapGotBar" v-if="cityName == '全国'">
					<li v-for="(v, k) in cityList" :key="k" :class="{ on: hoverCityName == v.name }">
						<p :style="{
                      transform: `skew(0deg, 0deg) scale(${v.random})`
                    }">
							{{ v.name }}
              
						</p>
						<div class="tooltipBar" :class="{ bottom: isTipBottom(v.name) }">
							<div class="box">
								<div class="title">{{ v.name }}</div>
								<div class="dataBar">
									<div class="item">
										<div class="label">综合评分</div>
										<div class="num">88</div>
									</div>
									<div class="item">
										<div class="label">当前排名</div>
										<div class="num">3</div>
									</div>
									<div class="item">
										<div class="label">指标完成进度</div>
										<div class="num">67%</div>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 中下 -->

	</layout>
</template>

<script>
	import echarts from "echarts";
  import china from "@/assets/js/map/china.json";
	import hubei from "@/assets/js/map/liaoning.json";
	import shanghai from "@/assets/js/map/shanghai.json";
	import guangxi from "@/assets/js/map/guangxi.json";
	import anhui from "@/assets/js/map/anhui.json";
	import xizang from "@/assets/js/map/xizang.json";
	import gansu from "@/assets/js/map/gansu.json";
	import shanxi from "@/assets/js/map/shanxi.json";
	import liaoning from "@/assets/js/map/liaoning.json";
	
  
 

	

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
				cityName: "全国",
				hoverCityName: "",

				pageNavIndex: 0,
				cityList: [{
						value: 96,
						name: "颛桥IDC",
						label: "hubei",
						random: 1
					},
					{
						value: 92,
						name: "辽宁",
						label: "liaoning",
						random: getRandom()
					},
					{
						value: 87,
						name: "上海",
						label: "shanghai",
						random: getRandom()
					},
					{
						value: 85,
						name: "安徽",
						label: "anhui",
						random: getRandom()
					},
					{
						value: 82,
						name: "陕西",
						label: "shanxi",
						random: getRandom()
					},
					{
						value: 79,
						name: "甘肃",
						label: "gansu",
						random: getRandom()
					},
					{
						value: 72,
						name: "广西",
						label: "guangxi",
						random: getRandom()
					},
					{
						value: 68,
						name: "西藏",
						label: "xizang",
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
    
			echarts.registerMap("全国", china);
      
			echarts.registerMap("湖北", hubei);
			echarts.registerMap("辽宁", liaoning);
      
			echarts.registerMap("上海", shanghai);
			echarts.registerMap("安徽", anhui);
			echarts.registerMap("陕西", shanxi);
      
			echarts.registerMap("甘肃", gansu);
      
			echarts.registerMap("广西", guangxi);
			echarts.registerMap("西藏", xizang);
     
      
      
		},
		mounted() {

			this.getHBMapData();
		},
		methods: {









			isTipBottom(name) {
				if (!name) return false;
				return ["湖北", "陕西", "安徽"].some(v => v == name);
			},
			getHBMapData() {
        
				let curSelectCityName = this.cityName == "全省" ? "湖北" : this.cityName;
				const option = {
					geo: {
						map: curSelectCityName,
						layoutCenter: ["60%", "58%"],
						layoutSize: 990,
						aspectScale: 1,
						selectedMode: "single",
						emphasis: {
							label: {
								show: curSelectCityName != "湖北",
								color: "#fff"
							}
						},
						label: {
							show: curSelectCityName != "湖北",
							color: "#fff"
						},
						itemStyle: {
							normal: {
								areaColor: "rgba(35,79,98,0.7)",
								borderWidth: 1.2,
								borderColor: "#00fcff"
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
				echart.on("click", param => {
					if (!param.name || !this.cityList.some(v => v.name == param.name))
						return;
					this.cityName = param.name;
				});
				echart.on("mouseover", param => {
        
          
					if (!param.name || !this.cityList.some(v => v.name == param.name))
						
            console.log(param)
            debugger
            if  (param.name  == '湖北'){
              v.name == '湖北'
            }
              debugger
					this.hoverCityName = param.name;
				});
				echart.on("mouseout", () => {
					this.hoverCityName = "";
				});
				setTimeout(() => {
					echart.dispatchAction({
						type: "geoSelect",
						name: curSelectCityName
					});
				});
				const optionBg = {
					geo: {
						map: curSelectCityName,
						layoutCenter: ["60%", "59%"],
						layoutSize: 990,
						aspectScale: 1,
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								areaColor: "rgba(35,79,128,0.3)",
								borderWidth: 1.2,
								borderColor: "#00fcff",
								shadowColor: "rgba(73,222,255,0.84)",
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
						layoutCenter: ["60%", "60%"],
						layoutSize: 990,
						aspectScale: 1.01,
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								areaColor: "rgba(35,79,128,0.2)",
								borderWidth: 1.2,
								borderColor: "rgba(0,255,240,0.6)"
							},
							emphasis: {
								label: {
									show: false
								},
								areaColor: "rgba(9,27,49,0.2)",
								borderWidth: 1.2,
								borderColor: "rgba(0,255,240,0.6)"
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
						layoutCenter: ["60%", "61%"],
						layoutSize: 990,
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
	





	//政企运营区域视图
	@keyframes opacity {

		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0.64;
		}
	}

	.mapView {
		height: 700px;

		.charInfo {
			top: -1.8vh;
			bottom: auto;
			overflow: unset;
			//left: 2.3vw;
			perspective: 5600px;

			&:before {
        z-index: -2;
				position: absolute;
				content: "";
				left: calc(50% - 840px);
				top:-30px;
				width: 1640px;
				height: 825px;
				pointer-events: none;
				 background: url("~@/assets/menhuimg/圆圈.png") no-repeat center top;
			}

			.mapBar {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 700px;
				transform: rotateX(42deg) rotateZ(7.5deg) skew(5deg, -8deg);
				transform-origin: center top;
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
						bottom: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: url("~@/assets/viewImg/homepageImg/thumbtack.png") no-repeat center bottom;
						background-size: 100% auto;
						animation: opacity infinite 2s alternate;
					}

					p {
            margin-top: 50px;
            padding: 4px;          
            text-align: center;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            font-size: 12px;
            text-shadow: 0px 0px 10px #00FFF0;
						background: url("~@/assets/menhuimg/fangks.png") no-repeat center center;            
            background-size: 100% auto;
             
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
					top: 405px;
					left: 398px;
				}

				li:nth-child(2) {
					top: 270px;
					left: 548px;
				}

				li:nth-child(3) {
					top: 405px;
					left: 538px;
				}

				li:nth-child(4) {
					top: 405px;
					left: 448px;
				}

				li:nth-child(5) {
					top: 342px;
					left:304px;
				}

				li:nth-child(6) {
					top: 302px;
					left:194px;
				}

				li:nth-child(7) {
					top: 502px;
					left:314px;
				}

				li:nth-child(8) {
				  top: 402px;
				  left:4px;
				}

				
			}
		}
	}

	

	@media screen and (max-width: 1680px) {
		.mapView {
			.charInfo {
				top: -2.5vh;
				transform-origin: center top;
				transform: scale(0.88);
			}
		}
	}

	@media screen and (max-width: 1520px) {
		.mapView {
			.charInfo {
				top: -3vh;
				transform-origin: center top;
				transform: scale(0.8);
			}
		}
	}

	

</style>
