<!-- 我封装的组件 图里面是数字 下面是文字 -->

<template>
    <div class="tulisxw">
        <div class="tulisxwts">
            <p class="shuzi">{{sz}}<span>{{dw}}</span></p>
            <img :src="require('@/assets/zj/navigation'+srcdz)">
            <p class="wenzi">{{wz}}</p>
        </div>
        <!-- <p class="wenzi">{{wz}}</p> -->
        <!-- <img src="@/assets/zj/navigation/kcrc/zrs.png"> -->
        <!-- <img :src="require('@/assets/zj/navigation'+srcname)"> -->
        
    </div>
</template>

<script>
    export default {
        props: {
            sz:{
                type:Number,
                default:3363
            },
            dw:{
                type:String,
                default:''
            },
            wz:{
                type:String,
                default:'投资需求'
            },
            srcdz:{
                type:String,
                default:'/tzgk/lbx.png'
            },
        }
    }
</script>

<style lang="scss" scoped>
    p{
        margin: 0;//必须清0
    }
    .tulisxw{
        // width: 79.75px;
        width: 135px;
        height: 78px;
        // margin-top: 10px;
        // background: orchid;
        text-align: center;
    }
    .tulisxwts{
        position: relative;
        width: 100px;
        height: 78px;
        margin-left: 20px;
        // margin-top: 5px;
        // background: greenyellow;
        text-align: center;
    }
    img{
        width: 65.5px;
        height: 59.5px;
    }
    .shuzi{
        color: #00ceff;
        font-size: 12px;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%,-50%);
        background: #00385b;
        // background: url('~@/assets/zj/navigation/tzgk/dtyer.png') no-repeat;
        // background-size: 100% 100%;
    }
    
    .wenzi{
        color: #00ceff;
        font-size: 12px;
        // transform: scale(0.8);
        // margin-top: 1px;
    }
</style>