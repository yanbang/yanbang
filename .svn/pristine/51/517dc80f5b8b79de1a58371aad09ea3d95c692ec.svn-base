<template>
  <div class="header">
    <div class="header-bg"></div>
    <!-- <el-menu
   
    :default-active="activeIndex" class="el-menu-vertical"  mode="horizontal" @select="handleSelect" style="z-index: 999;"              
          active-text-color="#00e4ff"
          text-color="#00e4ff"
    >
      <el-submenu index="1">
        <el-menu-item-group>
        <el-menu-item index="1-1" @click="goToPage('/')"  class="item_div">
          <div slot="title" >
               首页<br/>
              <img src="~@/assets/zj1.png" class="zjslt"/>                         
          </div>
        </el-menu-item>
        <el-menu-item index="1-2">
          <div slot="title"  @click="goToPage('/kd_ghjs')"   class="item_div">
               宽带-规划建设<br/>
              <img src="~@/assets/zj2.png" class="zjslt"/>                        
          </div>
        </el-menu-item>
        <el-menu-item index="1-3">
          <div slot="title"  @click="goToPage('/kd_kdjf')"   class="item_div">
               宽带-宽带交付<br/>
              <img src="~@/assets/zj3.png" class="zjslt"/>                        
          </div>
        </el-menu-item>
        <el-menu-item index="1-4">
          <div slot="title"  @click="goToPage('/kd_kdyy')"   class="item_div">
               宽带-宽带运营<br/>
              <img src="~@/assets/zj4.png" class="zjslt"/>                       
          </div>
        </el-menu-item>
        <el-menu-item index="1-5">
          <div slot="title"  @click="goToPage('/kd_wyxt')"   class="item_div">
               宽带-网业协同<br/>
              <img src="~@/assets/zj4.png" class="zjslt"/>                       
          </div>
        </el-menu-item>
        </el-menu-item-group>
      </el-submenu> 
      
    </el-menu> -->

    
    
   <!-- <div class="back" @click="backToIndex" v-show="backbtn">
      <div class="back-arrow" />
      <div class="back-font" />
    </div> -->
    <div class="title" style="z-index: 999">
      <div class="bigTitle" @click="goToPage('/')">{{title}} 
        <el-tooltip class="item"  content="指标口径说明" placement="right">
           <span class="el-icon-question tooltipzb" v-if = "explaincode" @click="explainFn"></span>
           <span style="font-size:32px; " @click.stop="parantclick" class="subtitle"> {{subtitle}}</span>
        </el-tooltip>
      </div>
      <div class="smallTitle">
        <!-- <span style="" @click.stop="parantclick" class="subtitle"> {{subtitle}}</span> -->
            
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
   <!-- <div class="rzicon" v-show = "$route.name == 'wisdomeye_home'">
      <router-link :to="{ path: 'loginfo' }" > <img src="@/assets/rzicon3.png" title="日志分析" alt="" srcset=""></router-link>
    </div> -->
    <!-- <div class="exout" @click="loginOut" v-show = "$route.name == 'wisdomeye_home'">
        <img src="@/assets/images/lout.png" alt="" srcset="">
     </div> -->



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
     subtitle2: String,
      subtitle3: String,
       subtitle4: String,
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
      activeIndex: '1-1',
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
    this.userName =  '';
    this.staffId = '';
    // this.userName = store.get('userInfo').staffName || '';
    // this.staffId = store.get('userInfo').staffId || '';
    // this.$EventBus.$on("explainFn", (msg) => {
    //   this.explainFn(msg)
    // });
  },
  methods: {
    goToPage(url) {
      if (!url) return
      this.$router.push(url)
    },
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
  
  .el-menu li{
     background: transparent!important;
  }
  .el-submenu.is-active .el-submenu__title {
    border-bottom:none!important;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
      background-color: transparent!important;
      border-bottom:none!important;
  }
   
   .el-menu.el-menu--horizontal {
       border-bottom: solid 0px #000d10!important;
       background-color: transparent;
       position: absolute;
       left: 0px;   
   }
   
   .el-menu-item{
     height:160px!important;
   }
   .el-menu-item * :hover{
        background-color: #0161ff!important;
   }
   
   .zjslt {
       width: 180px;
       float: right;
       margin: 5px;
   }
   .item_div{
     height: 160px;
   }
   .item_div:hover{
        background-color: #0047c2!important;
   }
   .el-menu{
       border-right: none;
       background-color: rgba(6,56,101,0)!important;
      
    }
   .el-menu--horizontal .el-menu .el-menu-item{
       background-color: rgba(6,56,101,0.9)!important;
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
    font-size: 22px;
    font-family: MFBanHei;
    font-weight: 100;
    color: #ffffff;
    // background:  url('~@/assets/images/images_zy/subtitle.png') no-repeat;
    // background-size: 100% 100%;
    background: linear-gradient( rgba(53,153,255,0), rgba(53,153,255,0.4));
    width: 800px;
    height: 40px;
    line-height: 40px;
    color: #00ffff;
    margin: 0px 0px 0px 0px;

  }
  .header-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
   // background-image: url('~@/assets/images/images_zy/header.png');
    background-image: url('~@/assets/zj/bg_zj2_top.png');
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
