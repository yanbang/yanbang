 <!-- 我封装的组件 从左至右 文字 数字 数字 进度条 -->

<template>
    <div class="czzywssj">
        <!-- <p class="shuzi">1282</p>
        <p class="wenzi">总人数</p>
        <img src="@/assets/zj/navigation/kcrc/zrs.png"> -->
        <div class="outer-bg">
        <p class="wenzi">{{wz}}</p>
        <p class="szwenzi">{{sz}}万元</p>
        <p class="szwenziyi">{{szyi}}万元</p>
        </div>
        <!-- <el-progress :text-inside="true" :stroke-width="15" :percentage="percentval"></el-progress> -->
        <!-- <el-progress :text-inside="true" :stroke-width="15" :percentage="jindu"></el-progress> -->
        <el-progress :text-inside="true" :stroke-width="15" :percentage="Number(qgzxbdmbwclv) > 100 ? 100 : Number(qgzxbdmbwclv)" :format="_format(qgzxbdmbwclv)"></el-progress>
    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         percentval: null,
        //         // qgzxbdmbwclv:0,
        //     }
        // },
        props: {
            wz:{
                type:String,
                default:'动力'
            },
            sz:{
                type:Number,
                default:1.4
            },
            szyi:{
                type:Number,
                default:1.5
            },
            // jindu:{
            //     type:Number,
            //     default:66
            // },
            qgzxbdmbwclv:{
                type:Number,
                default:66
            },
            // szjd:{
            //     type:Number,
            //     default:percentval
            // },
        },
        created () {
            this.percentsz();
        },
        methods: {
            percentsz() {
                // toFixed(2) 保留两位小数    处理结果会四舍五入
                this.percentval=(this.sz/this.szyi).toFixed(2)*100
            },
            _format(value) {
                return () => {
                    return value + '%'
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    p{
        margin: 0;//必须清0
    }
    .czzywssj{
        width: 468px;
        height: 20px;
        // height: 160px;
        // margin-top: 10px;
        // background: orange;
        // text-align: center;
        display: flex;
        justify-content: space-around;
        // margin-left: 10px;
    }
    .outer-bg{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 240px;
      border-radius: 3px;
    }
    .wenzi,.szwenzi,.szwenziyi{
        color: #fff;
        font-size: 12px;
        width: 70px;
        height: 20px;
        line-height: 20px;
        /*background: orchid;*/
        text-align: center;
    }
    .el-progress{
        width: 220px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        // background: olivedrab;
    }
    
    // .shuzi{
    //     color: #fff;

    //     font-size: 24px;
    // }
    
</style>