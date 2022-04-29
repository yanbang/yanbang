<!-- 我封装的组件 上面是图片+文字 下面是数字+文字 -->

<template>
    <div class="stwxsw">
        <div class="tpwz">
            <img src="@/assets/zj/navigation/kcrc/rctd.png">
            <p class="wenzi">{{wz}}</p>
        </div>
        <p class="shuzi">{{sz}}<span>   人</span></p>
    </div>
</template>
 
<script>
    export default {
        props: {
            wz:{
                type:String,
                default:'B级专家'
            },
            sz:{
                type:Number,
                default:10
            },
        }
    }
</script>

<style lang="scss" scoped>
    .stwxsw{
        width: 125px;
        height: 80px;
        margin-top: 10px;
        // background: red;
        text-align: center;
    }
    .tpwz{
        width: 80px;
        height: 23px;
        display: flex;
        justify-content: space-around;
        margin-left: 10px;
    }
    p{
        margin: 0;//必须清0
    }
    .wenzi{
        color: rgb(152, 247, 247);

        font-size: 12px;
        margin-top: 5px;
    }
    .shuzi{
        color: #fff;

        height: 50px;
        line-height: 50px;
        font-size: 24px;
        background: rgb(3, 35, 57);
        margin-top: 10px;
    }
    .shuzi>span{
        font-size: 12px;
    }
</style>