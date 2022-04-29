import echarts from 'echarts'
//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
  let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
  let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
  return {
    x: x1,
    y: y1
  }
}

export default {
  initChart(teamData, list) {
    var echart = echarts.init(document.getElementById(teamData.id))
    var angle = 0 //角度，用来做简单的动画效果的
    var value = teamData.value
    var circleValue = value > 100 ? 100 : value
    var echartName = teamData.name
    var chainRatio = teamData.chainRatio
    var chainRatioValue = teamData.chainRatioValue
    var subTitle = teamData.subTitle
    var value1 = teamData.value1
    var index = teamData.index

    var option = {
      backgroundColor: 'transparent',
      title: [{
        show: true,
        text: '{a|' + value + '}{c|%}',
        x: 'center',
        y: '30%',
        textStyle: {
          rich: {
            a: {
              fontSize: 18,
              color: '#fff',
              fontWeight: 400,
              fontFamily: 'DigifaceWide'
            },
            c: {
              fontSize: 12,
              color: '#fff',
              fontWeight: 400,
              fontFamily: 'DigifaceWide'
              // padding: [5,0]
            }
          }
        }
      },
      {
        text: echartName,
        subtext: '{a| ' + chainRatioValue + '} {c| ' + chainRatio + '}',
        left: 'center',
        // bottom: index > 2 ? '20%' : '5%',
        bottom: '5%',
        textStyle: {
          color: '#52C0DF',
          fontSize: 12,
          fontWeight: 400,
          align: 'center'
        },
        subtextStyle: {
          rich: {
            a: {
              fontSize: 18,
              color: '#fff',
              fontWeight: 'normal',
              fontFamily: 'Adobe Heiti Std'
            },
            c: {
              fontSize: 12,
              color: '#fff',
              fontWeight: 'normal',
              fontFamily: 'Adobe Heiti Std'
              // padding: [5,0]
            }
          }
        }
      },
      {
        show: subTitle && true,
        text: subTitle,
        subtext: '{a| ' + value1 + '} {c| ' + chainRatio + '}',
        left: 'center',
        bottom: 0,
        textStyle: {
          color: '#52C0DF',
          fontSize: 12,
          fontWeight: 400,
          align: 'center'
        },
        subtextStyle: {
          rich: {
            a: {
              fontSize: 18,
              color: '#fff',
              fontWeight: 'normal',
              fontFamily: 'Adobe Heiti Std'
            },
            c: {
              fontSize: 12,
              color: '#fff',
              fontWeight: 'normal',
              fontFamily: 'Adobe Heiti Std'
              // padding: [5,0]
            }
          }
        }
      }],
      legend: false,
      series: [{
        name: 'ring5',
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2 * 0.7,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
              startAngle: (0 + angle) * Math.PI / 180,
              endAngle: (90 + angle) * Math.PI / 180
            },
            style: {
              stroke: '#218CC8',
              fill: 'transparent',
              lineWidth: 1
            },
            silent: true
          }
        },
        data: [0]
      }, {
        name: 'ring5',
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2 * 0.7,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
              startAngle: (180 + angle) * Math.PI / 180,
              endAngle: (270 + angle) * Math.PI / 180
            },
            style: {
              stroke: '#218CC8',
              fill: 'transparent',
              lineWidth: 1
            },
            silent: true
          }
        },
        data: [0]
      }, {
        name: 'ring5',
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2 * 0.7,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9,
              startAngle: (270 + -angle) * Math.PI / 180,
              endAngle: (40 + -angle) * Math.PI / 180
            },
            style: {
              stroke: '#218CC8',
              fill: 'transparent',
              lineWidth: 1
            },
            silent: true
          }
        },
        data: [0]
      }, {
        name: 'ring5',
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2 * 0.7,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9,
              startAngle: (90 + -angle) * Math.PI / 180,
              endAngle: (220 + -angle) * Math.PI / 180
            },
            style: {
              stroke: '#218CC8',
              fill: 'transparent',
              lineWidth: 1
            },
            silent: true
          }
        },
        data: [0]
      }, {
        name: 'ring5',
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2
          let y0 = api.getHeight() / 2 * 0.7
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9
          let point = getCirlPoint(x0, y0, r, (90 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 3
            },
            style: {
              stroke: '#218CC8', 
              fill: '#218CC8'
            },
            silent: true
          }
        },
        data: [0]
      }, {
        name: 'ring5', //绿点
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
          let x0 = api.getWidth() / 2
          let y0 = api.getHeight() / 2 * 0.7
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9
          let point = getCirlPoint(x0, y0, r, (270 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 3
            },
            style: {
              stroke: '#218CC8', //绿
              fill: '#218CC8'
            },
            silent: true
          }
        },
        data: [0]
      }, {
        name: '',
        type: 'pie',
        radius: ['75%', '55%'],
        center: ['50%', '35%'],
        silent: true,
        clockwise: true,
        startAngle: 90,
        z: 0,
        zlevel: 0,
        label: {
          normal: {
            position: 'center',

          }
        },
        data: [{
          value: circleValue,
          name: '',
          itemStyle: {
            normal: {
              color: { // 完成的圆环的颜色
                colorStops: [{
                  offset: 0,
                  color: '#4FADFD' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#28E8FA' // 100% 处的颜色
                }]
              },
            }
          }
        },
        {
          value: 100 - circleValue,
          name: '',
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#173164'
            }
          }
        }
        ]
      },

      {
        name: '',
        type: 'gauge',
        radius: '80%',
        center: ['50%', '35%'],
        startAngle: 0,
        endAngle: 359.9,
        splitNumber: 8,
        hoverAnimation: true,
        axisTick: {
          show: false
        },
        splitLine: {
          length: 17,
          lineStyle: {
            width: 3,
            color: '#061740'
          }
        },
        axisLabel: {
          show: false
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            opacity: 0
          }
        },
        detail: {
          show: false
        },
        data: [{
          value: 0,
          name: ''
        }]
      },

      ]
    }


    function draw() {
      angle = angle + 3
      echart.setOption(option, true)
      //window.requestAnimationFrame(draw)
    }

    // list.map((i,index) => {
    //   var timer = `timer${index}`
    //   clearInterval(`timer${index}`)
    //   timer = setInterval(function () {
    //     draw()
    //   }, 100)
    // })

    echart.setOption(option)
  }
}
