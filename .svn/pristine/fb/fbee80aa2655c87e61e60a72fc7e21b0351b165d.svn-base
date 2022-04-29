<!-- 我封装的组件 上边是文字 中间是图片  下面是带圆点的两行文字 -->


<template>
    <div class="wtww">
        <!-- <div class="wtwwsm"> -->
            <p class="wenzi" >{{wz}}</p>
            <img :src="require('@/assets/zj/navigation'+srcdz)">
            <p class="wzszyi"><span>●一等奖</span> {{sz}}<span>个</span></p>
            <p class="wzszer"><span>●二等奖</span> {{szer}}<span>个</span></p>
            <p class="wzszsan"><span>●三等奖</span> {{szsan}}<span>个</span></p>
        <!-- </div> -->
    </div>
</template>
 
<script>
    export default {
        props: {
            wz:{
                type:String,
                default:'劳技'
            },
            srcdz:{
                type:String,
                default:'/kcrc/dtyer.png'
            },
            sz:{
                type:Number,
                default:3
            },
            szer:{
                type:Number,
                default:5
            },
            szsan:{
                type:Number,
                default:5
            }
        }
    }
</script>

<style lang="scss" scoped>
    p{
        margin: 0;//必须清0
        color: #fff;
    }

    .wtww{
        width: 110px;
        height: 180px;
        // background: orange;
        // margin-left: 30px;
        text-align: center;
    }
    .wenzi{
        color: #fff;
        // margin-left: -60px;
        // font-size: 16px;
    }
    img{
         width: 87px;
        height: 96.6px;
        //  margin: 10px 0 10px 0;
     }
    // .wzszyi,.wzszer{
    //     color: rgb(152, 247, 247); 
        // margin-left: -60px;
        // font-size: 16px;
    // }
    span{
        color: rgb(152, 247, 247);
        // margin-left: -60px;
        // font-size: 16px;
    }
    // .wtwwsm{
    //     display: flex;
    //     justify-content: space-around;
    // }
    // .shuzi{
    //     color: #fff;
    //     // margin-left: 10px;
    //     font-size: 24px;
    //     margin-top: 10px;
    // }
    // .shuzi>span{
    //     font-size: 16px;
    // }
     
    
    
</style>