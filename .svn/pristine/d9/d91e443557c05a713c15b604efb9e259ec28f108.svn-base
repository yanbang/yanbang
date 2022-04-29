<template>
  <div class="header">
    <div class="header-bg"></div>
    <div class="usernamebox" v-if = "$route.name == 'homeIndex'">
      <span>{{userName}}</span>
    </div>
    <div class="back" @click="backToIndex()" v-show="backbtn">
      <div class="back-arrow" />
      <div class="back-font" />
    </div>
    <div class="title">
      <div class="bigTitle">{{title}}</div>
      <div class="smallTitle" v-if="subtitle">
         <span style="padding: 0 20px"> {{subtitle}}</span>
      </div>
    </div>
    <div class="right">
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
    <div class="exout" @click="loginOut" v-show = "$route.name == 'homeIndex'">
        <img src="@/assets/images/lout.png" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from 'store'
export default {
  props: {
    show: Boolean,
    isiframepage: Boolean,
    title: String,
    subtitle: String,
    backbtn: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  data() {
    return {
      date: '',
      childValue: '',
      userName: '',
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
  },
  methods: {
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
       this.$router.push({ path: '/resource_visual/index' })
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
    font-size: 2.4rem;
    font-family: MFBanHei;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 2px 2px 9px #01153b;
  }
  .right {
    width: 9.875rem;
    height: 2rem;
    line-height: 2rem;
    background: rgba(0, 17, 64, 0.8);
    font-size: 0.9375rem;
    font-family: DigifaceWide;
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    right: 50px;
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
</style>
