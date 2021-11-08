<template>
<div class="body">
  <div class="footer">
    <span class="constop" @click="stop">Stop</span>
    <label for="radio1" :class="{panduan:isShow}"><input  class="alljuge" type="checkbox" id="radio1" @click="alljuge"><span class="constop1">是否循环</span></label>
  </div>
<div class="sound-menu-one" >
  <div class="sound-submenu">早醒服务</div>
  <audio ref="submenusix" src="../assets/audio/zaoshanghao.mp3"  :loop="juge" ></audio>
  <audio ref="submenusev" src="../assets/audio/goodm.mp3" :loop="juge"></audio>
  <audio ref="submenueigh" src="../assets/audio/nienienie.mp3" :loop="juge"></audio>
  <audio ref="submenunine" src="../assets/audio/qilai.mp3" :loop="juge"></audio>
  <button  class="light" @click="submenu6">早上好</button>
  <button  class="light" @click="submenu7">good morning</button>
  <button  class="light" @click="submenu8">醒来啦</button>
  <button  class="light" @click="submenu9">起来嗨</button>

<!--  <button>asd</button>-->
<!--  <button @click="nodiejai">不叠加</button>-->
</div>

  <br>
  <br>
  <div class="displayinterface">
    <div class="sound-submenu">日常交流</div>
    <audio ref="submenuone" src="../assets/audio/Aliceisloli.mp3"  :loop="juge" ></audio>
    <audio ref="submenutow" src="../assets/audio/bagahentai.mp3" :loop="juge"></audio>
    <audio ref="submenufour" src="../assets/audio/jsmua.mp3" :loop="juge"></audio>
    <audio ref="submenufive" src="../assets/audio/what.mp3" :loop="juge"></audio>
    <audio ref="submenueleven" src="../assets/audio/backhome.mp3" :loop="juge"></audio>
    <audio ref="submenutwelve" src="../assets/audio/husband.mp3" :loop="juge"></audio>
    <audio ref="submenuthirteen" src="../assets/audio/gege.mp3" :loop="juge"></audio>
    <button  class="light" id="buttonname" @click="submenu1" >Aliceはloli</button>
    <button  class="light" @click="submenu2">吵死了</button>
    <button  class="light" @click="submenu4">mua</button>
    <button  class="light" @click="submenu5">为什么</button>
    <button  class="light" @click="submenu11">回家三问</button>
    <button  class="light" @click="submenu12">老公</button>
    <button  class="light" @click="submenu13">哥哥</button>
  </div>
  <br>
  <br>
  <div class="Performanceart">
    <div class="sound-submenu">艺术</div>
    <audio ref="submenuthree" src="../assets/audio/jsao.mp3" :loop="juge"></audio>
    <audio ref="submenuten" src="../assets/audio/wai.mp3" :loop="juge"></audio>
    <button class="light" @click="submenu3">嘶吼</button>
    <button class="light" @click="submenu10">歪比巴卜</button>
  </div>
  <div class="kongbai"></div>
</div>
</template>

<script>
export default {
name: "Sound",
  data(){
  return {
    juge:false,
    isShow:false
  }

  },
  mounted() {
    var audios = document.getElementsByTagName("audio");
// 暂停函数
    // audios.loop=true
    function pauseAll() {
      var self = this;
      [].forEach.call(audios, function (i) {
        // 将audios中其他的audio全部暂停
        console.log(i)
        i !== self && i.pause();
        // i.loop=false
      })
    }
// 给play事件绑定暂停函数
    [].forEach.call(audios, function (i) {
      i.addEventListener("play", pauseAll.bind(i));
    })
  },
  methods:{
    alljuge(){
      const all=document.getElementsByClassName("alljuge")
      // console.log(event.target.checked)
      // console.log(event.target)
      if(event.target.checked==true){
        this.juge=true
        this.isShow=true
        // console.log(this.juge)
      }else{
        this.juge=false
        this.isShow=false
        // console.log(this.juge)
      }
    },
//     nodiejai(){
//       var audios = document.getElementsByTagName("audio");
// // 暂停函数
//       function pauseAll() {
//         var self = this;
//         [].forEach.call(audios, function (i) {
//           // 将audios中其他的audio全部暂停
//           i !== self && i.pause();
//         })
//       }
// // 给play事件绑定暂停函数
//       [].forEach.call(audios, function (i) {
//         i.addEventListener("play", pauseAll.bind(i));
//       })
//     },
  stop(){
    var audios1 = document.getElementsByTagName("audio");
    console.log(audios1) ;
    [].forEach.call(audios1, function (i) {
      i.pause();
    })
  },
  submenu1(){
    const sub1=this.$refs.submenuone;
    // var self=this;
    // console.log(self.$refs);
    // const name11=document.getElementById("buttonname").getAttribute("value");
    // console.log(name11)
    // console.log(this)
    console.log(sub1);
    console.log(this.juge)
    // console.log(sub1.loop)
    // sub1.loop=false;
    if (sub1.paused) {
      sub1.currentTime=0;
      sub1.play();  // 播放
    } else {
      // sub1.currentTime=0;
      sub1.pause();// 暂停
    }
  },
    submenu2(){
      const sub2=this.$refs.submenutow;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu3(){
      const sub2=this.$refs.submenuthree;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu4(){
      const sub2=this.$refs.submenufour;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu5(){
  const sub2=this.$refs.submenufive;
  // console.log(sub2);
  if (sub2.paused) {
    sub2.currentTime=0;
    sub2.play();  // 播放
  } else {
    sub2.pause();// 暂停
  }
   },
    submenu6(){
      const sub2=this.$refs.submenusix;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu7(){
      const sub2=this.$refs.submenusev;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu8(){
      const sub2=this.$refs.submenueigh;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu9(){
      const sub2=this.$refs.submenunine;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu10(){
      const sub2=this.$refs.submenuten;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu11(){
      const sub2=this.$refs.submenueleven;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu12(){
      const sub2=this.$refs.submenutwelve;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
    submenu13(){
      const sub2=this.$refs.submenuthirteen;
      // console.log(sub2);
      if (sub2.paused) {
        sub2.currentTime=0;
        sub2.play();  // 播放
      } else {
        sub2.pause();// 暂停
      }
    },
}
}
</script>

<style scoped src="../assets/css/sound.css">

</style>