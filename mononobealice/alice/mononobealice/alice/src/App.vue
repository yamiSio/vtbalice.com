<template>
  <div id="app">
    <div id="top">
      <div class="bar-top">
        <ul class="primary-menu">
          <router-link  class="Ripples"  tag="li" to="/home"  replace >首页</router-link>
           <router-link class="Ripples" tag="li" to="/secondcreate" replace>切片</router-link>
           <router-link class="Ripples" tag="li" to="/mmd" replace>MMD</router-link>
          <router-link class="Ripples" tag="li" to="/sound" replace>音声</router-link>
          <router-link class="Ripples" tag="li" to="/simulation" replace>模拟</router-link>
          <router-link class="Ripples" tag="li" to="/picture" replace>图片</router-link>
<!--          <router-link class="top1"  tag="li" to="/" replace>图片-->
<!--            <ul class="sub-menu">-->
<!--              <router-link  class="Rs menu1" tag="li" to="/" replace>Alice</router-link>-->
<!--              <router-link class="Rs menu2" tag="li" to="/" replace>Other</router-link>-->
<!--            </ul>-->
<!--          </router-link>-->
          <router-link class="Ripples" tag="li" to="/recommend" replace>DD推荐</router-link>
          <router-link class="Ripples" tag="li" to="/informalessay" replace @click="remake">随笔</router-link>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>

</template>



<style>
@import "./assets/css/base.css";
</style>
<script>
export default {
  name:'App',
  components:{
  },
  data(){
    // scrollY:0
  },
  created() {
    // this.Ripples();
  },
  // watch: {
  //   '$route': (to, from) => {
  //     document.body.scrollTop = 0
  //     document.documentElement.scrollTop = 0
  //   }
  // },
  mounted() {
    this.Ripples();
  },
  methods:{
    Ripples(){
      const bt=document.querySelectorAll('.Ripples');
      console.log(bt);
      bt.forEach(Ripples=>{
        Ripples.addEventListener('click',(e)=>{
          let offsetLeft=e.target.offsetLeft;
          let offsetTop=e.target.offsetTop;
          //获取按钮的偏移量，位置坐标中的left和top
          //此处为按钮左上角，距离页面左侧和顶部的距离
          if(e.target.nodeName=='SPAN'){
            offsetLeft = e.target.offsetParent.offsetLeft;
            offsetTop = e.target.offsetParent.offsetTop;
            //解决一个bug，当点击空白处连续两次以上
            //会点击在span元素上，所以获取的offset相关指是span的
            //而不是div的，所以计算位置时是错误的
          }
          let x=e.clientX - offsetLeft;
          let y=e.clientY -offsetTop;

          let ripple = document.createElement('span');
          ripple.style.left= x + "px";
          ripple.style.top= y +"px";
          Ripples.appendChild(ripple);
          // 增加计时器，每秒钟自动将当前span清理掉，不至于原来越多
          setTimeout(() => {
            ripple.remove();
          }, 1000);
        });
      })
      },
    remake(){
      // this.$router.go(-1)
    }
    }
  }
</script>
