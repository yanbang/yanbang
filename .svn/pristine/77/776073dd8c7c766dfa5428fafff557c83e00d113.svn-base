<!-- 我封装的组件 横线 中间有 箭头 箭头可以指向 上下左右 -->
<template>
    <div class="hxjiantou" :style="{transform:`rotate(${i*90}deg)`,width:imgwidth}">
    <!-- <div class="hxjiantou" style="transform: rotate(90deg)"> -->
        <!-- <p>{{text}}</p> -->
        <img class="hxian" :style="{width:imgwidth}" src="@/assets/zj/navigation/tzgk/hengxian.png">
        <img class="jtou" src="@/assets/zj/navigation/tzgk/jiantou.png">
    </div>
</template>

<script>
    export default {
        props: {
            i:{
                type:Number,
                default:0
            },
            imgwidth:{
                type:String,
                default:'49px'
            },
        }
    }
</script>

<style lang="scss" scoped>
    .hxjiantou{
        // width: 49px;
        height: 32px;
        // background: crimson;
        // transform: rotate(0deg);
        position: relative;
    }
    .hxian{
        // width: 49px;
        height: 2px;
        // position: relative;
        // margin-top: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .jtou{
        width: 20px;
        height: 32px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>