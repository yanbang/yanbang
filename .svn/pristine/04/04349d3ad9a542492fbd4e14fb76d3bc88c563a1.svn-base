<!-- 我封装的组件 左边是文字 右边是横线 上面是文字 -->


<template>
    <div class="zwzyhx">
        <!-- <div class="ztywxwsm">
            <img src="@/assets/zj/navigation/wycb/sjzx.png">
            <p class="shuzi" >21<span>个</span></p>
        </div>
        <p class="wenzi">数据中心</p> -->
        <p class="wenzism" :style="{marginLeft:jlzb}">{{wz}}</p>
        <div class="zpyhr">
            <p class="wenzi">{{wzyi}}</p>
            <hr>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            wz:{
                type:String,
                default:'数据账期：11月'
            },
            wzyi:{
                type:String,
                default:'成本分析'
            },
            jlzb:{
                type:String,
                default:'340px'
            },
        }
    }
</script>

<style lang="scss" scoped>
    p,hr{
        margin: 0;//必须清0
    }
    .zwzyhx{
        width: 460px;
        height: 20px;
        // background: orange;
        margin-left: 20px;
        // text-align: center;
    }
    .wenzism{
        color: rgb(152, 247, 247);
        font-size: 14px;
        // margin-left: 340px;
    }
    .zpyhr{
        width: 460px;
        height: 16px;
        // background: blueviolet;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // margin-left: 20px;
        // text-align: center;
    }
    .wenzi{
        color: rgb(152, 247, 247);
        font-size: 16px;
        line-height: 16px;
    }
    hr{
        width: 390px;
		// margin: 0 auto;
		border: 0;
		height: 1px;
		background: #333;
		// background: white;
		background-image: linear-gradient(to right, #ccc, #333, #ccc);
    }
    // .ztywxwsm{
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
    // // img{
    // //     margin: 10px 0 10px 0;
    // // }
    
    // .wenzi{
    //     color: #fff;
    //     margin-left: -60px;
    //     font-size: 16px;
    // }
</style>