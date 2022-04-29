<!--进度2 -->
<template>
  <div class="contentbox"  style="overflow-y: auto;">
    <!-- 头部 -->
    <div class="header">     
      <div class="big_title" @click="goToPage('/')">
        湖南移动2021年电信普遍服务无线主设备及配套工程
      </div>      
      <div class="small_title">
        B22303610217103 
      </div>      
      <div class="right_time"  >
        <span>{{gettime}}</span> 
      </div>
    </div>   
    <!-- 身体 -->
    <div class="contentbody">
      <!-- 左 -->
      <div class="leftbox flex colflex">
        <!-- 左1 -->
        <div class="box-item">
          
          
          <div class="flex1" style="height:32vh;">

            <div class="flex" style="margin: 2vh auto 1vh auto;height:15vh; ">
              
              <div class="zitizu">
                <div class="ziti1">省建设经理</div>
                <div class="ziti2">项目数</div>
                <div class="ziti3">13811118888</div>                 
              </div>
              <div class="zitizu2">
                <div class="ziti1">&nbsp; &nbsp; </div>
                <div class="ziti2">无主线项目</div>
                <div class="ziti3">专业</div>                 
              </div>
              <div  class="zitizu2">
                <div class="ziti1">&nbsp; &nbsp; </div>
                <div class="ziti2" >
                  <span style="color: #7cff00;">118</span> 
                  <span style="color: #82e0ff;">/ 653</span> </div>
                <div class="ziti3">已完工/总数</div>                 
              </div>
               
            </div>
            
            <div class="flex1" style="width:100%; height:15vh; ">
              
              <el-carousel :interval="0" arrow="always" class="rowbox">
                <el-carousel-item>
                  <div class="flex">
                    <span class="spanai1">
                      <a
                        <img src="./img/ren2.png" class="bg_sd15" /></br>
                        <label>某某某</label></br> 长沙</a>
                    </span>
                    <span class="spanai1">
                      <a
                        <img src="./img/ren2.png" class="bg_sd15" /></br>
                        <label>某某某</label></br> 株洲</a>
                    </span>
                    <span class="spanai1">
                      <a
                        <img src="./img/ren2.png" class="bg_sd15" /></br>
                        <label>某某某</label></br> 张家界</a>
                    </span>
                    <span class="spanai1">
                      <a
                        <img src="./img/ren2.png" class="bg_sd15" /></br>
                        <label>某某某</label></br> 益阳市</a>
                    </span>
                    
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div>
                    <span class="spanai1">
                      <a
                        <img src="./img/ren2.png" class="bg_sd15" /></br>
                        <label>某某某</label></br> 永州</a>
                    </span>
                  </div>
                </el-carousel-item>
              </el-carousel>
  
            </div>

          </div>
        </div>
        <!-- 左2 -->
        <div class="box-item">
          <div class="item-title">
            <span>设备物资</span>     
          </div>
         
          <div class="flex1" style="margin: 1vh auto">
            
            <h3 class="zhediebt" @click="isShow1_1=!isShow1_1">长沙</h3>
            
            <div class="liketable"  v-show="isShow1_1">
              <ul class="like0" style="width:40%;float: left;">
                <li class="like_bt"  >物资类型</li>
                <li v-for="item in list1" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:15%;float: left;">
                <li class="like_bt">型号</li>
                <li v-for="item in list2" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:15%;float: left;">
                <li class="like_bt">物资编码</li>
                <li v-for="item in list3" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:15%;float: left;">
                <li class="like_bt">设计数量</li>
                <li v-for="item in list4" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:15%;float: left;">
                <li class="like_bt">到货数量</li>
                <li v-for="item in list5" >{{item}}</li>
              </ul>
              
            </div>
            <h3 class="zhediebt" @click="isShow1_2=!isShow1_2">张家界</h3>
            <div class="liketable"  v-show="isShow1_2">
              <ul class="like0" style="width:40%;float: left;">
                <li class="like_bt"  >物资类型</li>
                <li v-for="item in list1" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:15%;float: left;">
                <li class="like_bt">型号</li>
                <li v-for="item in list2" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:15%;float: left;">
                <li class="like_bt">物资编码</li>
                <li v-for="item in list3" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:15%;float: left;">
                <li class="like_bt">设计数量</li>
                <li v-for="item in list4" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:15%;float: left;">
                <li class="like_bt">到货数量</li>
                <li v-for="item in list5" >{{item}}</li>
              </ul>
              
            </div>
            <h3 class="zhediebt" @click="isShow1_2=!isShow1_2">株洲</h3>
            <div class="liketable"  v-show="isShow1_3">
              <ul class="like0" style="width:40%;float: left;">
                <li class="like_bt"  >物资类型</li>
                <li v-for="item in list1" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:15%;float: left;">
                <li class="like_bt">型号</li>
                <li v-for="item in list2" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:15%;float: left;">
                <li class="like_bt">物资编码</li>
                <li v-for="item in list3" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:15%;float: left;">
                <li class="like_bt">设计数量</li>
                <li v-for="item in list4" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:15%;float: left;">
                <li class="like_bt">到货数量</li>
                <li v-for="item in list5" >{{item}}</li>
              </ul>
              
            </div>
            <h3 class="zhediebt">怀化</h3>
            <h3 class="zhediebt">衡阳</h3>
            <!-- <h3 class="zhediebt">岳阳</h3>
            <h3 class="zhediebt">常德</h3>
            <h3 class="zhediebt">邵阳</h3> -->
            <!-- <div class="liketable flex" v-show="rowttabStatus == 2">
              2     
            </div>
            <div class="liketable flex" v-show="rowttabStatus == 3">
              3           
            </div>
            <div class="liketable flex" v-show="rowttabStatus == 4">
              4    
            </div> -->
          </div>
        </div>
      </div>
      <!-- 中 -->
      <div class="centerbox flex colflex">
       
        <div class="flex1">
          <div class="item-title3">
            <span>标准工期</span>     
          </div>
          <dl class="liketable2" >
            <dt  style="width:10%;float: left;">
              项目前期
            </dt>
            <dd  style="width:66%;float: left;">
              项目建设期【11个月】，其中项目施工期【6个月】
            </dd>
            <dt  style="width:24%;float: left;">
               项目后期
            </dt>
            
          </dl>
          <dl class="liketable2" >
            
            <dd  style="width:46%;float: left;height: 3vh;line-height: 3vh;float: right;margin-right: 24%;">
              <div ref="chart1" style="width: 100%; height: 26px;"></div>
            </dd>
            
            
          </dl>
          <dl class="liketable2" >
            
            <dd  style="width:46%;float: left;height:3vh;line-height: 3vh;float: right;margin-right: 24%;">
              <div ref="chart2" style="width: 100%; height: 26px;"></div>
            </dd>
            
            
          </dl>
          <dl>
            <dd class="jindut" >
               
            </dd> 
          </dl>
        </div>
        <div class="flex">
          <div class="flex1" style="width: 48%;position: relative;">
            <div class="item-title4">
              <span>地市进度</span>     
            </div>
            <div class="flex1" style="text-align: center;  position: absolute; top: 10px; right:20px">
               <div class="rowttabs" style="margin: 0px auto;">
                 
                 <span class="rowttabs-item3" :class="{'active': rowttabStatus == '1'}"
                   @click="rowttabsClick('1')">完工率</span>
                 <span class="rowttabs-item3" :class="{'active': rowttabStatus == '2'}"
                   @click="rowttabsClick('2')">验收率</span>
               
               </div>
            </div>
            <div ref="chart3" style="width: 100%;height:20vh;" >
              
            </div>
          </div>
          
          <div class="flex1" style="width: 48%;position: relative;">
            <div class="item-title4">
              <span>任务派工</span>     
            </div>
            <div class="flex1" style="text-align: center;  position: absolute; top: 10px; right:20px">
               <div class="rowttabs" style="margin: 0px auto;">
                 
                 <span class="rowttabs-item3" :class="{'active': rowttabStatus2 == '1'}"
                   @click="rowttabsClick2('1')">施工队到达率</span>
                 <span class="rowttabs-item3" :class="{'active': rowttabStatus2 == '2'}"
                   @click="rowttabsClick2('2')">属地监理到达率</span>
               
               </div>
            </div>
            <div ref="chart4"  style="width: 98%;height: 20vh;" >
              
            </div>
          </div>
          
        </div>
        <div class="flex1" >
          <div class="item-title3">
            <span>设备物资</span>     
          </div>
          <div style="width: 100%;height:25vh;" >
            
            <div class="flex1" style="width:73%;height:25vh;float: left;">
              <div class="minibiaoti1">城市施工队配置</div>
              <div class="liketable" >
                <ul class="like0" style="width:24%;float: left;">
                  <li class="like_bt"  >全省</li>
                  <li v-for="item in list6" >{{item}}</li>
                </ul>
                
               
                <ul class="like2" style="width:5%;float: left;">
                  <li class="like_bt">长沙</li>
                  <li v-for="item in list7" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:5%;float: left;">
                  <li class="like_bt">株洲</li>
                  <li v-for="item in list8" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:5%;float: left;">
                  <li class="like_bt">湘潭</li>
                  <li v-for="item in list9" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:5%;float: left;">
                  <li class="like_bt">常德</li>
                  <li v-for="item in list10" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:5%;float: left;">
                  <li class="like_bt">郴州</li>
                  <li v-for="item in list11" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:5%;float: left;">
                  <li class="like_bt">衡阳</li>
                  <li v-for="item in list12" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:5%;float: left;">
                  <li class="like_bt">怀化</li>
                  <li v-for="item in list13" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:5%;float: left;">
                  <li class="like_bt">娄底</li>
                  <li v-for="item in list14" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:5%;float: left;">
                  <li class="like_bt">邵阳</li>
                  <li v-for="item in list15" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:5%;float: left;">
                  <li class="like_bt">益阳</li>
                  <li v-for="item in list16" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:5%;float: left;">
                  <li class="like_bt">永州</li>
                  <li v-for="item in list17" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:5%;float: left;">
                  <li class="like_bt">岳阳</li>
                  <li v-for="item in list18" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:7%;float: left;">
                  <li class="like_bt">张家界</li>
                  <li v-for="item in list19" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:7%;float: left;">
                  <li class="like_bt">自治州</li>
                  <li v-for="item in list20" >{{item}}</li>
                </ul>
                
                
              </div>
              
            </div>
            <div class="flex1" style="width:27%;height:25vh;float: left;">
              <div class="minibiaoti2">施工队任务配置</div>
              <div class="liketable" >
                
                <ul class="like0" style="width:22%;float: left;">
                  <li class="like_bt"  >长沙
                  </li>
                  <li v-for="item in list21" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:22%;float: left;">
                  <li class="like_bt">任务数<img  src="./img/paixu.png" /></li>
                  <li v-for="item in list22" >{{item}}</li>
                </ul>
                <ul class="like1" style="width:27%;float: left;">
                  <li class="like_bt">未完成数<img  src="./img/paixu.png" /></li>
                  <li v-for="item in list23" >{{item}}</li>
                </ul>
                <ul class="like2" style="width:24%;float: left;">
                  <li class="like_bt">他项未完</li>
                  <li v-for="item in list24" >{{item}}</li>
                </ul>
                
                
              </div>
            </div>
              
          </div>
        </div>
        

      </div>
      
      <!-- 右 -->
  </div>

    


  </div>
</template>

<script> 
  // import Header from '@/components/resource_visual/header4'
  // import Footer from '@/components/resource_visual/footer'
  import waterPoloChart from '@/views/resource_visual/echarts_component/waterPoloChart'
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import axios from 'axios'
  
  import echarts from 'echarts'
  
  import zjmap from './sxmap.vue'
  
  import MyCity from '@/components/citys.vue'
  import scrollboard from '@/components/scrollboard'

  var self = null
  
  function getRandom(start = .6, end = 1) {
    let num = Math.random() * (end - start) + start;
    return num
  }
  
  export default {
    data() {
      return {
         isShow1_1:true,
         input2:'',
         list1: ['前传波分设备', 'BBU', 'RRU', 'XXX'],
         list2: ['534', '534', '534', '534'],
         list3: ['234', '234', '234', '234'],
         list4: ['234', '234', '234', '234'],
         list5: ['34', '24', '23', '34'],
         
         list6: ['项目增派施工队数', '平均每队点位数', '平均每队未完成点位数', '施工队最大未完成点位数', '施工队最小未完成点位数'],
         list7: ['34', '24', '23', '14', '4'],
         list8: ['34', '24', '23', '14', '4'],
         list9: ['34', '24', '23', '14', '4'],
         list10: ['34', '24', '23', '14', '4'],
         
         list11: ['34', '24', '23', '14', '4'],
         list12: ['34', '24', '23', '14', '4'],
         list13: ['34', '24', '23', '14', '4'],
         list14: ['34', '24', '23', '14', '4'],
         list15: ['34', '24', '23', '14', '4'],
         
         list16: ['34', '24', '23', '14', '4'],
         list17: ['34', '24', '23', '14', '4'],
         list18: ['34', '24', '23', '14', '4'],
         list19: ['34', '24', '23', '14', '4'],
         list20: ['34', '24', '23', '14', '4'],
         
         list21: ['①队长1', '②队长2', '③队长3', '④队长4', '⑤队长5'],
         list22: ['34', '24', '23', '14', '4'],
         list23: ['34', '24', '23', '14', '4'],
         list24: ['34', '24', '23', '14', '4'],
         list25: ['34', '24', '23', '14', '4'],
         
         
         gettime:'',
                 
        //这里往上写0426
        rowttabStatus: '1',
        rowttabStatus2: '1',          
        isDialogShow: false,      
      }
    },
    components: {
      // Header,
      // Footer,
     
      vueSeamlessScroll,
      zjmap,
      MyCity
    },
    created() {
      document.title="中国移动"
      self = this
    },
    mounted(){
      
      this.getCurrentTime()
      this.getchart1Data()
      this.getchart2Data()
      this.getchart3Data()
      this.getchart4Data()
      
    },
    watch: {
    },
    computed: {    
    },
     
     methods: {
       getchart1Data() {
          var value = 0.2;
          var value2 = value +'%';
          var target = 0.75;
          var unit = '2022/03/01计划进度'
          const option = {
              backgroundColor:'rgba(0,0,0,0)', 
              grid: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                  },
                  xAxis: {
                      show: false,
                      type: 'value',
                      max: target,
                      boundaryGap: [0, 0],
                  },
                  yAxis: [
                      {
                          type: 'category',
                          data: [`${target}${unit}`],
                          axisLine: { show: false },
                           position: 'right',
                          axisTick: [
                              {
                                  show: true,
                              },
                          ],
                          axisLabel:{
                              formatter:`{a|${target}}{${unit === '%' ? 'a':'b'}|${unit}}`,
                              formatter: function (value) {
                                                  return '{x|' + value + '}  {y|' + '%}';
                              },
                              rich:{
                                    a: {
                                      fontSize: 16,
                                      color: '#fff',
                                      fontFamily: 'DS-DIGI',
                                  },
                                 b: {
                                     fontSize: 12,
                                      color: '#79C2E5',
                                       fontFamily: 'DS-DIGI',
                                      height: 20,
                                      verticalAlign: 'bottom',
                                  },
                              }
                          }
                      },
                  ],
                  series: [
                      {
                          name: 'target',
                          type: 'bar',
                          stack: 'target',
                          zlevel: 1,
                          itemStyle: {
                              normal: {
                                  color: value > target? '#00C7BB':'#00b557',
                              },
                          },
                          label: {
                              show: true,
                              position: 'insideTopRight',
                              offset:value > target ? [0, -30]:[0,0],
                              formatter: function (params) {
                                  return `{a|${unit}}{b| ${value*100}%} `;
                              },
                              rich: {
                                  a: {
                                      fontSize: 10,
                                      color: '#ffffff',
                                      
                                      
                                  },
                                  b: {
                                      fontSize: 14,
                                      color: '#ffffff',
                                      
                                  },
                              },
                          },
                          showBackground: true,
                          backgroundStyle: {
                              color: 'rgba(0,0,0,0)',
                             
                              borderWidth:1,
                              borderColor:'#00b557'
                          },
                          barWidth: 24,
                          data: [value],
                      },

                  ],
              };

         const dom = this.$refs.chart1
         const echart = echarts.init(dom)
         echart.setOption(option)
         window.addEventListener('resize', () => {
           echart.resize()
         })
       },
       getchart2Data() {
          var value = 0.18;
          var value2 = value +'%';
          var target = 0.75;
          var unit = '完工进度'
          const option = {
              backgroundColor:'rgba(0,0,0,0)', 
              grid: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                  },
                  xAxis: {
                      show: false,
                      type: 'value',
                      max: target,
                      boundaryGap: [0, 0],
                  },
                  yAxis: [
                      {
                          type: 'category',
                          data: [`${target}${unit}`],
                          axisLine: { show: false },
                           position: 'right',
                          axisTick: [
                              {
                                  show: true,
                              },
                          ],
                          axisLabel:{
                              formatter:`{a|${target}}{${unit === '%' ? 'a':'b'}|${unit}}`,
                              formatter: function (value) {
                                                  return '{x|' + value + '}  {y|' + '%}';
                              },
                              rich:{
                                    a: {
                                      fontSize: 16,
                                      color: '#fff',
                                      fontFamily: 'DS-DIGI',
                                  },
                                 b: {
                                     fontSize: 12,
                                      color: '#79C2E5',
                                       fontFamily: 'DS-DIGI',
                                      height: 20,
                                      verticalAlign: 'bottom',
                                  },
                              }
                          }
                      },
                  ],
                  series: [
                      {
                          name: 'target',
                          type: 'bar',
                          stack: 'target',
                          zlevel: 1,
                          itemStyle: {
                              normal: {
                                  color: value > target? '#00C7BB':'#997a2f',
                              },
                          },
                          label: {
                              show: true,
                              position: 'insideTopRight',
                              offset:value > target ? [0, -30]:[0,0],
                              formatter: function (params) {
                                  return `{a|${unit}}{b| ${value*100}%} `;
                              },
                              rich: {
                                  a: {
                                      fontSize: 10,
                                      color: '#ffffff',
                                      
                                      
                                  },
                                  b: {
                                      fontSize: 14,
                                      color: '#ffffff',
                                      
                                  },
                              },
                          },
                          showBackground: true,
                          backgroundStyle: {
                              color: 'rgba(0,0,0,0)',
                             
                              borderWidth:1,
                              borderColor:'#997a2f'
                          },
                          barWidth: 24,
                          data: [value],
                      },
       
                  ],
              };
       
         const dom = this.$refs.chart2
         const echart = echarts.init(dom)
         echart.setOption(option)
         window.addEventListener('resize', () => {
           echart.resize()
         })
       },
       getchart3Data() {
          
          const option = {
            backgroundColor: 'rgba(0,0,0,0)',
                            tooltip: {
                                show:true,  
                            },
                            grid: {
                                left: '2%',
                                right: '4%',
                                bottom: '0%',
                                top: '5%',
                                containLabel: true
                            },
                            legend: {
                              show:false,  
                            },
                            xAxis: {
                                type: 'category',

                  data: ['长沙', '株洲', '湘潭', '常德', '郴州', '衡阳', '怀化','娄底','邵阳','益阳','永州','岳阳', '张家界','自治州', ],
                                axisLabel: {
                                      color: ' #789dbf',
                                     interval: 0,
                                     fontSize: 10,
                                     rotate: 40  
                                   },
                                axisLine: {
                                   
                                   lineStyle: {
                                     
                                     color: '#005fb8'
                                   }
                                },
                                axisTick: {
                                    show: false, 
                                },
                                splitLine: {
                                    show: false,         
                                }
                            },
                            yAxis: [{
                                type: 'value',
                                max: '1200',
                                axisLine: {
                                   lineStyle: {
                                       color: '#005fb8'
                                   }
                                },
                                axisTick: {
                                    show: false, 
                                },
                                splitLine: {
                                    show: false,         
                                }
                                
                            },
                                {
                                type: "value",
                                position: "right",
                                 axisLine: {
                                    lineStyle: {
                                        color: '#005fb8'
                                    }
                                 },
                                 axisTick: {
                                     show: false, 
                                 },
                                 splitLine: {
                                     show: false,         
                                 } ,
                                 },
                            ],
                            series: [{
                                    name: '完工数',
                                    type: 'bar',
                                    barWidth: '15%',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                  offset: 0,
                                                                  color: 'rgba(0,244,255,1)' // 0% 处的颜色
                                                              }, {
                                                                  offset: 1,
                                                                  color: 'rgba(0,77,167,1)' // 100% 处的颜色
                                                              }], false),
                                        },
                                    },
                                    data: [400, 400, 300, 300, 300, 400, 400, 400, 300, 300, 400, 200, 200, 100,100]
                                },
                               
                                {
                                    name: '总数',
                                    type: 'bar',
                                    barWidth: '15%',
                                    itemStyle: {
                                        normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                          offset: 0,
                                          color: 'rgba(87,152,90,1)' // 0% 处的颜色
                                      }, {
                                          offset: 1,
                                          color: 'rgba(87,152,90,0.5)' // 100% 处的颜色
                                      }], false),
                                        }
                                    },
                                    data: [400, 600, 700, 700, 1000, 400, 400, 600, 700,300, 400, 400, 400, 300, 300, 400]
                                },
                                {
                                    name: '完成率',
                                    type: 'line',
                                    
                                    yAxisIndex: 1,
                                    smooth: true,
                                    itemStyle: {
                                        normal: {
                                            color: '#FFCA71',
                                            barBorderRadius: [12, 12, 0, 0],
                                        }
                                    },
                                    data: [40, 60, 70, 70, 10, 40, 40, 60, 70, 60, 70, 70, 10, 40, 40, 60,]
                                }
                            ]
            };

       
         const dom = this.$refs.chart3
         const echart = echarts.init(dom)
         echart.setOption(option)
         window.addEventListener('resize', () => {
           echart.resize()
         })
       },
       getchart4Data() {
          
          const option = {
            backgroundColor: 'rgba(0,0,0,0)',
                            tooltip: {
                                show:true,  
                            },
                            grid: {
                                left: '2%',
                                right: '4%',
                                bottom: '0%',
                                top: '5%',
                                containLabel: true
                            },
                            legend: {
                              show:false,  
                            },
                            xAxis: {
                                type: 'category',
       
                  data: ['长沙', '株洲', '湘潭', '常德', '郴州', '衡阳', '怀化','娄底','邵阳','益阳','永州','岳阳', '张家界','自治州', ],
                                axisLabel: {
                                      color: ' #789dbf',
                                     interval: 0,
                                     fontSize: 10,
                                     rotate: 40  
                                   },
                                axisLine: {
                                   
                                   lineStyle: {
                                     
                                     color: '#005fb8'
                                   }
                                },
                                axisTick: {
                                    show: false, 
                                },
                                splitLine: {
                                    show: false,         
                                }
                            },
                            yAxis: [{
                                type: 'value',
                                max: '1200',
                                axisLine: {
                                   lineStyle: {
                                       color: '#005fb8'
                                   }
                                },
                                axisTick: {
                                    show: false, 
                                },
                                splitLine: {
                                    show: false,         
                                }
                                
                            },
                                {
                                type: "value",
                                position: "right",
                                 axisLine: {
                                    lineStyle: {
                                        color: '#005fb8'
                                    }
                                 },
                                 axisTick: {
                                     show: false, 
                                 },
                                 splitLine: {
                                     show: false,         
                                 } ,
                                 },
                            ],
                            series: [{
                                    name: '完工数',
                                    type: 'bar',
                                    barWidth: '15%',
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                  offset: 0,
                                                                  color: 'rgba(0,244,255,1)' // 0% 处的颜色
                                                              }, {
                                                                  offset: 1,
                                                                  color: 'rgba(0,77,167,1)' // 100% 处的颜色
                                                              }], false),
                                        },
                                    },
                                    data: [400, 400, 300, 300, 300, 400, 400, 400, 300, 300, 400, 200, 200, 100,100]
                                },
                               
                                {
                                    name: '总数',
                                    type: 'bar',
                                    barWidth: '15%',
                                    itemStyle: {
                                        normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                          offset: 0,
                                          color: 'rgba(87,152,90,1)' // 0% 处的颜色
                                      }, {
                                          offset: 1,
                                          color: 'rgba(87,152,90,0.5)' // 100% 处的颜色
                                      }], false),
                                        }
                                    },
                                    data: [400, 600, 700, 700, 1000, 400, 400, 600, 700,300, 400, 400, 400, 300, 300, 400]
                                },
                                
                            ]
            };
       
       
         const dom = this.$refs.chart4
         const echart = echarts.init(dom)
         echart.setOption(option)
         window.addEventListener('resize', () => {
           echart.resize()
         })
       },
              
       
      
      //tabs
      rowttabsClick(type) {
        this.rowttabStatus = type
      },
      rowttabsClick2(type) {
        this.rowttabStatus2 = type
      },
       ///////////////////////////////////////////////////////////////////
    
      getCurrentTime() {
        //获取当前时间并打印
        let that = this
    　　let yy = new Date().getFullYear();
    　　let mm = new Date().getMonth()+1;
    　　let dd = new Date().getDate();
    　　let hh = new Date().getHours();
    　　let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    　　let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    　　that.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
    　　//console.log(that.gettime)  
      },
      
      
      initService() {
        window.setTimeout(() => {
          this.getZJMapData()
        }, 500)

      },
      changeMapFn(data) {
        this.smapdata = data;
        this.initService()
      },
      goToPage(url) {
        if (!url) return
        this.$router.push(url)
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


  
  /* 自适应样式20220426*/
  /* 头部样式 */
  .header {
    
    height:5.2vh;
    line-height: 5.2vh;
    width: 100%;  
    background:  url('./img/top2.png') no-repeat;
    background-size: 100% 100%;   
    .big_title{
      float: left;
      color: #ffffff;
      margin: 0px 10px;      
      font-size: 1.45vw;
      font-family: MFBanHei;
      font-weight: 100;
      cursor: pointer;
    }
    .small_title {
      float: left;
      color: #ffffff;
      margin-left:0.2vw;
      font-size:0.3vw;
    }
    .right_time{
      float: right;
      color: #ffffff;
      margin-right:8vw;
      font-size:0.6vw;
    }
  }
  
  
  /* 内容样式 */
  .contentbody {
    height: calc(100vh - 5.2vh);       
    position: relative;
    display: flex;
    .leftbox {
      width: 31vw;
      height: 100%;
      box-sizing: border-box;     
      padding: 10px; 
    }
    .rightbox {
      width: 18vw;
      height: 100%;
      box-sizing: border-box;     
      padding: 10px;
    }
    .centerbox {
      height:98%;
      padding: 10px;
      flex: 1;
      position: relative;
      
    }
    .box-item {
      position: relative;
    }
    .item-title {
      font-size: 0.9vw;
      color: aqua;
      background: url('./img/xiaobt1.png') no-repeat;
      background-size: 100% 100%;
      line-height: 1.25rem;
      height: 2rem;
      padding-left: 1.25rem;
      margin-bottom: 1vw;
      margin-top: 1vw;   
    }
    .item-title2 {
      font-size:0.9vw; 
      color: aqua;
      background: url('./img/baifenbi.png') no-repeat;      
      background-position: left center;
      line-height: 1.625rem;
      height: 1.625rem;
      padding-left: 1.5rem;              
    }
    .item-title3 {
      font-size: 1vw;
      color: aqua;
      background: url('./img/xiaobt4.png') no-repeat;
      background-size: 100% 100%;
      line-height: 1.25rem;
      height: 2rem;
      padding-left: 1.25rem;
      margin-bottom: 1vw;
      margin-top: 1vw;             
    }
    .item-title4 {
      font-size: 1vw;
      color: aqua;
      background: url('./img/xiaobt3.png') no-repeat;
      background-size: 100% 100%;
      line-height: 1.25rem;
      height: 2rem;
      padding-left: 1.25rem;
      margin-bottom: 1vw;
      margin-top: 1vw;              
    }
  }
  
  .lgwbox {
    text-align: center; 
    .lgwnum {
      font-size: 1.2vw;
      color: #f7e713;
    } 
    .lgwimg {
      margin: -3vh auto 0 auto; 
      img {
        width: 100px;
      }
    } 
    .lgwfont {
      font-size: 0.8vw;
    }
  }
  .sousou{
    width: 50%;
  }
  .rowttabs {
    height:1.8vw;
    line-height:1.8vw;
    font-size: 0.6vw;
    margin: 3vh auto;
    .rowttabs-item {
      padding: 0.3rem 0.625rem;
      border-radius: 5px;
      border: 1px solid rgba(37,100,204,0.6);
      margin-left: 10px;
      color: #5fb6ff;
      cursor: pointer;
      box-shadow: 0px 0px 12px rgba(19, 67, 205, 0.5) inset
    } 
    .rowttabs-item.active {
      border: 1px solid #45d8e2;
      color: #45d8e2;
      box-shadow: 0px 0px 12px rgba(62, 255, 253, 0.5) inset
    }
    .rowttabs-item2 {
      cursor: pointer;
      float: left;
      text-align: center;
      width: 5.4375rem;
      height: 26px;
      margin-right: 10px;
      background: url('./img/btn_l.png') no-repeat;
    } 
    .rowttabs-item2.active {
      cursor: pointer;
      float: left;
      text-align: center;
      width: 5.4375rem;
      height: 26px;
      
      background: url('./img/btn_h.png') no-repeat;
    }
    .rowttabs-item3 {
      padding: 0.1rem 0.625rem;
      height: 20px;
      border-radius: 5px;
      border: 1px solid rgba(37,100,204,0.6);
      margin-left: 10px;
      color: #5fb6ff;
      cursor: pointer;
      box-shadow: 0px 0px 12px rgba(19, 67, 205, 0.5) inset
    } 
    .rowttabs-item3.active {
      border: 1px solid #45d8e2;
      color: #45d8e2;
      box-shadow: 0px 0px 12px rgba(62, 255, 253, 0.5) inset
    }
    
  }
  .liketable{
    width: 100%;
    height: 24vh;
    clear:both;
    margin-top: 1vh;
    font-size: 0.6vw;
    
    ul{
      margin: 0px;
      padding: 0px;
      height: 100%;
    }
    
    .like0 li{
      list-style: none;
      display: block;
      float: left; 
      width: 99%;
      background: rgba(0,71,159,0.25);
      margin: 1px;
      padding: 0.25rem;
    }
    .like1 li{
      list-style: none;
      display: block;
      float: left;
      width: 98%;
      background: rgba(0,71,159,0.25);
      margin: 1px;
      padding: 0.25rem;
    }
    .like2 li{
      list-style: none;
      float: left;
      width: 98%;
      background: rgba(0,71,159,0.15);
      margin: 1px;
      padding: 0.25rem;
    }
    .like_bt{
      font-size: 0.625rem;
      background: none!important;
      color: #41b8ff;
    }
  }
  
  .shezhi{
    width: 100%; margin: 1.25rem auto 0.625rem auto;text-align: right;cursor: pointer;
  }
  .zitizu{
    width: 40%;
    margin: 2% 0%;
    
    padding-left:5.5vw;
    background: url('./img/ren1.png') no-repeat;
    background-position: center left;
    background-size: auto 90% ;
    .ziti1{
      margin:10px auto; color: #fbc213; font-size: 1.1vw;
    }
    .ziti2{
      margin:5px auto; font-size: 1vw;  color: #82e0ff
    }
    .ziti3{
      margin:5px auto;font-size: 1vw; color:#c4c4c4
    }
  }
 .zitizu2{
   width: 30%;
   margin: 2% 0% 2% 5%;
   
   
   
   .ziti1{
     margin:10px auto; color: #fbc213; font-size: 1.1vw;
   }
   .ziti2{
     margin:5px auto; font-size: 1vw;  color: #82e0ff
   }
   .ziti3{
     margin:5px auto;font-size: 1vw; color:#c4c4c4
   }
 }
 
  
  .spanai1 {
    margin: 0px 0px 0px 20px;
    float: left;
    height: 15vh;
    width: 12vh;
    font-size: 12px;
    color: #c4c4c4;
    text-align: center;  
    
    label{
      color: #82e0ff;
      
    }
  }
  .zhediebt{
    height:1.5vw;
    line-height: 1.5vw;
    text-align: left;
    padding-left: 0.5vw;
    font-size:0.8vw;
    color: #92daff;
    background: url('./img/xiaobt2_1.png') no-repeat;
    background-size: 100% 100%;
    cursor:pointer;
  }
.liketable2{
  height: 4vh;
  line-height: 4vh;
  text-align: center;
  width: 100%;
  margin-bottom: 0px;
  dt{
    background-color: rgba(127,164,199,0.4);
  }
  dd{
    background-color: rgba(0,124,181,0.4);
  }
}
.jindut{
  width: 100%; height:6vh;
  background:url('./img/jindut.png') no-repeat ;
  background-size: 100% auto;
  background-position: center center;
}
.minibiaoti1{
  width: 100%;
  height: 16px;
  margin-top: -10px;
  font-size: 12px;
  text-align: center;
  color: #a5d3ff;
  background:url('./img/line1.png') no-repeat ;
  background-position: center center;
  background-size: 97% auto;
}
.minibiaoti2{
  text-align: center;
  width: 100%;
  height: 16px;
  margin-top: -10px;
  font-size: 12px;
  color: #a5d3ff;
  background:url('./img/line2.png') no-repeat ;
  background-position: center center;
  background-size: 100% auto;
}
  </style>
  <style>

  .el-carousel__container{
    position: relative;
    height: 100px!important
  }
  .el-carousel__arrow--left {
    cursor: pointer;
    background: url('./img/jiantou1.png') no-repeat;
    height:20px;
    width: 20px;
  }
  .el-carousel__arrow--right {
    cursor: pointer;
    background: url('./img/jiantou2.png') no-repeat;
    height:20px;
    width: 20px;
  }
  
  .el-carousel__arrow i {
    color: transparent;
  }
  
  .el-carousel__indicators--horizontal {
    display: none;
  }
  
  


  .el-pagination {
    background: none;
    position: absolute;
    bottom: 1.2rem;
    left: 35%;
    color: aliceblue;

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
      height: 1.8vw;
      line-height: 1.8vw;
      /* background: transparent;
      border: 1px solid #3bc8d9; */
      border: 1px solid rgba(0,65,133,0.6);
      background-color: rgba(0,91,194,0.1);
  }
  .el-form-item__label {
      color: #02effa;
  }
  .el-picker-panel { 
      height: 300px !important;     
  }
  .el-button-group > .el-button:first-child {
      border-top-left-radius:15px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 15px;
      background-color: rgba(0,159,250,0.2);
  }
  .el-button-group > .el-button:last-child {
      border-top-left-radius:0;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 0;
      background-color: rgba(0,159,250,0.2);
  }
  .el-button-group > .el-button:active{
    background-color: #0283cc;
  }
</style>
