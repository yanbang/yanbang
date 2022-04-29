import fullServiceRightBottomPieChart from "./fullService-rightBottomPieChart"

export default {
    initChart(data) {
        const xAxis = data.xAxis
        const value = data.value
        const value1 = data.value1
        const legend = data.legend
        const valueto0 = data.valueto0
        const valueto50 = data.valueto50
        Highcharts.chart(data.id, {
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
                options3d: {
                    enabled: true,
                    alpha: 10,
                    beta: 0,
                    viewDistance: 65,
                    depth: 60
                },
                style: {
                    fontSize: '20px'
                },
                marginTop: 0,
                marginRight: 0
            },
            title: {
            text: '',
            },
            exporting: {
            enabled: false
            },
            credits: {
            enabled: false
            },
            xAxis: {
                categories: xAxis,
                tickWidth: '0',    	//设置刻度标签宽度
                lineColor: '#fff',//设置坐标颜色
                color: '#A9C0FF',
                lineWidth: 0,   //设置坐标宽度
                gridLineColor: 'transparent',
                labels: {
                    style: {
                        color: '#A9C0FF',
                        fontSize: '18px'
                    }
            },
            },
            yAxis: [
              { // Primary yAxis
               allowDecimals: false,
               gridLineColor: 'transparent',
               lineWidth: 0,
                labels: {
                   enabled: false,
                  style: {
                   color: 'transparent'
                  }
                },
                title: {
                  text: '量',
                  style: {
                    color: 'transparent'
                  }
                }
              }, 
            { // Secondary yAxis
                allowDecimals: false,
                gridLineColor: 'transparent',
                lineWidth: 0,
                title: {
                  text: '占比',
                  style: {
                    color: 'transparent'
                  }
                },
                labels: {
                  enabled: false,
                  style: {
                    color: 'transparent'
                  }
                },
                opposite: true
              }],
            tooltip: { 
                shared: true,
                borderColor: 'transparent',
                backgroundColor: 'rgba(50,50,50,0.7)',
                style: {
                    color: '#fff',
                    fontSize: '14px',
                }
            },
            plotOptions: {
            column: {
                stacking: 'normal',
                depth: 10
            },
            line: {
                dataLabels: {
                // 开启数据标签
                enabled: true,
                formatter: function () {
                    return this.point.y + '%';
                },
                style: {
                    fontSize: '14px',
                    color: '#fff',
                    border: 0
                }
                },
                // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                // enableMouseTracking: false
            }

            },
            legend: {
                itemStyle: {
                    fontSize: '14px',
                    color: '#A9C0FF',
                },
                series: legend
            },
            series: [
                {
                    name: legend[2],
                    data: valueto50,
                    stack: 'female',
                    color: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
                    stops: [
                        [0, Highcharts.Color('#5EDA0C').setOpacity(1).get('rgba')],
                        [1, '#BEFD5B']
                    ]  
                    }
                },
                {
                    name: legend[1],
                    data: valueto0,
                    stack: 'female',
                    color: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
                    stops: [
                            [0, Highcharts.Color('#F9D21E').setOpacity(1).get('rgba')],
                            [1, '#FDFB68']
                    ]  
                    }
                    
                },
                {
                    name: legend[0],
                    data: value,
                    stack: 'female',
                    color: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
                    stops: [
                            [0, Highcharts.Color('#06BDF5').setOpacity(1).get('rgba')],
                            [1, '#01F3FF']
                    ]  
                    }
                },
                {
                    name: legend[3],
                    data: value1,
                    type: 'line',
                    color: '#FF8279',
                    zIndex: '100',
                    yAxis: 1,
                    dataLabels: {
                        color: '#fff'
                    },
                    marker: {
                        radius: 6,  //曲线点半径，默认是4
                        symbol: 'circle' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                    },
                }
            ]
        });
    }
}
