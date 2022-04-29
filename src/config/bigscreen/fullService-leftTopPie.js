import echarts from 'echarts'

export default {
    initPie(data) {
        var echart = echarts.init(document.getElementById(data.id))
        var value = data.value
        var max = 100

        var option = {
            backgroundColor: 'transparent',
            // backgroundColor: {
            //     image: "../../assets/images/bigScreen/fullService/left-center.png"
            // },
            // "color": ["#fff", '#fff', 'rgba(255,255,255,.2)'],
            "series": [{
                "type": "pie",
                "center": ["50%", "50%"],
                "radius": ["82%", "78%"],
                "hoverAnimation": false,
                "data": [{
                    "name": "",
                    "value": value,
                    "label": {
                        "show": true,
                        "position": "center",
                        "color": "#02F6FF",
                        formatter: [
                            `{a|${data.mum}}`,
                            '{b|户}'
                        ].join('\n'),
                        rich: {
                          a: {
                            fontSize: 18,
                            color: '#02F6FF',
                            fontWeight: 400,
                            fontFamily: 'DigifaceWide'
                          },
                          b: {
                            fontSize: 10,
                            color: '#02F6FF',
                            fontWeight: 400,
                            fontFamily: 'DigifaceWide'
                            // padding: [5,0]
                          }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#02F6FF',
                            borderColor: '#02F6FF',

                        }
                    },
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    "label": {
                        position: 'inside',
                        backgroundColor: {
                            image: "../../assets/images/bigScreen/fullService/down.png"
                        },
                        width: 12,
                        height: 12,
                        padding: 12
                    }
                }, {
                    value: 3,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 5,
                            borderColor: 'transparent',

                        }
                    }
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": max - value,
                    "label": {
                        show: false
                    },
                    "labelLine": {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            borderColor: '#fff',

                        }
                    },
                }, {
                    value: 5,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 5,
                            borderColor: 'transparent',

                        }
                    }
                }
                ]
            }]
        }

        echart.setOption(option)
    }
}
