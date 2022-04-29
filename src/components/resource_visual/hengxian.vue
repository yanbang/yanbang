<!-- 我封装的组件 横线 上面有 箭头和文字 -->
<template>
    <div class="hengxian">
        <p>{{text}}</p>
        <img src="@/assets/zj/bg_zj3_bt.png">
    </div>
</template>

<script>
    export default {
        props: {
            text:{
                type:String,
                default:'投资概况'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hengxian{
        margin-left: 10px;
        // margin-top: 100px;//记得删除
    }
    p{
        font-size:18px ;
        color: aqua;
        margin-left: 18px;
        margin-bottom: -25px;
    }
</style>