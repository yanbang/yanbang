<!-- 我封装的组件 上面是图片 下面是文字 -->

<template>
    <div class="stxw">
        <!-- <p class="shuzi" >{{sz}}<span>{{szwz}}</span></p> -->
        <!-- <img src="@/assets/zj/navigation/wycb/yscb.png"> -->
        <img :src="require('@/assets/zj/navigation'+srcdz)" :style="{margin:imgmargin,width:imgwidth,height:imgheight}">
        <p class="wenzi">{{wz}}</p>
    </div>
</template>
 
<script>
    export default {
        props: {
            // sz:{
            //     type:Number,
            //     default:30.8
            // },
            // szwz:{
            //     type:String,
            //     default:'亿'
            // },
            srcdz:{
                type:String,
                default:'/tzgk/srgjtb.png'
            },
            wz:{
                type:String,
                default:'收入归集同步'
            },
            imgmargin:{
                type:String,
                default:'0 0 5px 0'
            },
            imgwidth:{
                type:String,
                default:'25.2px'
            },
            imgheight:{
                type:String,
                default:'19.6px'
            },
            
        }
    }
</script>

<style lang="scss" scoped>
    p{
        margin: 0;//必须清0
    }
    .stxw{
        width: 108px;
        height: 56px;
        // background: orange;//需要删除
        // margin-left: 30px;//需要删除
        text-align: center;
    }
    // .shuzi{
    //     color: #fff;
    //     // margin-left: 10px;
    //     font-size: 24px;
    // }
    // img{
    //     width: 33.92px;
    //     height: 37.12px;
    //     // margin: 10px 0 10px 0;//活
    // }
    // .shuzi>span{
    //     font-size: 12px;
    // }
    .wenzi{
        color: #fff;
        // margin-left: 10px;
        font-size: 12px;
        // padding: 0 2px;
        letter-spacing: 1px;//字与字之间的间距
    }
</style>