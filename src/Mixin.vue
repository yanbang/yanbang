<!-- golad mixin -->
<template>
  <div></div>
</template>

<script>
import axios from 'axios'
import store from 'store'
import serviceApi from '@/api/networkeye'
export default {
  data () {
    return {
      
    }
  },
  components: {},
  created () {
    
  },
  mounted () {},
  watch: {},
  computed: {},
  methods: {
     queryEyesInfo (params) {
      return new Promise((resolve, reject) => {
        serviceApi.servicejkdsTc(params).then(res => {
            if (res.rspCode == '0000') {
              var datal = res.result.data[0] || {};
              datal= datal.zhy_content || ''
              resolve(datal)
            } else {
              reject(res.rspMsg)
            }
        })
      });
     },
    
     getToken(theme, bcfn) {
      let that = this
      let params = {
        username: store.get('userInfo').staffId || 'yingwj3',
        adcode: "17",
        from: "山东可视化智慧眼"
      }
      axios.post('http://10.236.20.81:7005/sourceview/auth/getToken', params,
        {
          headers: { 'Content-Type': 'application/json;charset=UTF-8' },
          withCredentials: true
        }
      ).then(function (response) {
          let result = response.data
          if (result.respCode == 0) {
            that.openPage(result.respData, theme, bcfn)
          } else {
            that.$message.error(result.respMsg || '请求出现错误，请稍后再试')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    openPage(token, theme, bcfn) {
      let that = this
      let params = {
        token: token
      }
      axios.get('http://10.236.20.81:7005/sourceview/auth/checkToken', { params })
        .then(function (response) {
          let result = response.data
          if (result.respCode == 0) {
            if (bcfn) {
              bcfn(`http://10.236.20.81:7005/sourceview/auth/jump?token=${token}&theme=${theme}`)
            } else {
               window.open(`http://10.236.20.81:7005/sourceview/auth/jump?token=${token}&theme=${theme}`)
            }
           
          } else {
            that.$message.error(result.respMsg || '请求出现错误，请稍后再试')
           
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  }
}
</script>

<style lang='css' scoped>
</style>