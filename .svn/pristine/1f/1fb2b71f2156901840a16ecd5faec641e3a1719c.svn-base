<!--  -->
<template>
  <div>
        <vue-seamless-scroll :data="commentsDatas" :class-option="optionSingleHeightTime" class="seamless-warp">
            <ul class="listitem">
                <li v-for="(row, index) in commentsDatas" :key="index" >
                    <span class="name">{{row.name}}:</span>    
                    <span class="title">{{row.value}}</span>
                </li>
            </ul>
        </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

var comments =  [
    {name: '周晓娜', value: '这个软件推荐大家下载！'},
    {name: '左广斌', value: '这个软件功能非常好！'},
    {name: '祝志仓', value: '我是用了后又上来给好评的。，能正常使用，感谢。'},
    {name: '朱一伟', value: '谢谢你让我节省了很多时间。'},
    {name: '朱玉德', value: '非常实用，省了打电话客户了。'},
    {name: '朱文燕', value: '推荐下载，谁用谁知道。'},
    {name: '周志朋', value: '发现的太晚了，早用早受益'},
    {name: '周习文', value: '这个应用还不错噢，推荐下载！'},
    {name: '郑天明', value: '家庭应用必备，尤其是联通号的！'},
    {name: '庄桂强', value: '良心应用，真能解决问题的应用！'},
    {name: '智国', value: '欢迎下载，有一说一，很有用！'},
    {name: '钟瑞', value: '好用吗？你用用就知道了，不吹不累。'},
    {name: '张颖楣', value: '赶紧下载吧，这个是非常优秀的！'},
    {name: '张姚', value: '非常好用！！！！！！！！'},
    {name: '赵琳红', value: '挺好！！！！很棒！！！！'},
    {name: '赵慧青', value: '用过才知道好不用，谁用谁知道。'},
    {name: '张兆水', value: '还不错，希望再接再厉！'},
    {name: '张增强', value: '功能有了，挺实用的！'},
    {name: '赵爱军', value: '挺让我意外的，竟然这么好用。'},
    {name: '张志坚', value: '推荐大家下一下，试过才知道好不好。'},
    {name: '张涛', value: '短小精干，功能还可以！！！'},
    {name: '于建华', value: '功能有了，挺实用的'},
    {name: '张兆水', value: '百分百好评！'},
    {name: '于克新', value: '给你点赞，希望更好。'},
    {name: '翟乃国', value: '简介明了，解决问题，挺好的一个软件。'},
    {name: '张志坚', value: ' 不错的应用，感谢联通。'},
    {name: '张强', value: '说实在的这是最满意的一个应用。'},
    {name: '于鸿楠', value: '真心不错，与描述相符！'},
    {name: '张加福', value: '希望优化下界面设计，功能已经很强大了'},
    {name: '于航', value: '一个字好，两个字真好。'},
    {name: '殷玉臻', value: '非常棒，帮助了我这个小白'},
    {name: '虞滨赫', value: '下了才知道，好用的不得了。'},
    {name: '元维东', value: '操作简单，功能强大！'},
    {name: '袁文腾', value: '本来需要打人工客服的，没想到你解决了，给个好评！'},
]
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
export default {
  data () {
    return {
        commentsDatas: getRandomArrayElements(comments, 10)
    };
  },

  components: {
      vueSeamlessScroll
  },

  computed: {
    
    optionSingleHeightTime () {
      return {
        openWatch: true,
        singleHeight: 40,
        waitTime: 2000
      }
    },
  },

  mounted () {

  },

  methods: {

   
  }
}

</script>
<style lang='scss' scoped>

 .seamless-warp {
    height: 40px;
    width: 100%;
    overflow: hidden;
    font-size: 26px;
    color: #fff;
    padding: 0;
    margin: 0;
    .listitem {
         padding: 0;
         margin: 0;
      li {
         padding: 0;
         margin: 0;
         line-height: 40px;
         .name {
             margin-right: 10px;
         }
      }
    }
  }
</style>