<!-- 我封装的组件 左边是图片 右边是文字 下面是文字 -->

<template>
    <div class="ztywxw">
        <div class="ztywxwsm">
            <!-- <img src="@/assets/zj/navigation/wycb/sjzx.png"> -->
            <img :src="require('@/assets/zj/navigation'+srcdz)">
            <p class="shuzi" >{{sz}}<span>{{szwz}}</span></p>
        </div>
        <p class="wenzi">{{wz}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            srcdz:{
                type:String,
                default:'/wycb/sjzx.png'
            },
            sz:{
                type:Number,
                default:21
            },
            szwz:{
                type:String,
                default:'个'
            },
            
            wz:{
                type:String,
                default:'数据中心'
            }
        }
    }
</script>

<style lang="scss" scoped>
    p{
        margin: 0;//必须清0
    }
    .ztywxw{
        width: 140px;
        height: 120px;
        // background: orange;
        // margin-left: 30px;
        text-align: center;
    }
    .ztywxwsm{
        display: flex;
        justify-content: space-around;
    }
    .shuzi{
        color: #fff;
        // margin-left: 10px;
        font-size: 24px;
        margin-top: 10px;
    }
    .shuzi>span{
        font-size: 16px;
    }
    // img{
    //     margin: 10px 0 10px 0;
    // }
    
    .wenzi{
        color: #fff;
        margin-left: -60px;
        font-size: 14px;
        margin-top: 10px;
    }
</style>