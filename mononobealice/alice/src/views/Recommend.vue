<template>
<div class="body">
  <div class="introduce">
    <div class="left">
      <img @click="opp" class="xaxin" src="../assets/imgRecommend/70129576_p0_master1200.webp" alt="">
      <br>
    </div>

    <div class="right">
      <div class="title">
      <p class="font"><a class="imp" href="https://space.bilibili.com/5563350/" target="_blank">小希小桃Channel</a></p>
      </div>
        <p class="conent">小希小桃是<a class="soso" href="https://space.bilibili.com/431412406?from=search&seid=2846356027336615647" target="_blank">虚研社</a>
          (一个致力于如何更有效地在虚拟世界里寻找真实感的研究社)所属的一期生，左边的小桃，右边的小希(关注一个号，直接D两人!)。直播间长时间保持欢乐气息，
          有时候还进行节气讲解，各种故事会，恋爱商谈。除此之外，小希小桃还会发布各种视频系列节目，科普类极强，有些视频内容非常内涵，质量也高。甚至有次我为了看懂
          一个8分钟的视频花费了一个多钟的时间来了解！最后，小桃的古风类歌曲我非常喜欢！附上↓冰火唱的，特别推荐：叙世 <span class="contr" @click="contr">5:50</span>
        </p>
      <div class="iframe">
        <iframe id="i" v-if="tao" src="//player.bilibili.com/player.html?aid=931393319&bvid=BV13M4y1g7MS&cid=364655246&page=1&as_wide=0&high_quality=1&danmaku=0&t=0 "
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        <iframe  v-else  src="//player.bilibili.com/player.html?aid=931393319&bvid=BV13M4y1g7MS&cid=364655246&page=1&as_wide=0&high_quality=1&danmaku=0&t=350 "
                  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </div>
    </div>
  </div>
  <div class="disp">
    <div class="iframe1">
      <p class="font1">【沙雕相声】</p>
      <iframe src="//player.bilibili.com/player.html?aid=544039897&bvid=BV1Dv4y1o7fb&cid=294288799&page=1&as_wide=0&high_quality=1&danmaku=0"
              scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
    <div class="iframe1">
      <p class="font1">【沙雕观察】</p>
      <iframe src="//player.bilibili.com/player.html?aid=546265374&bvid=BV1Cq4y1L798&cid=358622361&page=1&as_wide=0&high_quality=1&danmaku=0"
              scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
  </div>

  <div class="introduce1">
    <div class="left1">
      <div class="title1">
        <p class="font2"><a class="imp1" href="https://space.bilibili.com/487902?from=search&seid=16243614543117891692" target="_blank">召唤师yami</a></p>
      </div>
      <p class="conent1">
        一只守夜猫〜。正在为有朝一日成为全能UP而努力中。声音是真的超温柔。中文也不错。日常杂谈，学中文，LOL（大眼人柱力与中之人大眼说）。因为声音好听观众跪求歌会，
        但由于其个人阐述凑不起一次歌单以失败告终，但在直播间会时不时哼两句。唯一现存的一首完整歌为bw上唱的思念是一种病。一般下午直播，早上和晚上小概率捕捉。
      </p>
      <div class="iframe1">
        <iframe src="//player.bilibili.com/player.html?aid=461579261&bvid=BV1eL411W7hm&cid=368024092&page=1&as_wide=0&high_quality=1&danmaku=0"
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </div>
    </div>

    <div class="right1">
      <img @click="opb" class="xaxin1" src="../assets/imgRecommend/yami.webp" alt="">
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "Recommend",
  mounted() {
    const ifo=document.getElementById("i")
    console.log(ifo)
  },
  data(){
    return{
      tao:true,
    }
  },
  methods:{
    contr(){
      console.log("contr触发")
       this.tao=false
    },
    opb(){
      window.open('https://t.bilibili.com/509052391650365251?tab=2')
    },
    opp(){
      window.open('https://www.pixiv.net/artworks/70129576')
    },
  }
}
</script>

<style scoped src="../assets/css/recommend.css">

</style>