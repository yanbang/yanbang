import echarts from 'echarts'

export default {
    initChart(data) {
        var echart = echarts.init(document.getElementById(data.id))
        const CubeLeft = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const xAxisPoint = shape.xAxisPoint
                const c0 = [shape.x, shape.y]
                const c1 = [shape.x - 9, shape.y - 9]
                const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9]
                const c3 = [xAxisPoint[0], xAxisPoint[1]]
                ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
            }
        })
        const CubeRight = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const xAxisPoint = shape.xAxisPoint
                const c1 = [shape.x, shape.y]
                const c2 = [xAxisPoint[0], xAxisPoint[1]]
                const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
                const c4 = [shape.x + 18, shape.y - 9]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        const CubeTop = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const c1 = [shape.x, shape.y]
                const c2 = [shape.x + 18, shape.y - 9]
                const c3 = [shape.x + 9, shape.y - 18]
                const c4 = [shape.x - 9, shape.y - 9]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeRight', CubeRight)
        echarts.graphic.registerShape('CubeTop', CubeTop)
        const value = data.value
        const xAxis = data.xAxis
        var option = {
            title: {
                text: '',
                top: 32,
                left: 18,
                textStyle: {
                    color: '#00F6FF',
                    fontSize: 24
                }
            },
            grid: {
                top: '15%',
                left: '10%',
                right: '10%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: xAxis,
                axisLine: {
                    show: false,
                    color: '#A582EA'
                },

                axisLabel: {
                    color: '#A9C0FF',
                    width: 100,
                  fontSize: 14
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
            },
            yAxis: {
                type: 'value',
                min: 0,
                // max: 140,
                splitNumber: 4,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#00A0E9',
                        opacity: 0.23
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false,
                },
            },
            series: [{
                type: 'custom',
                label: {
                    normal: {
                        show: true,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#333',
                        position: 'top',
                    }
                },
                renderItem: (params, api) => {
                    const location = api.coord([api.value(0), api.value(1)])
                    return {
                        type: 'group',
                        children: [{
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0, 246, 255, 1)'
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(7, 185, 244, 0.46)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(48, 91, 251, 0.01)'
                                    }
                                ])
                            }
                        }, {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0, 246, 255, 1)'
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(7, 185, 244, 0.46)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(48, 91, 251, 0.01)'
                                    }
                                ])
                            }
                        }, {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(86, 204, 242, 1)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(47, 128, 237, 1)'
                                    }
                                ])
                            }
                        }]
                    }
                },
                data: value
            },{
                type: 'bar',
                label: {
                    normal: {
                      show: true,
                      position: 'top',
                      color: '#fff',
                      fontSize: 16,
                      offset: [4, -15]
                    },
                },
                itemStyle: {
                    color: 'transparent'
                },
                data: value
            }]
        }

        echart.setOption(option)
    }
}
