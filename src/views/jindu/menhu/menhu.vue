<!--宽带-规划建设 -->
<template>
  <div class="contentbox">
    <Header title="" subtitle=" "></Header>
    
    <div class="contentbody">
      <!-- 左 -->
      <div class="leftbox flex colflex">
        <!-- 左1 -->
        <div class="box-item flex colflex ">
           
          <div class="sTitle">
            <h3>资源概览 <span>Resource overview</span></h3>
            <hr class="xian"/>
          </div>

          <div class="flex sanfen">
                <div class="sanfen1">
                  <label>GPU服务器</label>
                  <h3>100<span>个</span></h3>            
                  <div class="juedui" ref="zuo2echart1" ></div>
                </div>
                <div class="sanfen1">
                  <label>裸金属服务器</label>
                  <h3>234<span>个</span></h3>
                  <div class="juedui" ref="zuo2echart2" ></div>
                </div>
                <div class="sanfen1" style="margin-right: 0px;">
                  <label>宿主机服务器</label>
                  <h3>360<span>个</span></h3>
                  <div class="juedui" ref="zuo2echart3" ></div>
                </div>
          </div>
          <div class="flex sanfen">
                <div class="sanfen1">
                  <label>GPU服务器</label>
                  <h3>100<span>个</span></h3>            
                  <div class="juedui" ref="zuo2echart4" ></div>
                </div>
                <div class="sanfen1">
                  <label>裸金属服务器</label>
                  <h3>234<span>个</span></h3>
                  <div class="juedui" ref="zuo2echart5" ></div>
                </div>
                <div class="sanfen1" style="margin-right: 0px;">
                  <label>宿主机服务器</label>
                  <h3>360<span>个</span></h3>
                  <div class="juedui" ref="zuo2echart6" ></div>
                </div>
          </div>
        </div>
        <!-- 左2 -->
        <div class="box-item flex colflex " style="margin-top: 10px;">
           
          <div class="sTitle">
            <h3>虚拟机月度趋势图 <span>Virtual machine monthly trend chart</span></h3>
            <hr class="xian"/>
          </div>
        
          <div class="flex " style="height: 14vh; ">
             <div class="chartbox"  ref="qushi1"></div> 
          </div>
          
        </div>
        <!-- 左3 -->
        <div class="box-item flex colflex " style="margin-top: 10px;">
           
          <div class="sTitle">
            <h3>业务系统概览 <span>Business system overview</span></h3>
            <hr class="xian"/>
          </div>
        
          <div class="flex " style="height: 18vh;">
             <div class="chartbox"  ref="bingtu1"></div> 
          </div>
          
        </div>
        
        <!-- 左4 -->
        <div class="box-item flex colflex " style="margin-top: 10px;">
           
          <div class="sTitle">
            <h3>私有云和公有云示意图 <span>Private cloud and public cloud</span></h3>
            <hr class="xian"/>
          </div>
        
          <div class="flex " style="height: 16vh;">
            
            <div class="zuoyun">
              <span class="yunzis">   
                <label class="yunzi">移动云</label>
                <label class="yunzi">华为</label>
                <label class="yunzi">行业云</label>
                <label class="yunzi">其他</label>
              </span>
              <span class="yunxian"></span>
              <span class="yuntu"></span>        
            </div>
            <div class="youyun">
              <span class="yunzis">   
                <label class="yunzi">移动云</label>
                <label class="yunzi">华为</label>
                <label class="yunzi">行业云</label>
                <label class="yunzi">其他</label>
              </span>
              <span class="yunxian"></span>
              <span class="yuntu"></span>        
            </div> 
             
          </div>
          
        </div>
        
        
        
        

        
      </div>
      <!-- 中 -->
      <div class="centerbox flex colflex">
        <div class="fangks"  >
          <div class="fangk"  > 
              <h1> <img src="~@/assets/menhuimg/数据仓库.svg"/></h1>
              <h2>资源池自动愈合</h2>
              <h3>8<span>个</span></h3>            
          </div>
          <div class="fangk"  >
              <h1> <img src="~@/assets/menhuimg/公有云.svg"/></h1>
              <h2>公有云</h2>
              <h3>6<span>个</span></h3>            
          </div>
          <div class="fangk"  >
              <h1> <img src="~@/assets/menhuimg/私有云.svg"/></h1>
              <h2>私有云</h2>
              <h3>2<span>个</span></h3>            
          </div>
          <div class="fangk"  >
              <h1> <img src="~@/assets/menhuimg/主机.svg"/></h1>
              <h2>主机</h2>
              <h3>1300<span>台</span></h3>            
          </div>
          <div class="fangk"  >
              <h1> <img src="~@/assets/menhuimg/云主机.svg"/></h1>
              <h2>云主机</h2>
              <h3>4900<span>台</span></h3>            
          </div>
          <div class="fangk"  >
              <h1> <img src="~@/assets/menhuimg/内存.svg"/></h1>
              <h2>内存</h2>
              <h3>150<span>TB</span></h3>            
          </div>
          <div class="fangk"   style="margin-right: 0;">
              <h1> <img src="~@/assets/menhuimg/存储.svg"/></h1>
              <h2>存储</h2>
              <h3>30<span>PB</span></h3>            
          </div>
        </div>

        <div class="zjmap">
          <zjmap   ref="zjmapDom" height="叫爸爸"></zjmap>
        </div>


      </div>
      <!-- 右 -->
      <div class="rightbox flex colflex">
        <!-- 右1 -->
        <div class="box-item flex colflex ">
           
          <div class="sTitle">
            <h3>告警统计 <span>Alarm node statistics</span></h3>
            <hr class="xian"/>
          </div>
        
          <div class="flex changtiao">
                <div class="changtiao1">
                  <h1 style="margin: 10px 0px;">活动告警</h1>
                  <h2><img src="~@/assets/menhuimg/gj-dot-green.svg"/></h2>
                  <h3>2000</h3>
                  <h4>发现</h4>  
                  <div  class="xian4">  </div>
                </div>
                <div class="changtiao1">
                  <h1 style="margin: 10px 0px;">清除告警</h1>
                  <h2><img src="~@/assets/menhuimg/gj-dot-blue.svg"/></h2>
                  <h3>500</h3>
                   
                  
                  <h1>待处理告警</h1>
                  <h2><img src="~@/assets/menhuimg/gj-dot-blue.svg"/></h2>
                  <h3>1500</h3>
                  <h4>分析</h4> 
                   <div  class="xian5">  </div>
                </div>
                <div class="changtiao1" style="margin-right: 0px;">
                  <h1  style="margin-top: 110px;">自动派单</h1>
                  <h2><img src="~@/assets/menhuimg/gj-dot-yellow.svg"/></h2>
                  <h3>2000</h3>
                  
                  <h1>自动愈合</h1>
                  <h2><img src="~@/assets/menhuimg/gj-dot-yellow.svg"/></h2>
                  <h3>2000</h3>
                  
                  <h4>处理</h4>  
                   
                </div>
          </div>
          
        </div>
        <!-- 右2 -->
        <div class="box-item flex colflex " style="margin-top: 10px;">
           
          <div class="sTitle">
            <h3>故障分析 <span>fault analysis</span></h3>
            <hr class="xian"/>
          </div>
        
          <div class="flex " style="height: 13vh; ">
             <div class="chartbox"  ref="zhuzi1"></div> 
          </div>
          
        </div>
        <!-- 右3 -->
        <div class="box-item flex colflex " style="margin-top: 10px;">
           
          <div class="sTitle">
            <h3>工单分析 <span>Work order type statistics</span></h3>
            <hr class="xian"/>
          </div>
        
          <div class="flex sifen" >
            <div class="sifen1">
              <label>待处理</label>
              <h3>22<span>个</span></h3>  
            </div>
            <div class="sifen1">
              <label>在途</label>
              <h3>66<span>个</span></h3>  
            </div>
            <div class="sifen1">
              <label>已完成</label>
              <h3>85<span>个</span></h3>  
            </div>
            <div class="sifen1">
              <label>归档</label>
              <h3>34<span>个</span></h3>  
            </div>
          </div>
          
          <div class="flex " style="height: 18vh; ">
             <div class="chartbox"  ref="qushi2"></div> 
          </div>
          
        </div>
        


      </div>
    </div>


  </div>
</template>

<script>
  import Header from '@/components/resource_visual/header4'
  import Footer from '@/components/resource_visual/footer'
  import waterPoloChart from '@/views/resource_visual/echarts_component/waterPoloChart'
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import axios from 'axios'

  import echarts from 'echarts'

  import zjmap from './sxmap_x.vue'

  import MyCity from '@/components/citys.vue'

  var self = null

  function getRandom(start = .6, end = 1) {
    let num = Math.random() * (end - start) + start;
    return num
  }

  export default {
    data() {
      return {

        provAndCity: {
           province: '',          // 城市
           city: ''
        },
        value: '',
        value1: '',
        cityName: '',
        areaName: '',
        startTime: '',
        endTime: '',




        smapdata: {},

        cbOrderNum: {},
        ddhdata: {},
        total: {},
        total2: {},
        total3: {},
        total4: {},
        total5: {},
        total6: {},
        total7: {},
        total8: {},
        total9: {},
        total10: {},
        total11: {},
        total12: {},
        total13: {},
        total14: {},
        total15: {},
        total16: {},
        total1_1: {},
        total1_2: {},
        total1_3: {},
        total1_4: {},
        total1_5: {},
        total1_6: {},

        page: 1,

        moretable5_1: false,
        moretable5_2: false,
        moretable5_3: false,
        moretable5_4: false,
        moretable5_5: false,
        moretable5_6: false,

        moretable1: false,

        tableData1: [],
        tableData1_2: [],
        tableData1_3: [],
        tableData1_4: [],
        tableData1_5: [],
        tableData1_6: [],
        tableData5_1: [],
        tableData5_2: [],
        tableData5_3: [],
        tableData5_4: [],
        tableData5_5: [],
        tableData5_6: [],
        tableData5_7: [],
        tableData5_8: [],
        tableData5_9: [],
        tableData5_10: [],
        tableData5_11: [],
        tableData5_12: [],
        tableData5_13: [],
        tableData5_14: [],
        tableData5_15: [],
        tableData5_16: [],

        xiangqing0: false,
        tableData0_1: [],
        tableData0_2: [],
        tableData0_3: [],
        tcolums0_1: [{
            title: '地市',
            filed: 'district_name'
          },
          {
            title: '进度慢的工单数',
            filed: 'gj_num',
            width: 'auto',
            sortable: true
          },
          {
            title: '工单数',
            filed: 'gd_num',
            width: 'auto',
            sortable: true
          },
          {
            title: '进度慢比例',
            filed: 'jd_rate',
            width: 'auto',
            sortable: true
          },
        ],
        tcolums0_2: [{
            title: '地市',
            filed: 'district_name'
          },
          {
            title: '零产能小区数',
            filed: 'lcn_num',
            width: 'auto',
            sortable: true
          },
          {
            title: '小区数',
            filed: 'z_num',
            width: 'auto',
            sortable: true
          },
          {
            title: '零产能比例',
            filed: 'lcn_rate',
            width: 'auto',
            sortable: true
          },
        ],
        tcolums0_3: [{
            title: '地市',
            filed: 'district_name'
          },
          {
            title: '未竣工工单数',
            filed: 'wjg_num',
            width: 'auto',
            sortable: true
          },
          {
            title: '小区数',
            filed: 'z_num',
            width: 'auto',
            sortable: true
          },
          {
            title: '未竣工比例',
            filed: 'wjg_rate',
            width: 'auto',
            sortable: true
          },
        ],

        tcolums5: [{
            title: '地级市',
            filed: 'cityName',
            width: 'auto',
            sortable: true
          },
          {
            title: '区',
            filed: 'areaName',
            width: 'auto',
            sortable: true
          },
          {
            title: '小区名称',
            filed: 'dzName',
            width: 'auto',
            sortable: true
          },
          {
            title: '≥1000M用户数',
            filed: 'speedOver1000mUsers',
            width: 'auto',
            sortable: true
          },
          {
            title: 'FTTH宽带用户数',
            filed: 'broadUsersFtth',
            width: 'auto',
            sortable: true
          },
          {
            title: '分光器端口利用率',
            filed: 'FgqPortUsageRate',
            width: 'auto',
            sortable: true
          },
          {
            title: '分光器端口利用率2',
            filed: 'allPortNum',
            width: 'auto',
            sortable: true
          },
          {
            title: '融合用户数',
            filed: 'broadUsersFtth',
            width: 'auto',
            sortable: true
          },

        ],
        tcolums1: [{
            title: '地市',
            filed: 'city_name'
          },
          {
            title: '区县',
            filed: 'area_name',
            width: 'auto',
            sortable: true
          },
          {
            title: '需求提出人',
            filed: 'require_propose_user',
            width: '100',
            sortable: true
          },
          {
            title: '需求提出时间',
            filed: 'require_propose_data',
            width: '150',
            sortable: true
          },
          {
            title: '项目名称',
            filed: 'project_name',
            width: '300',
            sortable: true
          },
          {
            title: '工单编码',
            filed: 'order_num',
            width: 'auto',
            sortable: true
          },
          {
            title: '工单名称',
            filed: 'order_name',
            width: 'auto',
            sortable: true
          },
          {
            title: '项目编码',
            filed: 'project_num',
            width: 'auto',
            sortable: true
          },

          {
            title: '当前所处环节',
            filed: 'current_work',
            width: 'auto',
            sortable: true
          },
          {
            title: '建设性质',
            filed: 'scene_type',
            width: 'auto',
            sortable: true
          },


          {
            title: '需求估算投资',
            filed: 'estimate_invest',
            width: 'auto',
            sortable: true
          },
          {
            title: '设计批复时间',
            filed: 'sj_pf_time',
            width: 'auto',
            sortable: true
          },
          {
            title: '设计批复金额',
            filed: 'sj_pf_invest',
            width: 'auto',
            sortable: true
          },
          {
            title: '工程施工结束时间',
            filed: 'sg_end_time',
            width: 'auto',
            sortable: true
          },
          {
            title: '能力交付时间',
            filed: 'deliver_time',
            width: 'auto',
            sortable: true
          },

        ],



        dagedata: {},
        dagedata2: {},
        dagedata3: {},
        dagedata4: {},
        dagedata5: {},
        dagedata6: {},
        rowttabStatus100: '1',
        isShow2_1: true,
        rowttabStatus: '1',
        rowttabStatus2: '1',
        dialogtabs: '1',
        dialogtabs2: '1',
        dialogtabs3: '1',
        dialogtabs4: '1',
        dialogtabs5: '1',
        dialogtabs6: '1',
        dialogtabs7: '1',
        dialogtabs8: '1',

        cityName: '全省',
        hoverCityName: '',
        xiangqing1: false,
        zidingyi: false,
        historyData: [],
        
        isDialogShow: false,
      }
    },
    components: {
      Header,
      Footer,
      vueSeamlessScroll,
      zjmap,
      MyCity
    },
    created() {
      self = this


    },
    mounted() {
      this.getzuo2echart1Data()
      this.getzuo2echart2Data()
      this.getzuo2echart3Data()
      this.getzuo2echart4Data()
      this.getzuo2echart5Data()
      this.getzuo2echart6Data()
      this.getqushi1echarts()
      this.getbingtu1echarts()
      this.getqushi2echarts()
      this.getzhuzi1echarts()

    },
    watch: {

      // cityName(val) {
      //   this.getZJMapData();
      // }

    },
    computed: {

    },

    methods: {
      
      getzuo2echart1Data() {
        var value = 0.286
        var value2 = value*100
        var value3 = value2.toFixed(1)
        const option = {
          
          backgroundColor:'rgba(0,0,0,0)',
          title: 
            [{
                    text: "内存使用率",
                    left:10,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#9ECFDF',
                      fontSize: 12,
                    },
                    
                },{
                    text: value3  + '%',
                    left:75,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#27FF9F',
                      fontSize: 14
                    }
                }],
                
          series: [
            {
              type: 'liquidFill',
              radius: '150%,100%',
              center: ['50%', '50%'],
              shape: 'rect', 
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: '#ffffff',
                    insideColor: '#ff8c00',
                    fontSize: 20
                  }
                }
              },
              color: [
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(122, 255, 136, 0.36)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(39, 255, 159, 0)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              data: [value, value], // data个数代表波浪数
              
              outline: {
                show: false
              },
              backgroundStyle: {
                borderWidth: 0,
                borderColor: 'rgba(55, 211, 255, 0)',
                color: 'rgba(122, 255, 136, 0)'
              },
            }
          ]
        }
      
        const dom = this.$refs.zuo2echart1
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getzuo2echart2Data() {
        var value = 0.423
        var value2 = value*100
        var value3 = value2.toFixed(1)
        const option = {
          
          backgroundColor:'rgba(0,0,0,0)',
          title: 
            [{
                    text: "内存使用率",
                    left:10,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#9ECFDF',
                      fontSize: 12,
                    },
                    
                },{
                    text: value3  + '%',
                    left:75,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#27FF9F',
                      fontSize: 14
                    }
                }],
                
          series: [
            {
              type: 'liquidFill',
              radius: '150%,100%',
              center: ['50%', '50%'],
              shape: 'rect', 
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: '#ffffff',
                    insideColor: '#ff8c00',
                    fontSize: 20
                  }
                }
              },
              color: [
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(122, 255, 136, 0.36)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(39, 255, 159, 0)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              data: [value, value], // data个数代表波浪数
              
              outline: {
                show: false
              },
              backgroundStyle: {
                borderWidth: 0,
                borderColor: 'rgba(55, 211, 255, 0)',
                color: 'rgba(122, 255, 136, 0)'
              },
            }
          ]
        }
      
        const dom = this.$refs.zuo2echart2
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getzuo2echart3Data() {
        var value = 0.802
        var value2 = value*100
        var value3 = value2.toFixed(1)
        const option = {
          
          backgroundColor:'rgba(0,0,0,0)',
          title: 
            [{
                    text: "内存使用率",
                    left:10,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#9ECFDF',
                      fontSize: 12,
                    },
                    
                },{
                    text: value3  + '%',
                    left:75,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#rgba(255, 96, 75, 1)',
                      fontSize: 14
                    }
                }],
                
          series: [
            {
              type: 'liquidFill',
              radius: '150%,100%',
              center: ['50%', '50%'],
              shape: 'rect', 
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: '#ffffff',
                    insideColor: '#ff8c00',
                    fontSize: 20
                  }
                }
              },
              color: [
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255, 119, 92, 0.36)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255, 77, 77, 0)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              data: [value, value], // data个数代表波浪数
              
              outline: {
                show: false
              },
              backgroundStyle: {
                borderWidth: 0,
                borderColor: 'rgba(55, 211, 255, 0)',
                color: 'rgba(122, 255, 136, 0)'
              },
            }
          ]
        }
      
        const dom = this.$refs.zuo2echart3
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getzuo2echart4Data() {
        var value = 0.773
        var value2 = value*100
        var value3 = value2.toFixed(1)
        const option = {
          
          backgroundColor:'rgba(0,0,0,0)',
          title: 
            [{
                    text: "内存使用率",
                    left:10,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#9ECFDF',
                      fontSize: 12,
                    },
                    
                },{
                    text: value3  + '%',
                    left:75,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#rgba(255, 96, 75, 1)',
                      fontSize: 14
                    }
                }],
                
          series: [
            {
              type: 'liquidFill',
              radius: '150%,100%',
              center: ['50%', '50%'],
              shape: 'rect', 
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: '#ffffff',
                    insideColor: '#ff8c00',
                    fontSize: 20
                  }
                }
              },
              color: [
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255, 119, 92, 0.36)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255, 77, 77, 0)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              data: [value, value], // data个数代表波浪数
              
              outline: {
                show: false
              },
              backgroundStyle: {
                borderWidth: 0,
                borderColor: 'rgba(55, 211, 255, 0)',
                color: 'rgba(122, 255, 136, 0)'
              },
            }
          ]
        }
      
        const dom = this.$refs.zuo2echart4
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getzuo2echart5Data() {
        var value = 0.152
        var value2 = value*100
        var value3 = value2.toFixed(1)
        const option = {
          
          backgroundColor:'rgba(0,0,0,0)',
          title: 
            [{
                    text: "内存使用率",
                    left:10,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#9ECFDF',
                      fontSize: 12,
                    },
                    
                },{
                    text: value3  + '%',
                    left:75,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#27FF9F',
                      fontSize: 14
                    }
                }],
                
          series: [
            {
              type: 'liquidFill',
              radius: '150%,100%',
              center: ['50%', '50%'],
              shape: 'rect', 
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: '#ffffff',
                    insideColor: '#ff8c00',
                    fontSize: 20
                  }
                }
              },
              color: [
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(122, 255, 136, 0.36)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(39, 255, 159, 0)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              data: [value, value], // data个数代表波浪数
              
              outline: {
                show: false
              },
              backgroundStyle: {
                borderWidth: 0,
                borderColor: 'rgba(55, 211, 255, 0)',
                color: 'rgba(122, 255, 136, 0)'
              },
            }
          ]
        }
      
        const dom = this.$refs.zuo2echart5
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getzuo2echart6Data() {
        var value = 0.339
        var value2 = value*100
        var value3 = value2.toFixed(1)
        const option = {
          
          backgroundColor:'rgba(0,0,0,0)',
          title: 
            [{
                    text: "内存使用率",
                    left:10,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#9ECFDF',
                      fontSize: 12,
                    },
                    
                },{
                    text: value3  + '%',
                    left:75,
                    x: 'center',
                      y: '70%',
                    textStyle: {
                      color: '#27FF9F',
                      fontSize: 14
                    }
                }],
                
          series: [
            {
              type: 'liquidFill',
              radius: '150%,100%',
              center: ['50%', '50%'],
              shape: 'rect', 
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    color: '#ffffff',
                    insideColor: '#ff8c00',
                    fontSize: 20
                  }
                }
              },
              color: [
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(122, 255, 136, 0.36)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(39, 255, 159, 0)' // 100% 处的颜色
                    }
                  ]
                }
              ],
              data: [value, value], // data个数代表波浪数
              
              outline: {
                show: false
              },
              backgroundStyle: {
                borderWidth: 0,
                borderColor: 'rgba(55, 211, 255, 0)',
                color: 'rgba(122, 255, 136, 0)'
              },
            }
          ]
        }
      
        const dom = this.$refs.zuo2echart6
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getqushi1echarts() {
        const option = {
          legend: {
            data: ['虚拟机数'],
            left:'right',
            textStyle: {
              fontSize: '10px',
              fontFamily: 'PingFangSC-Regular, PingFang SC;',
              color: 'rgba(153, 198, 208, 1)'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid:{
            left:12,
            right:12,
            top:40,
            bottom:40
          },
          xAxis: [
            {
              type: 'category',
               
              boundaryGap: false,
              axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
              },
              axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                  show: false,
                  color: '#7ec7ff',
                  padding: 0,
                  fontSize: 14
                },
                formatter: function(data) {
                  return data
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
              },
              axisTick: {
                show: false,
              },
              axisPointer: {
                type: 'shadow'
              },
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月'],
              
            }
          ],
          yAxis: [
            
            {
              type: 'value',
              name: '                    单位：台',
               
              nameTextStyle: {
                color: 'rgba(255,255,255,0.5)'
              },
      
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
      
              splitArea: {
                 color: 'rgba(255,255,255,0.5)'
              },
              
              axisLabel: {
                show:false,
                formatter: '{value} %',
                color: 'rgba(255,255,255,0.5)'
              }
            }
          ],
          series: [
            
            {
              name: '虚拟机数',
              type: 'line',
              
              itemStyle: {
                normal: {
                  color: 'rgba(0, 255, 157, 0.5)',
                  barBorderRadius: 0
                }
              },
      
              data: [80, 55, 30, 45,  68, 48, 88, 76],
              smooth: true,
              areaStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(0, 255, 157, 0.4)' // 0% 处的颜色
                      },
                      {
                        offset: 0.9,
                        color: 'rgba(0, 255, 157, 0)' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          ]
        }
      
        const dom = this.$refs.qushi1
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getbingtu1echarts() {
        const option = {
             color:['rgba(82, 116, 255, 1)','rgba(15, 184, 255, 1)','rgba(0, 255, 229, 1)','rgba(149, 255, 0, 1)','rgba(255, 238, 49, 1)',
                          'rgba(255, 200, 99, 1)','rgba(255, 115, 115, 1)','rgba(196, 208, 222, 1)'],
            legend: {
              show:false,
             
            },
            
            toolbox: {
              show: false,
              feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
              }
            },
            
            series: [
              {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [30, 80],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                  borderRadius: 5
                },
                labelLine: {
                        length: 0,
                        length2: 0,
                        maxSurfaceAngle: 0
                },
                label: { 
                   normal: { 
                      position: 'out',
                         show : true
                      }
                },
           
                data: [
                  { value: 25, name: 'OSCAR行业应用', },
                  { value: 14, name: '位置基地行业' },
                  { value: 12, name: '内容OSCAR生产环境' },
                  { value: 10, name: '工业/金融/交通..' },
                  { value: 8, name: '研发测试' },
                  { value: 6, name: '容业务中台' },
                  { value: 5, name: '管信系统' },
                  { value: 5, name: '重点业务' }
                ]
              }
            ]
        }
      
        const dom = this.$refs.bingtu1
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getqushi2echarts() {
        const option = {
          legend: {
            data: ['工单处理及时率'],
            left:'right',
            textStyle: {
              fontSize: '10px',
              fontFamily: 'PingFangSC-Regular, PingFang SC;',
              color: 'rgba(153, 198, 208, 1)'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          grid:{
            left:12,
            right:12,
            top:40,
            bottom:40
          },
          xAxis: [
            {
              type: 'category',
               
              boundaryGap: false,
              axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
              },
              axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                  show: false,
                  color: '#7ec7ff',
                  padding: 0,
                  fontSize: 14
                },
                formatter: function(data) {
                  return data
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
              },
              axisTick: {
                show: false,
              },
              axisPointer: {
                type: 'shadow'
              },
              data: ['张江IDC', '颛桥IDC', '移动云', '苏研云', '苏研研发云', '上海移动云', '华为合营云', '沈阳行业云'],
              
            }
          ],
          yAxis: [
            
            {
              type: 'value',
              name: '                    单位：%',
               
              nameTextStyle: {
                color: 'rgba(255,255,255,0.5)'
              },
              
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              
              splitArea: {
                 color: 'rgba(255,255,255,0.5)'
              },
              
              axisLabel: {
                show:false,
                formatter: '{value} %',
                color: 'rgba(255,255,255,0.5)'
              }
            }
          ],
          series: [
            
            {
              name: '工单处理及时率',
              type: 'line',
              
              itemStyle: {
                normal: {
                  color: 'rgba(250, 255, 69, 0.5)',
                  barBorderRadius: 0
                }
              },
              
              data: [80, 55, 30, 45,  68, 48, 88, 76],
              smooth: true,
              areaStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(250, 255, 69, 0.4)' // 0% 处的颜色
                      },
                      {
                        offset: 0.9,
                        color: 'rgba(250, 255, 69, 0)' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            }
          ]
        }
      
        const dom = this.$refs.qushi2
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },
      getzhuzi1echarts() {
    
            
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          grid: {
            left: "7%",
            right: "2%",
            top: "20%",
            bottom: "23%"
          },
          color: [
            {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(255, 124, 30, 0.64)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(255, 124, 30, 0.16)' // 100% 处的颜色
              }]
            },
            {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(0, 255, 146, 0.64)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(0, 255, 146, 0.16)' // 100% 处的颜色
              }]
            },
            {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(0, 206, 255, 0.64)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(0, 206, 255, 0.16)' // 100% 处的颜色
              }]
            },
            
          ],
          legend: {
            top: 6,
            right: 0,
            itemWidth: 12,
            itemHeight: 8,
            itemGap: 18,
            data: ['自动愈合', '自动愈合2', '自动愈合3'],
            textStyle: {
              color: "rgba(255, 255, 255, 1)"
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['张江IDC', '颛桥IDC', '移动云', '苏研云', '苏研研发云', '上海移动云', '华为合营云', '沈阳行业云'],
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#000'
                }
              },
              axisLabel: {
                show: true,
                interval:0,
                formatter:function(params) {
                    var newParamsName = "";
                    var paramsNameNumber = params.length;
                    var provideNumber = 2;  //一行显示几个字
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }

                    } else {
                        newParamsName = params;
                    }
                    return newParamsName
                },
                textStyle: {
                    color: '#DFFCFF' //文字颜色
                }
              },
            }
          ],
          yAxis: [
            {
              name: '',
              type: 'value',
              min: 0,
              interval: 50,
              axisLabel: {
                formatter: '{value}',
                fontSize: 10,
                color: "rgba(255, 255, 255, 1)"
              },
              axisLine: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(179, 199, 244, 0.08)"
                }
              }
            }
          ],
          series: [
            {
              name: '自动愈合',
              type: 'bar',
              stack: 'total',
              barWidth: 12,
              data:  [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
            },
            {
              name: '自动愈合2',
              type: 'bar',
              stack: 'total',
              barWidth: 12,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            },
            {
              name: '自动愈合3',
              type: 'bar',
              stack: 'total',
              barWidth: 12,
              data: [1.8, 2.2, 3.3, 3.7, 6.3, 10.2, 26.3, 23.4, 23.0, 19.5, 12.0, 6.2]
            }
          ]
        };
      
        const dom = this.$refs.zhuzi1
        const echart = echarts.init(dom)
        echart.setOption(option)
        window.addEventListener('resize', () => {
          echart.resize()
        })
      },


      

      
      
      

      

      

      

      

      
      
      
     


      ///////////////////////////////////////////////////////////////////
    },




    destroyed() {
      // 在组件生命周期结束的时候销毁。
      window.removeEventListener('message', this.gismapListener, true)
    }
  }
</script>

<style lang="scss" scoped>
 

  .topmenudiv {
    z-index: 999;
    width: 800px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 70px;
    margin-left: -400px;
    text-align: center;

    .topmenu {
      cursor: pointer;
      font-size: 22px;
      font-family: MFBanHei;
      line-height: 40px;
      color: #1ec7fe;
      margin: 0px 10px 0px 10px;
    }

    .topmenuac {
      font-size: 22px;
      font-family: MFBanHei;
      font-weight: 100;
      height: 40px;
      line-height: 40px;
      color: #00ffff;
      margin: 0px 10px 0px 10px;
    }
  }

  .contentbody {
    height: calc(100vh - 100px);
    // background: url('~@/assets/images/bigScreen/bg-left.png') left no-repeat,
    //   url('~@/assets/images/bigScreen/bg-right.png') right no-repeat;
    // background-size: auto 100%;
    margin: -10px 15px 10px 15px;
    position: relative;
    display: flex;
  }

  /deep/ .el-dialog {
    -webkit-transform: none;
    transform: none;
    left: 0;
    position: relative;
    z-index: 20000;
    margin: 0 auto;
    padding-bottom: 30px;
    background-image: url('~@/assets/images/bigScreen/kuang.png');
    background-size: 100% 100%;
    background-color: rgba(220, 38, 38, 0);
  }

  /deep/ .el-dialog__body {
    padding: 0px 20px;
  }

  /deep/ .el-dialog__headerbtn {
    z-index: 9999;
  }

  /deep/ .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin: 2px 20px 0 0;
    border: 2px solid #193987;
    border-radius: 5px;
    background: #1e1e88;
  }

  /deep/ .el-table {
    background: none !important;
    font-size: 14px !important;
  }

  /deep/.dialogTableBg .el-table th {
    background: none !important;
    background: url('~@/assets/images/bigScreen/fullService/597bcdc505fa3.png') no-repeat !important;
    background-position: center 16px !important;
    background-size: contain !important;
    text-align: center !important;
    color: #02f6ff !important;
    font-size: 15px !important;
  }

  /deep/ .el-table tr {
    background: none !important;
  }

  /deep/.el-table td {
    background: none !important;
    border: none !important;
    text-align: center !important;
    color: #ffffff;
    padding: 6px 0;
  }

  /deep/.el-table td.is-left {
    text-align: left !important;
  }

  /deep/ .el-table th.is-leaf,
  .el-table td {
    border: none !important;
    color: #ffffff;
  }

  /deep/.el-table::before {
    height: 0 !important;
  }

  /deep/.el-table th>.cell {
    display: contents !important;
  }

  /deep/.el-table .cell {
    padding: 0 6px;
    max-height: 45px;
    overflow-y: hidden;
  }

  /deep/ .dialogTableBg .el-table tr:nth-child(even) {
    background: rgba(4, 54, 108, 0.4) !important;
  }

  .dialogCon {
    padding: 0 40px;

    .dialogTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 30px;
      border-bottom: 1px dashed #404e77;
      padding: 5px 0;

      .left {
        display: inline-block;
        padding-right: 110px;
        font-size: 20px;
        font-family: MFBanHei;
        font-weight: 400;
        color: #02f6ff;
        background-image: url('~@/assets/images/bigScreen/fullService/Rectangle 561.png');
        background-repeat: no-repeat;
        background-position: center right;
      }

      .title-right {
        color: #218cc8;
        font-size: 12px;
        font-family: Microsoft YaHei;

        div {
          width: 38px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          display: inline-block;
          cursor: pointer;
          background-image: url('~@/assets/images/bigScreen/fullService/left-sub.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }

        .active {
          color: #02f6ff;
          background-image: url('~@/assets/images/bigScreen/fullService/left-subActive.png');
        }
      }
    }
  }

  /deep/ .el-select .el-input__inner {
    height: 28px;
    // width: 100px;
    background: transparent;
    color: #1fe3ef;
    padding-right: 20px;
    padding-left: 10px;
    border-color: #3bc8d9;
  }

  /deep/ .bottom-tab {
    width: 60%;
  }

  /deep/ .bottom-tab .bottom-item {
    padding: 4px 30px !important;
  }



  .leftbox,
  .rightbox {
    z-index: 12;
    width: 460px;
    height: calc(100vh - 88px);
    box-sizing: border-box;
    margin: 20px  4px;
    padding: 16px;
    padding-bottom: 30px;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    
  }



  .centerbox {
    height: 98%;
    flex: 1;
     
    background-size: 100% 100%;
    margin-top:10px;
    margin-bottom: 0px;
    box-sizing: border-box;
    position: relative;
    padding: 10px 20px 10px 20px;
    position: relative;
  }

  .item-title {
    font-size: 18px;
    color: aqua;
    background: url('~@/assets/zj/bg_zj3_bt.png') no-repeat;
    background-size: 100% 100%;
    line-height: 26px;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 5px;
    font-weight: bolder;
    vertical-align: top;
  }

  .chartbox {
    width: 100%;
    height: 100%;
  }

  .gdjkitem {
    height: 68px;
    width: 72px;
    margin: 0 auto;
    background: url('~@/assets/images/images_zy/cire.png') no-repeat;
    background-size: 100% 100%;
    line-height: 68px;
    font-size: 18px;
    text-align: center;
    font-weight: bolder;
  }

  .gdjkitembox {
    text-align: center;
    position: relative;
    margin-top: 12px;

    &:not(:last-child)::after {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      background: url('~@/assets/images/images_zy/jiantou.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: -8px;
      top: 26px;
    }
  }

  .mtheader {
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #51d1ee;
    border-bottom: 1px solid #308497;
  }

  .mtbody {
    height: 100%;
    margin: 6px 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  .mtbody .scrollitem {
    text-align: center;
    height: 34px;
    line-height: 34px;
    padding: 0 5px;
  }

  .mtbody .scrollitem:nth-child(odd) {
    background: rgba(4, 54, 108, 0.7);
  }

  .centTab {
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 30px;
    text-align: center;

    .centtabitem {
      display: inline-block;
      height: 56px;
      width: 120px;
      line-height: 66px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      color: rgb(2, 252, 252);
      background: url('~@/assets/images/images_zy/WechatIMG431.png') no-repeat;
      background-size: 100% 120%;
      margin-right: -15px;
      opacity: 0.5;
    }

    .centtabitem.active {
      opacity: 1;
      font-weight: bold;
    }
  }

  .box-item {
    position: relative;
  }

  .toptabs {
    position: absolute;
    top: 60px;
    width: 100vw;
    height: 40px;
    line-height: 40px;
    text-align: center;

    .toptabs-item {
      padding: 4px 8px;
      border-radius: 5px;
      border: 1px solid #5b7bc9;
      margin-left: 10px;
      color: #698bdf;
      cursor: pointer;
    }

    .toptabs-item.active {
      border: 1px solid #45d8e2;
      color: #45d8e2;
      box-shadow: 0px 0px 8px rgba(62, 255, 253, 0.5) inset
    }
  }

  .rowttabs {
    height: 38px;
    line-height: 38px;
    position: absolute;
    top: 2px;
    right: 0;

    .rowttabs-item {
      padding: 4px 8px;
      border-radius: 5px;
      border: 1px solid #5b7bc9;
      margin-left: 10px;
      color: #698bdf;
      cursor: pointer;
    }

    .rowttabs-item.active {
      border: 1px solid #45d8e2;
      color: #45d8e2;
      box-shadow: 0px 0px 8px rgba(62, 255, 253, 0.5) inset
    }
  }

  .rowttabs.rowttabs2 {
    top: 0px;
    position: relative;
    text-align: center;

    .rowttabs-item {
      padding: 4px 10px;
      color: #ddd;
    }

    .rowttabs-item.active {
      border: 1px solid #45d8e2;
      color: #45d8e2;

    }
  }

  .piebox {
    text-align: center;
    height: 130px;
    position: relative;

    .chartbox {
      height: 100%;
    }

    .pieinfo {
      width: 100%;
      position: absolute;
      bottom: -10px;
      text-align: center;
      font-size: 16px;
    }
  }

  .pieboxbbs {
    .pieinfo {
      bottom: 5px !important;
    }
  }

  /deep/ .el-loading-mask {
    background-color: rgba(6, 26, 58, 0.7);
    z-index: 9999999;
  }

  /deep/.el-table__fixed {
    background: #010d2d !important;
  }

  /deep/.el-table__fixed::before,
  /deep/ .el-table__fixed-right::before {
    background: transparent !important;
  }

  @keyframes turn {
    0% {
      -webkit-transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(90deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
    }

    75% {
      -webkit-transform: rotate(270deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  .tjbtn {
    position: absolute;
    right: 60px;
    top: 40px;
    border-radius: 50%;
    padding: 4px;
    box-shadow: 0 0 10px rgb(56, 148, 235);
    cursor: pointer;
    animation: turn 8s linear infinite;
    z-index: 99;

    img {
      width: 44px;
      z-index: 99;
    }
  }

  .tjtitle {
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 1px;
    background: linear-gradient(45deg, #1a92d4, transparent);
    line-height: 34px;
    padding-left: 15px;
    border-radius: 20px 0 0 20px;
    width: 60%;
  }

  .tjitem {
    // padding: 10px;
    color: #fff;
    font-size: 20px;

    p {
      line-height: 48px;
      margin-bottom: 0;
    }
  }

  .lgwbox {
    text-align: center;

    .lgwnum {
      font-size: 20px;
      color: #f7e713;
    }

    .lgwimg {
      margin: -20px auto 0px auto;

      img {
        width: 100px;
      }
    }

    .lgwfont {
      font-size: 16px;
    }
  }

  .waterCharbox {
    height: 100px;
  }

  .waterCharbox2 {
    line-height: 30px;
    font-size: 18px;
    padding-top: 15px;
    box-sizing: border-box;
    text-align: left;
  }

  .lineinfo {
    display: inline-block;
    width: 80px;
    text-align: right;
  }

  .charrow {
    text-align: center;

    .waterinfo {
      margin-top: 15px;
      font-size: 16px;
      margin-bottom: 5px;
      color: #f5f5f5;
    }
  }


  .initselect.el-select-dropdown {
    background: rgb(9, 55, 112) !important;
  }

  .initselect .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: #07234d;
  }

  .initselect .el-select-dropdown__item {
    color: #fff;
  }

  .initselect .el-select-dropdown__item.selected {
    color: aqua;
  }

  .initselect.el-select-dropdown {
    border: solid 1px #93b1f7;
  }

  .initselect .popper__arrow::after {
    border-bottom-color: #093770 !important;
  }

  .sutabtitle {
    background: rgba(25, 89, 162, 0.3);
    height: 38px;
    border-radius: 10px;
    line-height: 38px;
  }

  .sutabtitle .flex1 {
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    opacity: 0.4;
    color: aqua;
    background: url('~@/assets/images/bigScreen/ligtdian.png') no-repeat;
    background-position: center -38px;
  }

  .sutabtitle .flex1.active {
    opacity: 1;
    font-weight: bolder;
  }

  .zdmore {
    float: right;
    font-size: 16px;
    cursor: pointer;
    color: #57b4f1;
    margin-right: 0px;
    text-decoration: underline;
    position: relative;
    z-index: 999;
    top: 2px;
  }

  .zjmap {

    width: 100%;
    height:100%;
  }

  .mapxia {
    width: 100%;
    height: 27%;
    margin-top: 3%;
    overflow: hidden;
  }

  .yujingimg {
    width: 198px;
    height: 95px;
    position: absolute;
    top: 40px;
    right: 40px;
    z-index: 100;
    background: url('~@/assets/zj/bg_zj4_ls5.png') no-repeat top center;
    background-size: 100% 100%;

    a {
      float: left;
      color: #00FFFF;
      font-weight: bold;
      padding: 8px 0px 0px 70px;

    }
  }

  .mapxia1 {
    width: 100%;
    height: 100%;
    float: left;
  }

  .mapxia2 {
    width: 100%;
    height: 100%;
    float: left;
  }

  .lgwbox2 {
    padding-top: 20px;
    text-align: center;
    height: 100%;

    .lgwnum2 {
      height: 100px;
      line-height: 120px;
      font-size: 2.25rem;
      margin-top: 20px;
      background: url('~@/assets/zj/bg_zj3_di6.png') no-repeat center center;
    }

    .lgwfont2 {
      font-size: 1.25rem;
    }
  }

  .lgwbox3 {
    text-align: center;
    background: url('~@/assets/zj/bg_zj3_di7.png') no-repeat center 40px;
    height: 100%;

    .lgwnum3 {
      height: 120px;
      line-height: 120px;
      font-size: 1.2rem;
    }

    .lgwfont3 {
      margin-top: 10px;
      font-size: 1rem;
      color: #82e0ff;
    }

    .lgwnum3_2 {
      font-size: 1.2rem;
    }
  }

  .lgwbox4 {
    text-align: center;
    border-radius: 3px;
    border: 1px solid rgba(37, 100, 204, 0.6);
    box-shadow: 0px 0px 21px rgba(19, 67, 205, 0.5) inset;
    padding: 10px;
    margin: 1%;
    width: 48%;

    .lgwimg4 {
      width: 44%;
      margin: 2%;
    }

    .lgwnumfont {
      width: 54%;
      text-align: left;
    }

    .lgwnum4 {
      width: 48%;
      margin-left: 2%;
      font-size: 1.2rem;
    }

    .lgwfont4 {
      font-size: 1rem;
      color: #82e0ff;
    }
  }
  .sTitle {
    background: url("~@/assets/menhuimg/dian.png") no-repeat left bottom;
    background-size: 27px 5px;
    
    padding-left: 0;
    padding-right: 0;
    position: relative;
    .xian{
      width: 395px;
      height: 1px;
      background: RGBA(19, 66, 71, 1);
      border: 0;
      position: absolute;
      top: 31px;
      left:33px
    }
    h3 {
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 30px;
      text-shadow: 0px 0px 8px rgba(31, 239, 255, 0.6);
      span{
        font-size: 12px;
        color: rgba(255, 255, 255, 0.26);
        text-shadow: 0px 0px 8px rgba(31, 239, 255, 0);
      }
    }
  }
  
 .sanfen {
   height: 100%;
   width: 100%;
   float: left;
   text-align: center;
   .sanfen1 {
     float: left;
     width: 136px;
     height: 90px;
     background:  url("~@/assets/menhuimg/sanfenbg.png") no-repeat top center;
     margin-top: 10px;
     margin-right: 10px;
     position: relative!important;
     z-index: 10;
     label {
       font-family: PingFangSC-Semibold, PingFang SC;
       font-weight: 600;
       color: #FFFFFF;
       font-size: 14px;
       line-height: 34px;
       width: 100%;
       float: left;
     }
     h3 {
       padding-bottom: 4px;
       margin: 0px 10px;
       font-size: 18px;
       font-family: AvantGardeITCbyBT-Medium, AvantGardeITCbyBT;
       font-weight: 500;
       color: #00D0FF;
       line-height: 18px;
       
       border-bottom:1px solid rgba(255, 255, 255, 0.2);
       span{
         font-size: 12px;
         font-family: PingFangSC-Regular, PingFang SC;
         font-weight: 400;
         color: rgba(255,255,255,0.4);
         line-height: 12px;
         margin-left: 6px
         ;
       }
     }
     .juedui{
       position: absolute;
       width: 136px;
       height: 90px;
       top:0;
       left:0;
       z-index: -1;
     }
   }
   
  .qushi1{
    width: 100%;
    height:170px;
  }
  
 }
 .zuoyun{
   width: 50%;
   height: 15vh;
    
   margin-top:10px;
   position: relative;
   .yunzis{
     margin-top:10px;
      float: left;
      width: 68px;
      height: 100px;
      .yunzi{
        float: left;
        width: 68px;
        height: 28px;
        line-height: 28px;
        margin: 4px ;
        background:  url("~@/assets/menhuimg/sanfenbg.png") no-repeat top center;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
   }
   .yunxian{
     margin-top:30px;
     float: left;
     width: 110px;
     height: 137px;
     background:  url("~@/assets/menhuimg/xian2.png") no-repeat top center;
   }
   .yuntu{
     position: absolute;
     right:-10px;
     top: 30px;

     
     width: 108px;
     height: 90px;
     background: url("~@/assets/menhuimg/GYun.svg") no-repeat top center;
   }
 }
 .youyun{
   width: 50%;
   height: 15vh;
    
   margin-top:10px;
   position: relative;
   .yunzis{
     margin-top:10px;
      float: right;
      width: 68px;
      height: 100px;
      .yunzi{
        float: left;
        width: 68px;
        height: 28px;
        line-height: 28px;
        margin: 4px ;
        background:  url("~@/assets/menhuimg/sanfenbg.png") no-repeat top center;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
   }
   .yunxian{
     margin-top:30px;
     float: right;
     width: 110px;
     height: 137px;
     background:  url("~@/assets/menhuimg/xian3.png") no-repeat top center;
   }
   .yuntu{
     position: absolute;
     left:-10px;
     top: 30px;
 
     
     width: 108px;
     height: 90px;
     background: url("~@/assets/menhuimg/SYun.svg") no-repeat top center;
   }
 }
.fangks{
  margin: 10px 3%;
  width: 93%;
  height: 130px;
   
  
  .fangk{
   float: left;
   width:112px;
   height: 98px;
   background:  url("~@/assets/menhuimg/fangks.png") no-repeat top center;
   text-align: center;
   margin-right: 10px;
   h1 {
     width: 100%;
     height: 30px;
     margin: 8px auto;
     
   }
   h2 {
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    font-size: 14px;
    width: 100%;
   }
   h3 {
     padding-bottom: 4px;
     margin: 0px 10px;
     font-size: 18px;
     font-family: AvantGardeITCbyBT-Medium, AvantGardeITCbyBT;
     font-weight: 500;
     color: #00D0FF;
     line-height: 18px;
 
     span{
       font-size: 12px;
       font-family: PingFangSC-Regular, PingFang SC;
       font-weight: 400;
       color: rgba(255,255,255,0.4);
       line-height: 12px;
       margin-left: 6px
       ;
     }
   }
  }
} 
.changtiao{
  width:100%;
  height: 37vh;
  .changtiao1{
    width: 136px;
    height: 332px;
    margin: 10px;   
    background:  url("~@/assets/menhuimg/gjBg.png") no-repeat top center;
    text-align: center;
    position: relative;
    h1{
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 12px;
      margin: 30px 0 10px 0;
    }
    h2{
      height: 80px;
      
    }
    h3{
      margin-top: -60px;
      font-size: 18px;
      font-family: AvantGardeITCbyBT-Medium, AvantGardeITCbyBT;
      font-weight: 500;
      color: #00FF92;
      line-height: 18px;
    }
    h4{
      position: absolute;
      bottom:-20px;
      left: 40px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #99C6D0;
      line-height: 20px;
    }
    .xian4{
      position: absolute;
      left:55px;
      top: 70px;   
      width: 178px;
      height: 136px;
      background: url("~@/assets/menhuimg/xian4.png") no-repeat top center;
      background-size: 90% 80%;
    }
    .xian5{
      position: absolute;
      left:55px;
      top: 170px;   
      width: 178px;
      height: 136px;
      background: url("~@/assets/menhuimg/xian4.png") no-repeat top center;
      background-size: 90% 80%;
    }
  }
}   
.sifen{
  width: 100%;
  height:7vh;
  float: left;
  text-align: center;
  .sifen1{
    float: left;
    width: 136px;
    height: 40px;
    background:  url("~@/assets/menhuimg/sifen.png") no-repeat center center;
    margin-top: 10px;
    margin-right: 10px;
    position: relative!important;
    z-index: 10;
    label {
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      font-size: 14px;
      line-height: 34px;
      width: 100%;
      float: left;
    }
    h3 {
      padding-bottom: 4px;
      margin: 0px 10px;
      font-size: 18px;
      font-family: AvantGardeITCbyBT-Medium, AvantGardeITCbyBT;
      font-weight: 500;
      color: #00D0FF;
      line-height: 18px;
      
       
      span{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255,255,255,0.4);
        line-height: 12px;
        margin-left: 6px
        ;
      }
    }
    
  }
}   
</style>
<style>
  .el-table {
    margin-bottom: 1.875rem;
  }

  .el-pagination {
    background: none;
    position: absolute;
    bottom: 1.2rem;
    left: 35%;
    color: aliceblue;
    text-align: center;
    h1{
      color: #FFFFFF;
      font-size: 14px;
    }
  }

  .el-pagination__total {
    color: aqua;
  }

  .el-pagination .btn-prev,
  .el-pagination .btn-next,
  .el-pager .number,
  .el-pagination button:disabled,
  .el-pager li {
    background-color: rgba(2, 32, 82, 0.8);
  }

  .el-form-item {
    margin: 5px 0px;
  }
  .el-input--mini .el-input__inner {
      height: 28px;
      line-height: 28px;
      background: transparent;
      border: 1px solid #3bc8d9;
  }
  .el-form-item__label {
      color: #02effa;
  }
  .el-picker-panel { 
      height: 300px !important;     
  }
  
  

</style>
