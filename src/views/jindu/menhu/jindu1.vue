<!--进度1 -->
<template>
  <div class="contentbox" style="overflow-y: auto;">
    <!-- 头部 -->
    <div class="header">     
      <div class="big_title"  @click="goToPage('/jindu2')">
        全省建设项目施工进度管理
      </div>      
      <div class="small_title">
         
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
          <div class="item-title">
            <span>建设情况</span>
          </div>
          
          <div class="flex1" style="height:30vh;">

            <div class="flex" style="margin: 4vh auto 3vh auto;">
              
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">234</div>
                  <div class="lgwfont">项目数</div>
                  <div class="lgwimg">
                    <img src="./img/bg_zj3_di1.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">234</div>
                  <div class="lgwfont">点位数</div>
                  <div class="lgwimg">
                    <img src="./img/bg_zj3_di2.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">56645</div>
                  <div class="lgwfont">已完工数</div>
                  <div class="lgwimg">
                    <img src="./img/bg_zj3_di3.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">8885</div>
                  <div class="lgwfont">已验收数</div>
                  <div class="lgwimg">
                    <img src="./img/bg_zj3_di3_2.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              
            </div>
            
            <div class="flex" style="margin: 1vh auto;">
              
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">234</div>
                  <div class="lgwfont">市项目经理</div>
                  <div class="lgwimg">
                    <img src="@/assets/zj/bg_zj3_di1.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">234</div>
                  <div class="lgwfont">区县项目经理</div>
                  <div class="lgwimg">
                    <img src="@/assets/zj/bg_zj3_di2.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">56645</div>
                  <div class="lgwfont">施工队</div>
                  <div class="lgwimg">
                    <img src="@/assets/zj/bg_zj3_di3.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <div class="flex1">
                <div class="lgwbox">
                  <div class="lgwnum">8885</div>
                  <div class="lgwfont">施工人员</div>
                  <div class="lgwimg">
                    <img src="@/assets/zj/bg_zj3_di3_2.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
  
            </div>

          </div>
        </div>
        <!-- 左2 -->
        <div class="box-item">
          <div class="item-title">
            <span>项目概览</span>     
          </div>
         
          <div class="flex1" style="margin: 1vh auto">
            
            <div class="rowttabs" >
              <span>
                <el-input
                  size="mini sousou"
                  placeholder=" "
                  suffix-icon="el-icon-search"
                  v-model="input2">
                </el-input>
              </span>
              <span class="rowttabs-item" :class="{'active': rowttabStatus == '1'}"
                @click="rowttabsClick('1')">全部</span>
              <span class="rowttabs-item" :class="{'active': rowttabStatus == '2'}"
                @click="rowttabsClick('2')">无线</span>
              <span class="rowttabs-item" :class="{'active': rowttabStatus == '3'}"
                @click="rowttabsClick('3')">传输</span>
              <span class="rowttabs-item" :class="{'active': rowttabStatus == '4'}"
                @click="rowttabsClick('4')">全业务</span>
            </div>
            
            <div class="liketable" >
              <ul class="like0" style="width:40%;float: left;">
                <li class="like_bt"  >项目名称</li>
                <li v-for="item in list1" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:10%;float: left;">
                <li class="like_bt">点位数</li>
                <li v-for="item in list2" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:10%;float: left;">
                <li class="like_bt">完工数</li>
                <li v-for="item in list3" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:12%;float: left;">
                <li class="like_bt">完工进度</li>
                <li v-for="item in list4" >{{item}}</li>
              </ul>
              <ul class="like1" style="width:12%;float: left;">
                <li class="like_bt">计划进度</li>
                <li v-for="item in list5" >{{item}}</li>
              </ul>
              <ul class="like2" style="width:12%;float: left;">
                <li class="like_bt">进度偏差</li>
                <li v-for="item in list6" >{{item}}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <!-- 中 -->
      <div class="centerbox flex colflex">
        <div class="rowttabs" style="position: absolute; top:0rem; left:5rem; width: 40;vw;z-index:10; ">
          
          <span class="rowttabs-item2" :class="{'active': rowttabStatus2 == '1'}"
            @click="rowttabsClick2('1')">全部</span>
          <span class="rowttabs-item2" :class="{'active': rowttabStatus2 == '2'}"
            @click="rowttabsClick2('2')">无线</span>
          <span class="rowttabs-item2" :class="{'active': rowttabStatus2 == '3'}"
            @click="rowttabsClick2('3')">传输</span>
          <span class="rowttabs-item2" :class="{'active': rowttabStatus2 == '4'}"
            @click="rowttabsClick2('4')">全业务</span>
        </div>
        <div class="zjmap" style="height: 100%;position: relative;">
          <zjmap  height=" "></zjmap>
        </div>

      </div>
      
      <!-- 右 -->
      <div class="rightbox flex colflex">
        <div class="box-item">
          <div class="shezhi">
            <img src="./img/shezhi.png" />
          </div>
          <div class="item-title2 titlefont">
            <span>任务派发率（%）</span>
            <!-- <span v-show="mapLevel > 2" style="margin-left: 10px">(市级)</span> -->
          </div>
          
          <div class="flex1" >        
            <div   ref="chart1" style="height: 37vh; width: 100%;"></div> 
          </div>
        </div>
        <div class="box-item">
          <div class="item-title2 titlefont">
            <span>完工率（%）</span>
          </div>
          <div class="flex1" >
            <div   ref="chart2" style="height: 37vh; width: 100%;"></div> 
          </div>
        </div>


      </div>
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
  
  var self = null
  
  function getRandom(start = .6, end = 1) {
    let num = Math.random() * (end - start) + start;
    return num
  }
  
  export default {
    data() {
      return {
         input2:'',
         list1: ['2021年城域政企OTN精品网工程', '2021年城域政企OTN精品网工程', '2021年城域政企OTN精品网工程', '2021年城域政企OTN精品网工程', '2021年城域政企OTN精品网工程', '2021年城域政企OTN精品网工程', '2021年城域政企OTN精品网工程'],
         list2: ['534', '534', '534', '534', '534', '534', '534'],
         list3: ['234', '234', '234', '234', '234', '234', '234'],
         list4: ['234', '234', '234', '234', '234', '234', '234'],
         list5: ['34', '24', '23', '34', '24', '24', '34'],
         list6: ['34', '24', '23', '34', '24', '24', '34'],
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
      
    },
    watch: {
    },
    computed: {    
    },
     
     methods: {
       getchart2Data() {
         let companyData = [
       
             { companyTypeCode: '1', companyTypeName: '长沙', totalNumber: 99 },
             { companyTypeCode: '2', companyTypeName: '株洲', totalNumber:98 },
             { companyTypeCode: '3', companyTypeName: '湘潭', totalNumber: 97},
             { companyTypeCode: '4', companyTypeName: '常德', totalNumber: 82 },
             { companyTypeCode: '5', companyTypeName: '郴州', totalNumber: 81 },
             { companyTypeCode: '6', companyTypeName: '衡阳', totalNumber: 76 },
             { companyTypeCode: '7', companyTypeName: '怀化', totalNumber: 75 },
             { companyTypeCode: '8', companyTypeName: '娄底', totalNumber: 72 },
             { companyTypeCode: '9', companyTypeName: '邵阳', totalNumber: 68 },
             { companyTypeCode: '10', companyTypeName: '益阳', totalNumber: 65 },
             { companyTypeCode: '11', companyTypeName: '永州', totalNumber: 64 },
             { companyTypeCode: '12', companyTypeName: '岳阳', totalNumber: 63 },
             { companyTypeCode: '13', companyTypeName: '张家界', totalNumber: 62 },
             { companyTypeCode: '14', companyTypeName: '自治州', totalNumber: 61 },
         ];
         let dataName = [];
         let data1 = [];
         let defaultData = [];
         let maxData = 0;
         companyData.forEach((item) => {
             dataName.push(item.companyTypeName);
             data1.push(item.totalNumber);
             if (maxData < item.totalNumber) {
                 maxData = item.totalNumber;
             }
         });
         for (let i = 0; i < data1.length; i++) {
             defaultData.push(maxData);
         }
         var colorList = [
             '#fff64a',
             '#f3a52b',
             '#57fc5a',
             '#3fe8cb',
             '#3fe8cb',       
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             
         ];
         const option = {
           
           backgroundColor:'rgba(0,0,0,0)',
          
               grid: {
                   left: '5%',
                   right: '5%',
                   bottom: '0%',
                   top: '5%',
                   containLabel: true,
               },
               tooltip: {
                   trigger: 'axis',
                   axisPointer: {
                       type: 'shadow',
                   },
                   position: function (point, params, dom, rect, size) {
                       // console.log(point)
           
                       return [point[0], point[1]];
                   },
                   confine: false,
                   // formatter: '{b}:{c}'
                   formatter: function (params) {
                       // console.log(params)
                       let title = params[0].name;
                       if (title.length > 30) {
                           title = title.substring(0, 15) + '<br/>' + title.substring(15, 30) + '<br/>' + title.substring(30);
                       } else if (title.length > 15) {
                           title = title.substring(0, 15) + '<br/>' + title.substring(15);
                       }
                       let name = title + ' : ' + params[0].value + '%';
                       return name;
                   },
               },
               // backgroundColor: 'rgb(20,28,52)',
               xAxis: {
                   show: false,
                   type: 'value',
               },
               yAxis: [
                   {
                       type: 'category',
                       inverse: true,
                       // axisLabel: {
                       //   show: true,
                       //   textStyle: {
                       //     color: '#fff'
                       //   },
                       //   rotate: 0
                       // },
                       splitLine: {
                           show: false,
                       },
                       axisTick: {
                           show: false,
                       },
                       axisLine: {
                           show: false,
                       },
                       axisLabel: {
                           textStyle: {
                               color: '#b2babf',
                               fontSize: '11',
                           },
                           formatter: function (value) {
                               value = value.length > 14 ? value.substring(0, 14) + '...' : value;
                               return value ;
                           },
                       },
                       data: dataName,
                   },
                   {
                       type: 'category',
                       inverse: true,
                       axisTick: 'none',
                       axisLine: 'none',
                       show: true,
                       axisLabel: {
                           textStyle: {
                               color: '#ffffff',
                               fontSize: '10',
                           },
                           formatter: function (value) {
                               return value;
                           },
                       },
                       data: data1,
                   },
               ],
               series: [
                   {
                       name: '数量',
                       type: 'bar',
                       zlevel: 1,
                       itemStyle: {
                           normal: {
                               barBorderRadius: [0, 30, 30, 0],
                               color: (params) => {
                                   return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                       {
                                           offset: 0,
                                           color: 'rgba(22,129,229,0.5)',
                                       },
                                       {
                                           offset: 1,
                                           color: colorList[params.dataIndex],
                                       },
                                       
                                   ]);
                               },
                               // color: (params) => {
                               //   return colorList[params.dataIndex]
                               // }
                           },
                       },
                       barWidth: 10,
                       data: data1,
                   },
                   {
                       name: '背景',
                       type: 'bar',
                       barWidth: 10,
                       barGap: '-100%',
                       data: defaultData,
                       itemStyle: {
                           normal: {
                               color: 'rgba(24,92,120,0.5)',
                               barBorderRadius: [0, 30, 30, 0],
                           },
                       },
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
       getchart1Data() {
         let companyData = [

             { companyTypeCode: '1', companyTypeName: '长沙', totalNumber: 99 },
             { companyTypeCode: '2', companyTypeName: '株洲', totalNumber: 84 },
             { companyTypeCode: '3', companyTypeName: '湘潭', totalNumber: 83},
             { companyTypeCode: '4', companyTypeName: '常德', totalNumber: 82 },
             { companyTypeCode: '5', companyTypeName: '郴州', totalNumber: 81 },
             { companyTypeCode: '6', companyTypeName: '衡阳', totalNumber: 76 },
             { companyTypeCode: '7', companyTypeName: '怀化', totalNumber: 75 },
             { companyTypeCode: '8', companyTypeName: '娄底', totalNumber: 72 },
             { companyTypeCode: '9', companyTypeName: '邵阳', totalNumber: 68 },
             { companyTypeCode: '10', companyTypeName: '益阳', totalNumber: 65 },
             { companyTypeCode: '11', companyTypeName: '永州', totalNumber: 64 },
             { companyTypeCode: '12', companyTypeName: '岳阳', totalNumber: 63 },
             { companyTypeCode: '13', companyTypeName: '张家界', totalNumber: 62 },
             { companyTypeCode: '14', companyTypeName: '自治州', totalNumber: 61 },
         ];
         let dataName = [];
         let data1 = [];
         let defaultData = [];
         let maxData = 0;
         companyData.forEach((item) => {
             dataName.push(item.companyTypeName);
             data1.push(item.totalNumber);
             if (maxData < item.totalNumber) {
                 maxData = item.totalNumber;
             }
         });
         for (let i = 0; i < data1.length; i++) {
             defaultData.push(maxData);
         }
         var colorList = [
             '#fff64a',
             '#f3a52b',
             '#57fc5a',
             '#3fe8cb',
             '#3fe8cb',       
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             '#3fe8cb',
             
         ];
         const option = {
           
           backgroundColor:'rgba(0,0,0,0)',
          
               grid: {
                   left: '5%',
                   right: '5%',
                   bottom: '0%',
                   top: '5%',
                   containLabel: true,
               },
               tooltip: {
                   trigger: 'axis',
                   axisPointer: {
                       type: 'shadow',
                   },
                   position: function (point, params, dom, rect, size) {
                       // console.log(point)
           
                       return [point[0], point[1]];
                   },
                   confine: false,
                   // formatter: '{b}:{c}'
                   formatter: function (params) {
                       // console.log(params)
                       let title = params[0].name;
                       if (title.length > 30) {
                           title = title.substring(0, 15) + '<br/>' + title.substring(15, 30) + '<br/>' + title.substring(30);
                       } else if (title.length > 15) {
                           title = title.substring(0, 15) + '<br/>' + title.substring(15);
                       }
                       let name = title + ' : ' + params[0].value + '%';
                       return name;
                   },
               },
               // backgroundColor: 'rgb(20,28,52)',
               xAxis: {
                   show: false,
                   type: 'value',
               },
               yAxis: [
                   {
                       type: 'category',
                       inverse: true,
                       // axisLabel: {
                       //   show: true,
                       //   textStyle: {
                       //     color: '#fff'
                       //   },
                       //   rotate: 0
                       // },
                       splitLine: {
                           show: false,
                       },
                       axisTick: {
                           show: false,
                       },
                       axisLine: {
                           show: false,
                       },
                       axisLabel: {
                           textStyle: {
                               color: '#b2babf',
                               fontSize: '11',
                           },
                           formatter: function (value) {
                               value = value.length > 14 ? value.substring(0, 14) + '...' : value;
                               return value ;
                           },
                       },
                       data: dataName,
                   },
                   {
                       type: 'category',
                       inverse: true,
                       axisTick: 'none',
                       axisLine: 'none',
                       show: true,
                       axisLabel: {
                           textStyle: {
                               color: '#ffffff',
                               fontSize: '10',
                           },
                           formatter: function (value) {
                               return value;
                           },
                       },
                       data: data1,
                   },
               ],
               series: [
                   {
                       name: '数量',
                       type: 'bar',
                       zlevel: 1,
                       itemStyle: {
                           normal: {
                               barBorderRadius: [0, 30, 30, 0],
                               color: (params) => {
                                   return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                       {
                                           offset: 0,
                                           color: 'rgba(22,129,229,0.5)',
                                       },
                                       {
                                           offset: 1,
                                           color: colorList[params.dataIndex],
                                       },
                                       
                                   ]);
                               },
                               // color: (params) => {
                               //   return colorList[params.dataIndex]
                               // }
                           },
                       },
                       barWidth: 10,
                       data: data1,
                   },
                   {
                       name: '背景',
                       type: 'bar',
                       barWidth: 10,
                       barGap: '-100%',
                       data: defaultData,
                       itemStyle: {
                           normal: {
                               color: 'rgba(24,92,120,0.5)',
                               barBorderRadius: [0, 30, 30, 0],
                           },
                       },
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
    background:  url('./img/top1.png') no-repeat;
    background-size: 100% 100%;   
    .big_title{
      float: left;
      color: #ffffff;
      margin: 0px 10px;      
      font-size: 1.5vw;
      font-family: MFBanHei;
      font-weight: 100;
      cursor: pointer;
    }
    .small_title {
      float: left;
      color: #ffffff;
      margin-left:2vw;
      font-size:0.6vw;
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
      width: 38vw;
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
    height:2vw;
    line-height:2vw;
    font-size: 0.9vw;
    margin: 3vh auto;
    .rowttabs-item {
      
      padding: 0.3rem 0.625rem;
      border-radius: 5px;
      border: 1px solid rgba(37,100,204,0.6);
      margin-left: 0.625rem;
      color: #5fb6ff;
      cursor: pointer;
      box-shadow: 0px 0px 12px rgba(19, 67, 205, 0.5) inset
    } 
    .rowttabs-item.active {
      cursor: pointer;
      border: 1px solid #45d8e2;
      color: #45d8e2;
      box-shadow: 0px 0px 12px rgba(62, 255, 253, 0.5) inset
    }
    .rowttabs-item2 {
      cursor: pointer;
      float: left;
      text-align: center;
      width: 6rem;
      height: 2rem;
      line-height: 2rem;
      margin-right: 2rem;
      background: url('./img/btn_l.png') no-repeat;
      background-size: 100% 100%;
    } 
    .rowttabs-item2.active {
      cursor: pointer;
      float: left;
      text-align: center;
      width: 6rem;
      height: 2rem;
      line-height: 2rem;
      margin-right: 2rem;
      background: url('./img/btn_h.png') no-repeat;
      background-size: 100% 100%;
    }
  }
  .liketable{
    width: 100%;
    height: 36vh;
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
      width:4.2vw;
      background: none!important;
      color: #41b8ff;
    }
  }
  .shezhi{
    width: 100%; margin: 1.25rem auto 0.625rem auto;text-align: right;cursor: pointer;
  }
  </style>
  <style>

  
  
  


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
  
</style>
