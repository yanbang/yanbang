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
                const c0 = [shape.x - 10, shape.y]
                const c1 = [shape.x + 10, shape.y]
                const c2 = [xAxisPoint[0] + 10, xAxisPoint[1]]
                const c3 = [xAxisPoint[0] - 10, xAxisPoint[1]]
                ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
                ctx.stroke();
            }
        })
        
        const CubeRight = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const xAxisPoint = shape.xAxisPoint
                const c1 = [shape.x + 9, shape.y]
                const c2 = [xAxisPoint[0] + 9, xAxisPoint[1]]
                const c3 = [xAxisPoint[0] + 14, xAxisPoint[1] - 9]
                const c4 = [shape.x + 14, shape.y - 9]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
                ctx.stroke();
            }
        })
        
        const CubeTop = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const c1 = [shape.x - 10, shape.y]
                const c2 = [shape.x + 10, shape.y]
                const c3 = [shape.x + 15, shape.y - 9]
                const c4 = [shape.x - 5, shape.y - 9]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                ctx.stroke();
            }
        })        
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeRight', CubeRight)
        echarts.graphic.registerShape('CubeTop', CubeTop)
        const value = data.value
        const xAxis = data.xAxis
        var option = {
            title: false,
            color: ['#02b3c9','#FF8279'],
            legend: {
                left: '35%',
                bottom: 0,
                textStyle: {
                    fontSize: 14,
                    color: '#A9C0FF',
                    padding: [3, 8, 0, 0]
                },
                data:['不活跃手机用户','不活跃用户占比'],
            },
            grid: {
                top: '10%',
                left: '5%',
                right: '5%',
                bottom: '10%',
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
            yAxis: [{
                type: 'value',
                min: 0,
                // max: 140,
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
            }],
            series: [{
                type: 'custom',
                name: "不活跃手机用户",
                "stack": "总量",
                label: {
                    normal: {
                        show: true,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#fff',
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
                                        offset: 0.6,
                                        color: 'rgba(7, 185, 244, 0.6)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 246, 255, 0)'
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
                                    offset: 0.6,
                                    color: 'rgba(7, 185, 244, 0.6)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0, 246, 255, 0)'
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
                                        color: '#0591c1'
                                    },
                                    {
                                        offset: 1,
                                        color: '#02b3c9'
                                    }
                                ])
                            }
                        }]
                    }
                },
                data: value
            },{
                type: "line",
                name: "不活跃用户占比",
                "stack": "总量",
                label: {
                    normal: {
                        formatter: '{c} %',
                        show: true,
                        fontSize: 12,
                        color: '#fff',
                        position: 'top',
                    }
                },
                itemStyle: {
                    // color: '#02628D',
                    borderColor: '#FF8279',
                    borderWidth: 2
                },
                lineStyle: {
                    color: '#FF8279',
                },
                symbolSize: 8,
                symbol: 'circle',
                data: ['30','80','88']
            }]
        }

        echart.setOption(option)
    }
}
