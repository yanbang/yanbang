<template>
  <div class="header">
    <div class="header-bg"></div>
    <el-menu 
    v-if = "$route.name == 'wisdomeye_home'"
    :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="z-index: 999;"
          background-color="rgba(1,132,254,0.05)"
          text-color="#00eaff"
          active-text-color="#rgba(1,132,254,0.5)"
    >
      <el-submenu index="2">
        <template slot="title">{{userName}}</template>      
        <!-- <el-submenu index="2-1">
          <template slot="title">管理者</template>
          <el-menu-item index="2-1-1">AI-面向客户</el-menu-item>
          <el-menu-item index="2-1-2">AI-面向市场</el-menu-item>
          <el-menu-item index="2-1-2">AI-面向一线</el-menu-item>
          <el-menu-item index="2-1-3">云-IDC</el-menu-item>
          <el-menu-item index="2-1-4">网-宽带</el-menu-item>
          <el-menu-item index="2-1-5">网-无线</el-menu-item>
          <el-menu-item index="2-1-6">网-承载</el-menu-item>
          <el-menu-item index="2-1-7">网-应急</el-menu-item>
          <el-menu-item index="2-1-8">端-固网</el-menu-item>
          <el-menu-item index="2-1-9">端-移网</el-menu-item>
          <el-menu-item index="2-1-10">业-网络洞察</el-menu-item>
          <el-menu-item index="2-1-11">业-政企保障</el-menu-item>
          <el-menu-item index="2-1-12">业-市场发展</el-menu-item>   
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">网营CEO</template>
          <el-menu-item index="2-2-1">AI-面向客户</el-menu-item>
          <el-menu-item index="2-2-2">AI-面向市场</el-menu-item>
          <el-menu-item index="2-2-2">AI-面向一线</el-menu-item>
         
          <el-menu-item index="2-2-4">网-宽带</el-menu-item>
          <el-menu-item index="2-2-5">网-无线</el-menu-item>
          <el-menu-item index="2-2-6">网-承载</el-menu-item>
          <el-menu-item index="2-2-7">网-应急</el-menu-item>
          <el-menu-item index="2-2-8">端-固网</el-menu-item>
          <el-menu-item index="2-2-9">端-移网</el-menu-item>
          
        </el-submenu> -->
         <el-menu-item index="2-5">
          <div slot="title" @click="loginOut"><div>管理者</div></div>
        </el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">营服CEO</template>
           <el-menu-item index="2-3-2"><a href="/#/unicomwisdomeyes/yingfuceo?name=济南市中四里村&code=8353695">济南市中四里村 </a></el-menu-item>
          <el-menu-item index="2-3-1"><a href="/#/unicomwisdomeyes/yingfuceo?name=济南市中普利门&code=8353694">济南市中普利门 </a></el-menu-item>
          <!-- <el-menu-item index="2-3-1">AI-面向客户</el-menu-item>
          <el-menu-item index="2-3-2">AI-面向市场</el-menu-item>
          <el-menu-item index="2-3-2">AI-面向一线</el-menu-item>
          <el-menu-item index="2-3-3">云-IDC</el-menu-item>
          <el-menu-item index="2-3-4">网-宽带</el-menu-item>
          <el-menu-item index="2-3-5">网-无线</el-menu-item>
          
          <el-menu-item index="2-3-7">网-应急</el-menu-item>
          <el-menu-item index="2-3-8">端-固网</el-menu-item>
          <el-menu-item index="2-3-9">端-移网</el-menu-item>
          <el-menu-item index="2-3-10">业-网络洞察</el-menu-item>
          <el-menu-item index="2-3-11">业-政企保障</el-menu-item>
          <el-menu-item index="2-3-12">业-市场发展</el-menu-item>    -->
        </el-submenu>
        <!-- <el-submenu index="2-4">
          <template slot="title">客户经理</template>
          <el-menu-item index="2-4-1">AI-面向客户</el-menu-item>
          <el-menu-item index="2-4-2">AI-面向市场</el-menu-item>
          <el-menu-item index="2-4-2">AI-面向一线</el-menu-item>
          <el-menu-item index="2-4-3">云-IDC</el-menu-item>
          
          <el-menu-item index="2-4-7">网-应急</el-menu-item>
          <el-menu-item index="2-4-8">端-固网</el-menu-item>
          <el-menu-item index="2-4-9">端-移网</el-menu-item>
          <el-menu-item index="2-4-10">业-网络洞察</el-menu-item>
          <el-menu-item index="2-4-11">业-政企保障</el-menu-item>
          <el-menu-item index="2-4-12">业-市场发展</el-menu-item>   
        </el-submenu> -->
        <el-submenu index="2-6">
          <template slot="title">政企客户</template>
          <el-menu-item index="2-6-1">
              <a href="/#/unicomwisdomeyes/zhengqi_khbz?sdt=1"> 山东通</a>
           </el-menu-item>
        </el-submenu>

        
         
        <!-- <el-menu-item index="2-5" v-if = "userName == '超级管理员'">
          <div slot="title"><router-link :to="{ path: 'loginfo' }" >日志分析</router-link></div>
        </el-menu-item> -->

      </el-submenu>
      
    </el-menu>

    
     <div class="usernamebox" >   
      <!-- <el-dropdown class="initdropdown"  v-if = "userName == '超级管理员'">
          <span class="el-dropdown-link">
           <span>{{userName}}</span>
          </span>
        <el-dropdown-menu class="initdropdownmenu" slot="dropdown">
          <el-dropdown-item>管理者</el-dropdown-item>
          <el-dropdown-item>网营CEO</el-dropdown-item>
          <el-dropdown-item>营服CEO</el-dropdown-item>
          <el-dropdown-item style=" border: none;">客户经理</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> 
      
      
     
      
      
       <span v-else>{{userName}}</span> -->
    </div> 
    <div class="back" @click="backToIndex" v-show="backbtn">
      <div class="back-arrow" />
      <div class="back-font" />
    </div>
    <div class="title" style="z-index: 999">
      <div class="bigTitle">{{title}} 
        <el-tooltip class="item"  content="指标口径说明" placement="right">
           <span class="el-icon-question tooltipzb" v-if = "explaincode" @click="explainFn"></span>
        </el-tooltip>
         </div>
      <div class="smallTitle" v-if="subtitle">
         <span style="padding: 0 20px" @click.stop="parantclick"> {{subtitle}}</span>
        
      </div>
    </div>
    <div class="right" v-if ="dateshow">
      <div>
        <!-- <el-date-picker v-model="date" type="date" placeholder="选择日期" @change="changeDate" :picker-options="pickerOptions0">
        </el-date-picker> -->
        <span>{{date}}</span>
      </div>

      <div class="line tl"></div>
      <div class="line tr"></div>
      <div class="line bl"></div>
      <div class="line br"></div>
    </div>
     <!-- v-if = "$route.name == 'wisdomeye_home' && (userName == '超级管理员' || staffId.indexOf('admin') > -1)" -->
    <div class="rzicon" v-show = "$route.name == 'wisdomeye_home'">
      <router-link :to="{ path: 'loginfo' }" > <img src="@/assets/rzicon3.png" title="日志分析" alt="" srcset=""></router-link>
    </div>
    <div class="exout" @click="loginOut" v-show = "$route.name == 'wisdomeye_home'">
        <img src="@/assets/images/lout.png" alt="" srcset="">
     </div>



      <el-dialog :visible.sync="zbDialogShow" width="90%" :modal-append-to-body='false'>
        <div class="dialogCon">
          <div class="dialogTitle">
            <div class="left">指标口径说明</div>
          </div>
          <div class="dialogTableBg" style="min-height: 650px">

                <el-table :data="zbDataList"  size = "mini" height="700px" >
                       <el-table-column
                         prop="daping" 
                         label="大屏名称" width="180px">
                      </el-table-column>
                       <el-table-column
                         prop="info_type" 
                         label="指标归属类" width="200px">
                      </el-table-column>
                       <el-table-column
                         prop="info_name" 
                         label="指标名称" width="200px">
                      </el-table-column>
                       <el-table-column
                         prop="data_state" 
                         label="数据状态" >
                      </el-table-column>
                       <el-table-column
                         prop="caliber" 
                         label="指标口径说明"  align="left">
                      </el-table-column>
                       <el-table-column
                         prop="frequence" 
                         label="更新频次" w>
                      </el-table-column>
                       <el-table-column
                         prop="data_source" 
                         label="数据来源系统" >
                      </el-table-column>
                      </el-table-column>
                </el-table>       
          </div>
        </div>
      </el-dialog>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import store from 'store'
import explainService from '@/api/explainService'
export default {
  props: {
    show: Boolean,
    isiframepage: Boolean,
    title: String,
    subtitle: String,
    explaincode: {
      type: String,
      default: function () {
        return ''
      }
    },
    backbtn: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    dateshow: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    backurl:  {
      type: String,
      default: function () {
        return '/unicomwisdomeyes/home'
      }
    },

  },
  data() {
    return {
      zbtitle: '',
      zbDataList: [],
      zbDialogShow: false,
      activeIndex: '1',
      date: '',
      childValue: '',
      userName: '',
      staffId: '',
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e7
        },
      },
    }
  },
  created() {
 
    
    // if (this.$route.query && this.$route.query.timest) {
    //   var qtime = this.$route.query.timest.substring(0,4)+ '-' +  this.$route.query.timest.substring(4,6) + '-' +  this.$route.query.timest.substring(6,8)
    //   this.date = qtime;

    // } else {
    //   if (window.sessionStorage.getItem('selectTime')) {
    //     let y = window.sessionStorage.getItem('selectTime').substring(0, 4)
    //     let m = window.sessionStorage.getItem('selectTime').substring(4, 6)
    //     let d = window.sessionStorage.getItem('selectTime').substring(6)
    //     this.date = y + '-' + m + '-' + d
    //   } else {
    //     let aData = new Date()
    //     aData.setDate(aData.getDate());
    //     let y = aData.getFullYear()
    //     let m = aData.getMonth() + 1
    //     let d = aData.getDate()
    //     this.date = y + '-' + m + '-' + d
    //     let selectTime = y + this.addZero(m) + this.addZero(d)
    //     this.date =  this.date
    //     window.sessionStorage.setItem('selectTime', selectTime)
    //   }
    // }

       let aData = new Date()
        aData.setDate(aData.getDate());
        let y = aData.getFullYear()
        let m = aData.getMonth() + 1
        let d = aData.getDate()
        let selectTime = y + '-' + this.addZero(m) + '-' + this.addZero(d)
        this.date =  selectTime
        this.$store.commit('resource/set_searchDate',  this.date);
    
  },
  mounted() {
   
    this.userName = store.get('userInfo').staffName || '';
    this.staffId = store.get('userInfo').staffId || '';
    this.$EventBus.$on("explainFn", (msg) => {
      this.explainFn(msg)
    });
  },
  methods: {
    explainFn (msg) {
      this.zbDialogShow = true;
      if (msg && msg.code) {
        this.queryExplain(msg.code)
      } else {
        this.queryExplain()
      }
      
    },
    queryExplain (code)  {
      let params = {
        code:  code || this.explaincode
      }
      explainService.service_explain(params).then(res => {

         if (res.rspCode == '0000') {
             this.zbDataList = res.result.data || []
        } else {
          this.$message.error(res.rspMsg)
        }
       
      })
    },
    parantclick(){
      this.$emit('fatherMethod');
    },
    handleSelect(key, keyPath) {
            console.log(key, keyPath);
    },
     ...mapActions(['Login', 'Logout']),
    addZero(s) {
      return s < 10 ? '0' + s : s
    },
    loginOut () {
        this.$confirm('确定退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.Logout().then(() => {
             store.remove('userInfo')
            window.setTimeout(() => {
              this.$router.push({ path: '/user/login' })
            })
          })
        })
    },
    // 返回引导页
    backToIndex() {
       this.$router.push({ path: this.backurl })
    },
    changeDate(val) {
      let d = new Date(val)
      let year = d.getFullYear()
      let Mos = d.getMonth() + 1
      let Dates = d.getDate()
      let youWant = year + '' + this.addZero(Mos) + '' + this.addZero(Dates)
      window.sessionStorage.setItem('selectTime', youWant)
      this.$store.commit('resource/set_searchDate', youWant);
      this.$parent.getDate(youWant)

    },
    addZero(s) {
      return s < 10 ? '0' + s : s
    },
  },
  watch: {},
}
</script>
<style>
  .rzicon {
    position: absolute;
    right: 50px;
    top: 12px;
    cursor: pointer;
    z-index: 999;
  }
  .rzicon img {
    width: 34px;
    height: 34px;
  }
  .el-menu.el-menu--horizontal {
        border-bottom: solid 0px #e6e6e6;
        background-color: transparent;
        position: absolute;
        left: 20px;
    }
  
  
   .el-submenu__title i {
       color: #00ffe7;
   }
   .el-submenu__title:hover{
     background-color: rgba(1,132,254,0.1)!important
   }
   .el-submenu__title:hover{
     background-color: rgba(1,132,254,0.1)!important
   }
   .el-menu-item:hover {
     background-color: rgba(1,132,254,0.5)!important
   }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
  

 
 
 
 
/deep/ .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  margin-top: -10px;
}
.header {
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  .title {
    padding: 0 30px;
  }
  .smallTitle {
    font-size: 28px;
    font-family: MFBanHei;
    font-weight: 400;
    color: #ffffff;
    background:  url('~@/assets/images/images_zy/subtitle.png') no-repeat;
    background-size: 100% 100%;
    width: 760px;
    height: 60px;
    line-height: 80px;
    color: #00ffff;

  }
  .header-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    background-image: url('~@/assets/images/images_zy/header.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .back {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 1.20rem;
    left: 40px;
    cursor: pointer;
    z-index: 101;
    .back-arrow {
      margin-right: 0.6875rem;
      width: 4.125rem;
      height: 1.625rem;
      background-image: url('~@/assets/images/bigScreen/header-back-arrow.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .back-font {
      width: 2.5rem;
      height: 1.2rem;
      background-image: url('~@/assets/images/bigScreen/header-back-font.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .title {
    z-index: 99;
    text-align: center;
  }
  .bigTitle {
    font-size: 2.8rem;
    font-family: MFBanHei;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 2px 2px 9px #01153b;
  }
  .right {
    width: 140px;
    height: 2rem;
    line-height: 2rem;
    background: rgba(0, 17, 64, 0.8);
    font-size: 0.9375rem;
    font-family: DigifaceWide;
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    right: 100px;
    top: 0.875rem;
    text-align: center;
    z-index: 101;
    /deep/.el-input__inner {
      background: none !important;
      color: #ffffff;
      border: none !important;
    }
    .line {
      position: absolute;
      width: 7px;
      height: 2px;
      background: #00ffff;
    }
    .line::before {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 7px;
      background: #00ffff;
    }
    .tl {
      left: 0;
      top: 0;
    }
    .tl::before {
      left: 0;
      top: 0;
    }
    .tr {
      right: 0;
      top: 0;
    }
    .tr::before {
      top: 0;
      right: 0;
    }
    .bl {
      left: 0;
      bottom: 0;
    }
    .bl::before {
      left: 0;
      bottom: 0;
    }
    .br {
      right: 0;
      bottom: 0;
    }
    .br::before {
      right: 0;
      bottom: 0;
    }
  }

  /deep/ .el-icon-date:before {
    content: none !important;
  }
}
.exout {
  position: absolute;
  right: 0px;
  z-index: 100;
  padding: 8px;
  top: 5px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
}
.usernamebox {
  position: absolute;
  left: 0;
  line-height: 60px;
  width: 220px;
  z-index: 999;
  color: #dfeffc;
  font-size: 18px;
  text-align: center;
}
.initdropdown .el-dropdown-link {
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
.initdropdownmenu {
  width: 180px;
  text-align: center;
  background: #020738b8;
  border-color: #5bcbe2;
}
.initdropdownmenu .el-dropdown-menu__item {
  color: #fff;
  font-size: 16px;
  
}
.initdropdownmenu .el-dropdown-menu__item {
  border-bottom: 1px dashed rgb(23, 81, 189);
}
.initdropdownmenu .el-dropdown-menu__item:last-child {
  border: none !important;
}
.initdropdownmenu .el-dropdown-menu__item:hover {
  color: #00ffff;
  background: #020738b8;
}
.tooltipzb {
  font-size: 24px;
  position: relative;
  top: -6px;
  color: #9abbdd;
  cursor: pointer;
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
/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin: 2px 20px 0 0;
  border: 2px solid #193987;
  border-radius: 5px;
  background: #1e1e88;
}
.dialogCon {
  padding: 0 40px;
  .dialogTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    .left {
      display: inline-block;
      padding-right: 110px;
      font-size: 24px;
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
/deep/ .el-table {
  background: none !important;
  font-size: 14px !important;
}
/deep/.dialogTableBg .el-table th {
  background: none !important;
  background: url('~@/assets/images/bigScreen/fullService/597bcdc505fa3.png') no-repeat !important;
  background-position: center 18px !important;
  background-size: contain !important;
  text-align: center !important;
  color: #02f6ff !important;
  font-size: 16px !important;
}

/deep/.dialogTableBg .el-table tr {
  background: none !important;
}

/deep/.dialogTableBg .el-table td {
  background: none !important;
  border: none !important;
  text-align: center !important;
  color: #ffffff;
  font-size: 16px  !important;
}
/deep/ .inittable2.el-table td {
  padding: 5px 0;
}
/deep/.el-table td.is-left {
  text-align: left !important;
}


/deep/.el-table td:first-child {
  background: none !important;
}

/deep/ .el-table th.is-leaf,
.el-table td {
  border: none !important;
  color: #ffffff;
}
/deep/.el-table::before {
  height: 0 !important;
}
/deep/.el-table th > .cell {
  display: contents !important;
}
/deep/.el-table .cell {
  padding: 0 6px;
}
/deep/ .dialogTableBg .el-table tr:nth-child(even) {
  background: rgba(4,54,108,0.4) !important;
}
</style>
