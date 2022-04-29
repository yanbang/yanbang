<!-- 我封装的组件 从左至右 地名 钱数 单位 -->

<template>
    <!-- <div class="dmqsdw"> -->
        <!-- <p class="shuzi">1282</p>
        <p class="wenzi">总人数</p>
        <img src="@/assets/zj/navigation/kcrc/zrs.png"> -->
        <!-- <p class="wenzi">动力</p>
        <p class="szwenzi">1.4亿</p>
        <p class="szwenziyi">1.5亿</p>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress> -->
        <!-- <p>
            <span class="wenzi">{{wz}}</span>
            <span class="shuzi">{{sz}}</span>
            <span class="wenziyi">{{wzyi}}</span>
        </p> -->

        <!-- 原来 勿删除 -->
        <!-- <div class="dmqsdwp">
            <p class="wenzi">杭州：</p>
            <div class="shuzi">
                <p class="shuzip">53457</p>
            </div>
            <p class="wenziyi">万元</p>
        </div> -->
        <!-- 原来 勿删除 -->
        <div class="dmqsdwp">
            <p class="wenzi">{{wz}}</p>
            <div class="shuzi">
                <p class="shuzip">{{sz}}</p>
            </div>
            <p class="wenziyi">{{wzyi}}</p>
        </div>
        
        
    <!-- </div> -->
</template>

<script>
    export default {
        props: {
            wz:{
                type:String,
                default:'杭州:'
            },
            sz:{
                type:Number,
                default:53457
            },
            wzyi:{
                type:String,
                default:'万元'
            },
            // szjd:{
            //     type:Number,
            //     default:percentval
            // },
        },
    }
</script>

<style lang="scss" scoped>
    p{
        margin: 0;//必须清0
    }
    // .dmqsdw{
    //     width: 170px;
    //     height: 20px;
    //     // margin-top: 10px;
    //     background: orange;
    //     // text-align: center;
    //     // display: flex;
    //     // justify-content: space-around;
    //     // margin-left: 10px;
    // }
    .dmqsdwp{
        width: 170px;
        height: 20px;
        // margin-top: 10px;
        // background: blue;
        // text-align: center;
        display: flex;
        justify-content: space-around;
        // margin-left: 10px;
    }
    // .shuzi{
    //     color: #fff;
    //     // border: 1px solid #000;
    //     font-size: 24px;
    //     // background: olive;
    // }
    .wenzi{
        width: 50px;
        height: 20px;
        line-height: 20px;
        // background: darkmagenta;
        color: #fff;
        font-size: 16px;
    }
    .shuzi{
        // width: 149px;
        // height: 28px;
        // color: rgb(152, 247, 247);
        // font-size: 18px;
        // background: blueviolet;
        width: 80px;
        height: 20px;
        background: url('~@/assets/zj/navigation/wycb/qian.png') no-repeat;
        background-size: 75px 20px;
        // line-height: 20px;
        // // background: darkmagenta;
        // color: #fff;
        // font-size: 16px;
    }
    .shuzip{
        // width: 149px;
        // height: 28px;
        // color: rgb(152, 247, 247);
        // font-size: 18px;
        // background: blueviolet;
        // width: 80px;
        // height: 20px;
        // background: url('~@/assets/zj/navigation/wycb/qian.png') no-repeat;
        // background-size: 75px 14px;
        // line-height: 20px;
        // // background: darkmagenta;
        color: #fff;
        font-size: 16px;
        letter-spacing:6.5px;//字与字之间的间距
        margin-top: -1px;
        margin-left: 3px;
    }
    .wenziyi{
        // color: rgb(152, 247, 247);
        // font-size: 18px;
        width: 40px;
        height: 20px;
        line-height: 20px;
        // background: darkmagenta;
        color: #00fff6;
        font-size: 16px;
    }
    // .wenzi,.szwenzi,.szwenziyi{
    //     color: #fff;
    //     font-size: 18px;
    //     width: 50px;
    //     height: 50px;
    //     line-height: 50px;
    //     background: orchid;
    //     text-align: center;
    // }
    // .el-progress{
    //     width: 220px;
    //     height: 50px;
    //     line-height: 50px;
    //     text-align: center;
    //     background: olivedrab;
    // }
    
    
    
</style>