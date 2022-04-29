<!-- 我封装的组件 上面是文字 下面是文字、数字、箭头 -->

<template>
    <div class="swxwsj">
        <p class="wenzi">{{wz}}</p>
        <p class="wzshuzi" >
            {{wzer}}
            <span class="szyi">{{sz}}</span>
            ，较去年
            <span class="szer" :style="{color:ys}">{{szer}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            wz:{
                type:String,
                default:'队伍学历结构'
            },
            wzer:{
                type:String,
                default:'本科以上学历占比：'
            },
            sz:{
                type:String,
                default:'38.5%'
            },
            szer:{
                type:String,
                default:'5%↑'
            },
            ys:{
                type:String,
                default:'red'
            },
        }
    }
</script>

<style lang="scss" scoped>
    p{
        margin: 0;//必须清0
    }
    .swxwsj{
        width: 230px;
        height: 50px;
        // background: rgb(152, 247, 247);
        // margin-left: 30px;
        // text-align: center;
    }
    .wenzi{
        color: #fff;
        // margin-left: 10px;
        font-size: 16px;
    }
    .wzshuzi{
        color: rgb(152, 247, 247);  
        // margin-left: -8px;
        font-size: 12px;
        // transform: scale(0.9);
    }
    .szyi{
        color: #fff;
    }
    // .szer{
    //     color: red;
    // }
    // img{
    //     margin: 10px 0 10px 0;
    // }
    // .shuzi>span{
    //     font-size: 12px;
    // }
    
</style>