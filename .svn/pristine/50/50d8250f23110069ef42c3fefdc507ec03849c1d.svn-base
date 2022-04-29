import echarts from 'echarts'  //引入echarts
export default {
    initChart(data) {
        const echart = echarts.init(document.getElementById(data.id));
        const value = data.value;
        var option = {
            title: {
                text: `{value|${value}}{unit|%}`,
                top: 'center',
                left: 'center',
                textStyle: {
                    rich: {
                        value: {
                            fontSize: 18,
                            color: '#fff'
                        },
                        unit: {
                            fontSize: 12,
                            color: '#fff',
                            padding: [0, 0, -0, 5],
                            fontWeight: 700

                        }
                    }
                }

            },
            series: [
                {
                    name: "内部进度条",
                    type: "gauge",
                    // center: ['20%', '50%'],
                    radius: '90%',
                    splitNumber: 10,

                    axisLine: {
                        lineStyle: {
                            color: [
                                [value / 100, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#8534E9'
                                }, {
                                    offset: 1,
                                    color: '#21F0E3'
                                }])],
                                [1, "#1D2088"]//底层环形颜色
                            ],
                            width: 5//环宽度
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: false
                    }
                }

            ]
        };
        echart.setOption(option);
    }
}
