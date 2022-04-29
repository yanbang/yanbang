import echarts from 'echarts'  //引入echarts
import 'echarts-liquidfill'

export default {
    initChart(data) {
        const echart = echarts.init(document.getElementById(data.id));
        const ratio = data.value;
        const ratioLength = 3;
        let ratioArr = [];
        for (var ratioIndex = 0; ratioIndex < ratioLength; ratioIndex++) {
            ratioArr.push(ratio / 100)
        }
        var option = {
            series: [{
                type: 'liquidFill',
                radius: '80%',
                center: ['50%', '50%'],
                color: [{
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 1,
                        color: ['rgba(33, 158, 235, .3)'], // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color:['rgba(33, 158, 235, 1)'], // 50% 处的颜色
                    }, {
                        offset: 0,
                        color: ['rgba(33, 158, 235, .3)'], // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }],
                data: ratioArr,
                backgroundStyle: {
                    color: 'rgba(134, 228, 245, .2)'
                },
                label: {
                    normal: {
                        formatter: ratio + '%',
                        fontSize: 18,
                        color: 'rgba(134, 228, 245, 1)'
                    }
                },
                outline: {
                    show: false,
                }
            },
            { //细的外圈
                type: "pie",
                center: ["50%", "50%"],
                radius: ["84%", "88%"],
                hoverAnimation: false,
                data: [{
                    name: "",
                    value: ratio,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: 'transparent'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: 'transparent'
                        },
                    }
                }]
            },
            { //粗的外圈
                type: "pie",
                center: ["50%", "50%"],
                radius: ["83%", "88%"],
                hoverAnimation: false,
                zlevel: 2,
                data: [{
                    name: "",
                    value: ratio,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(52, 255, 186, .3)'
                        }, {
                            offset: 1,
                            color: 'rgba(65, 124, 214, 1)'
                        }]),
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(52, 255, 186, .3)'
                            }, {
                                offset: 1,
                                color: 'rgba(65, 124, 214, 1)'
                            }]),
                        },
                    }
                }]
            }
            ]
        }
        echart.setOption(option);
    }
}
