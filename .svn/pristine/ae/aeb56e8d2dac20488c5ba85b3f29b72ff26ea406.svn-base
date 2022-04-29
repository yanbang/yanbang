import echarts from 'echarts'  //引入echarts

export default {
    initChart(data) {
        const echart = echarts.init(document.getElementById(data.id));
        let chartData = data.value;

        var option = {
            legend: {
                show: false
            },
            title: {
                text: `{value|${chartData}}{unit|%}`,
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
                            padding: [0, 0, 6, 1],
                            fontWeight: 700

                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                clockwise: false,
                radius: ['90%', '90%'],
                zlevel: 3,
                hoverAnimation: false,
                label: {
                    show: false,
                },
                data: [{
                    value: chartData > 100 ? 0 : 100 - chartData,
                    itemStyle: {
                        color: 'transparent',
                    }
                }, {
                    value: chartData > 100 ? 100 : chartData,
                    itemStyle: {
                        normal: {
                            borderWidth: 6,
                            borderColor: chartData > 100 ? '#E1E72A' : '#2AE1E7',
                            color: '#2AE1E7',

                        }
                    },
                },]
            },
            {
                type: 'pie',
                clockwise: false,
                radius: ['90%', '90%'],
                hoverAnimation: false,
                zlevel: 2,
                label: {
                    show: false,
                },
                itemStyle: {
                    color: '#1D2088',
                    borderWidth: 6,
                    borderColor: '#1D2088',
                },
                data: [100]
            }
            ]

        };
        echart.setOption(option);
    }
}
