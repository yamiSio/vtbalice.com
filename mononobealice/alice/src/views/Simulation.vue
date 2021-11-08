<template>
<div class="body">
<!--  tabindex="1" autofocus-->
  <button class="keys" id="button" >
    <div data-key="65" class="key" >
      <img class="dagu" src="../assets/img/alicedagunew.webp" alt="gu">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kich</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">boom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">ride</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
    </div>
  </button>
  <audio data-key="65" src="../assets/sounds/clap.wav"></audio>
  <audio data-key="83" src="../assets/sounds/hihat.wav"></audio>
  <audio data-key="68" src="../assets/sounds/kick.wav"></audio>
  <audio data-key="70" src="../assets/sounds/openhat.wav"></audio>
  <audio data-key="71" src="../assets/sounds/boom.wav"></audio>
  <audio data-key="72" src="../assets/sounds/ride.wav"></audio>
  <audio data-key="74" src="../assets/sounds/snare.wav"></audio>
  <audio data-key="75" src="../assets/sounds/tom.wav"></audio>
  <audio data-key="76" src="../assets/sounds/tink.wav"></audio>
</div>

</template>

<script>
export default {
name: "Simulation",
  data(){
  return{
    mood:false
  }
  },
  mounted() {
  // document.getElementById("button").focus();
    window.addEventListener('keydown',function(e){
      const audio=document.querySelector('audio[data-key="'+e.keyCode+'"]');
      const key=document.querySelector('div[data-key="'+e.keyCode+'"]');
      //const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
      //按键为其他值，直接返回退出了，防止报错
      if(!audio) return;
      //每次按下将播放时间从0开始
      audio.currentTime=0;
      audio.play();
      const arr=['happy','sad','normal','playing','sad1']
      const index=Math.floor(Math.random()*5)
      // console.log(arr[index])
      //2.按下按键时改变该按键的一个显示效果
      key.classList.add(arr[index]);
      // key.firstChild.setAttribute("style","display:block");
      //  key.firstChild.style.display="block"
      console.log(key.firstChild)
      // setTimeout(function(){
      // 	key.classList.remove('playing');
      // },70);
    });

    function removePlaying(e){
      // console.log(e);
      // 当和 transform 对比时 一直按键后 不会恢复原有样式 也不晓得为啥
      // if (e.propertyName !== transform) return;
      // 改成这句话又没问题了
      // if (e.propertyName !== border-top-color) return;
      if(e.propertyName !=='border-top-color') return;
      this.classList.remove('playing');
      this.classList.remove('happy');
      this.classList.remove('sad');
      this.classList.remove('sad1');
      this.classList.remove('normal');
        // this.firstChild.style.display="none"
      console.log(this.firstChild)
    }

    //3.// 方法2效果转换之后，恢复到最初的状态
    //变化完成之后，移除playing
    const keys=document.querySelectorAll('.key');
    keys.forEach(key=>{
      key.addEventListener('transitionend',removePlaying);
      // key.addEventListener('transitionend',this.firstChild.style.display="none");
    });
  },
  methods:{
    onclick(){
      console.log(this.mood)
    }
  }
}
</script>

<style scoped src="../assets/css/simulation.css">

</style>