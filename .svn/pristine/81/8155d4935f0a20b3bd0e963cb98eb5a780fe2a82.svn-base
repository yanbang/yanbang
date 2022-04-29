<!--  -->
<template>
  <div class = "bottom-tab">
        <div class="bottom-item" v-for="(item, index) in tabdata" :key="index" :class="{'active': item.active, 'disabled': !item.href}" @click="routerPage(item)">
            <span class = "btitlefont " >{{item.title}}</span>
        </div>
    </div>
</template>

<script>
import logService from '@/pagelog'
export default {
  props: ['tabdata'],
  data () {
    return {
    }
  },
  components: {},
  mounted () {},
  watch: {},
  computed: {},
  methods: {
    routerPage (item) {
      if (item.callbk) {
        this.$emit('tabcallbkfn', item.callbk)
        return;
      }
      if (item.href && !item.jump) {
        this.$router.push(item.href)
      }
      if (item.jump) {
        if (item.jump == 'ly') {
           var logparams = {
              "title":  '商务楼宇',
               "pcode": '100701', //父类id
               "code": '10070104', //当前id
          }
          logService(logparams)
        }
        this.getToken(item.jump);
      }
    }
  }
}
</script>

<style lang='scss' scoped>
 .bottom-tab {
   position: absolute;
   bottom: 10px;
   height: 60px;
   width: 60%;
   left: 50%;
   min-width: 1000px;
   transform: translateX(-50%);
   text-align: center;
   .bottom-item {
     display: inline-block;
     padding: 4px 30px;
     background: url('~@/assets/images/images_zy/bottombtn.png') no-repeat;
     background-size: 100% 100%;
     font-size: 28px;
     color: #7ec6f6;
     cursor: pointer;
     &:not(:last-child) {
       margin-right: 20px;
     } 
    
     
   }
    .bottom-item.active {
      color: #fff;
    }
    .bottom-item.disabled {
      color: #999;
      cursor: not-allowed;
      background: url('~@/assets/images/images_zy/bottombtn2.png') no-repeat;
      background-size: 100% 100%;
    }
    
 }
</style>