<template>
  <!-- <div class="zgpagebj"> -->
  <div>
    <div class="toubj"></div>
    <p class="zhutitle" @click="goToPage('/')">浙江联通网络智慧中台</p>
    <p class="futitle"><span>{{wz}}</span></p>
    
  </div>
</template>
  
<script>
  export default {
    props: {
            wz:{
                type:String,
                default:'科创人才'
            },
    },
    methods: {
      goToPage(url) {
        if (!url) return
        this.$router.push(url)
      },
    },
  }
</script>

<style lang="scss" scoped>
  p{
    margin: 0;
  }
  // .zgpagebj{
  //   width: 1920px;
  //   height: 1080px;
  //   background: url('~@/assets/zj/bg_zj1.png') no-repeat 100% 100%;
  //   z-index: 1;
  // }
  .toubj {
    position: absolute;
    left: 0;
    top: 66px;
    width: 100%;
    height: 80px;
    background: url('~@/assets/zj/navigation/daohangtou.png') no-repeat 100% 100%;
  }
  .zhutitle{
    font: 100 36px MFBanHei;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%,-50%);// https://www.cnblogs.com/knuzy/p/9993181.html
    cursor: pointer;
  }
  .futitle{
    width:780px ;
    height:71px ;
    // font: 100 24px MFBanHei;
    // color: red;
    position: absolute;
    left: 50%;
    top: 13%;
    transform: translate(-50%,-50%);// https://www.cnblogs.com/knuzy/p/9993181.html
    // background: rgb(17, 62, 104);
    // background: red;
    background: url('~@/assets/zj/navigation/tzgk/ftitle.png') no-repeat  100% 100%;
  }
  .futitle>span{
    // width:780px ;
    // height:71px ;
    font: 100 24px MFBanHei;
    color: #00fefe;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%,-50%);// https://www.cnblogs.com/knuzy/p/9993181.html
    // background: rgb(17, 62, 104);
    // background: red;
    // background: url('~@/assets/zj/navigation/tzgk/ftitle.png') no-repeat  100% 100%;
  }
</style>