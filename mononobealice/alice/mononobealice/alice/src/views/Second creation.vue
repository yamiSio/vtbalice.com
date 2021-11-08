<template>
<div class="body">
  <div>
    <img v-show="btnflag" class="gotop" src="../assets/imghome/to-top.png" @click="backTop">
  </div>
  <div class="create1">
    <div class="ifrmemiddle1">
      <div class="iframeleft1">
        <div class="ifrmetitel1">
          <br>
          <p>♥️♠️相遇天使♦️♣️</p>
        </div>
        <br>
        <div class="iframe1">
          <iframe src="//player.bilibili.com/player.html?aid=627200221&bvid=BV1Lt4y1q7WP&cid=238695543&page=1&as_wide=0&high_quality=1&danmaku=0"
                  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
        <div class="ifrmetitel1">
          <br>
          <p>♥️♠️蜗牛与黄鹂鸟♦️♣️</p>
        </div>
        <br>
        <div class="iframe1">
          <iframe src="//player.bilibili.com/player.html?aid=839587810&bvid=BV1n54y1m7h2&cid=234357324&page=1&as_wide=0&high_quality=1&danmaku=0"
                  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
      </div>

      <div class="iframeright1">
        <!--          <img src="../assets/imghome/Aliceqicoco1602ingok.png" alt="">-->
      </div>
    </div>
  </div>

  <div class="create1">
    <div class="ifrmemiddle1">

      <div class="iframeright2">
        <!--          <img src="../assets/imghome/Aliceqicoco1602ingok.png" alt="">-->
      </div>
      <div class="iframeleft2">
        <div class="ifrmetitel1">
          <br>
          <p>♥️♠️国道♦️♣️</p>
        </div>
        <br>
        <div class="iframe1">
          <iframe src="//player.bilibili.com/player.html?aid=927557152&bvid=BV1gT4y1F7z6&cid=248198219&page=1&as_wide=0&high_quality=1&danmaku=0"
                  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
        <div class="ifrmetitel1">
          <br>
          <p>♥️♠️十年后的今天♦️♣️</p>
        </div>
        <br>
        <div class="iframe1">
          <iframe src="//player.bilibili.com/player.html?aid=286960809&bvid=BV1Gf4y1X7A1&cid=230987696&page=1&as_wide=0&high_quality=1&danmaku=0"
                  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>
      </div>

    </div>
  </div>

  <div class="creat2">
    <div class="iframeleft3">
      <div class="ifrmetitel1">
        <br>
        <p>♥️♠️觉醒吧！于黑暗中降临♦️♣️</p>
      </div>
      <br>
      <div class="iframe1">

        <iframe src="//player.bilibili.com/player.html?aid=885571433&bvid=BV1KK4y1L7Ub&cid=263576501&page=1&as_wide=0&high_quality=1&danmaku=0"
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </div>
    </div>
    <div class="iframeright3">
    </div>
    </div>

  <div class="creat2">
    <div class="iframeleft3">
      <div class="ifrmetitel1">
        <br>
        <p>♥️♠️一槌一个♦️♣️</p>
      </div>
      <br>
      <div class="iframe1">

          <iframe src="//player.bilibili.com/player.html?aid=712920565&bvid=BV1pD4y1X78b&cid=260888246&page=1&as_wide=0&high_quality=1&danmaku=0"
                  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </div>
    </div>
<!--    <div class="iframeright3">-->
<!--    </div>-->
  </div>

  <div class="creat3">
    <div class="ifrmetitel2">
      <br>
      <p>♥️♠️社死现场，说实话，我尬住了♦️♣️</p>
    </div>
    <br>
    <div class="iframe2">

      <iframe src="//player.bilibili.com/player.html?aid=583440365&bvid=BV1Sz4y197wv&cid=201203412&page=1&as_wide=0&high_quality=1&danmaku=0"
              scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
  </div>

</div>

</template>

<script>
export default {
name: "Second creation",
  data(){
    return{
      btnflag:false
    }
  },
  mounted() {
    window.addEventListener('scroll',this.scrollTop)
  },
  destroyed() {
    window.removeEventListener('scroll',this.scrollTop)
  },
  methods:{
    backTop(){
      const that=this;
      let timer=setInterval(()=>{
        let ispeed=Math.floor(-this.scrollTop/5)
        document.documentElement.scrollTop=that.scrollTop+ispeed;
        if(that.scrollTop==0){
          clearInterval(timer)
        }
      },16)
    },
    scrollTop(){
      const that=this;
      let scrollTop=window.pageYOffset || document.documentElement.scrollTop
      that.scrollTop=scrollTop;
      if(that.scrollTop>=1300){
        that.btnflag=true
      }else {
        that.btnflag=false
      }
    }
  }
}
</script>

<style scoped src="../assets/css/creationbase.css">
/*@import "../assets/css/creationbase.css";*/
</style>