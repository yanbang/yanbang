<!-- 我封装的组件 上面是数字 中间是文字 下面是图片 -->

<template>
    <div class="shuwentu">
        <span></span>
        <p class="shuzi">{{sz}}<span>{{dw}}</span></p>
        <p class="wenzi">{{wz}}</p>
        <!-- <img src="@/assets/zj/navigation/kcrc/zrs.png"> -->
        <img :src="require('@/assets/zj/navigation'+srcname)">
    </div>
</template>

<script>
    export default {
        props: {
            sz:{
                type:Number,
                default:1282
            },
            dw:{
                type:String,
                default:'%'
            },
            wz:{
                type:String,
                default:'总人数'
            },
            srcname:{
                type:String,
                default:'/kcrc/zrs.png'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shuwentu{
        width: 120px;
        height: 160px;
        margin-top: 10px;
        // background: black;
        text-align: center;
    }
    p{
        margin: 0;//必须清0
    }
    .shuzi{
        color: #fff;

        font-size: 24px;
    }
    .wenzi{
        color: rgb(152, 247, 247);

        font-size: 12px;
    }
</style>