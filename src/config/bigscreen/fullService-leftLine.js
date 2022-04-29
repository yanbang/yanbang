import echarts from 'echarts'

export default {
    initChart(data) {
        var echart = echarts.init(document.getElementById(data.id))
        let lable = data.lable
        let legend = lable == '月度趋势' ? ['当月', '上月'] : ['当年', '去年']
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: lable ? '10%' : '4%',
                left: '15%',
                right: '5%',
                bottom: '23%',
                // containLabel: true
            },
            legend: {
                show: lable && true,
                right: '6%',
                top: 0,
                textStyle: {
                    color: '#fff',
                },
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: false,
                    color: '#A582EA'
                },

                axisLabel: {
                    color: '#A9C0FF',
                    width: 100
                },
                splitLine: {
                    show: false
                },
                boundaryGap: false,
                data: data.xAxis
            }],

            yAxis: [{
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
                    show: true,
                    textStyle: {
                        color: '#A9C0FF',
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [
                {
                    name: data.legend ? data.legend[0] : legend[0],
                    type: 'line',
                    showAllSymbol: true,
                    symbol: 'circle',
                    smooth: true,
                    symbolSize: 6,
                    lineStyle: {
                        normal: {
                            color: "#00FFFF",
                        },
                    },
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        color: "#00FFFF",
                        borderColor: "#00FFFF",
                        borderWidth: 1,
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(4, 174, 253, .5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(4, 174, 253, 0)'
                                }
                            ], false),
                        }
                    },
                    data: data.data1
                },
                {
                    name: data.legend ? data.legend[1] : legend[1],
                    type: 'line',
                    showAllSymbol: true,
                    symbol: 'circle',
                    smooth: true,
                    symbolSize: 6,
                    lineStyle: {
                        normal: {
                            color: "#fff",
                        },
                    },
                    label: {
                        show: false
                    },
                    itemStyle: {
                        color: "#fff",
                        borderColor: "#fff",
                        borderWidth: 1,
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(5, 253, 203, .5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(5, 253, 203, 0)'
                                }
                            ], false),
                        }
                    },
                    data: data.data2
                },
            ]
        };
        echart.setOption(option)
    }
}
