<template>
<div class="body">
    <div class="top">
      <img v-show="btnflag" class="gotop" src="../assets/imghome/to-top.png" @click="backTop">
    </div>
  <div class="Tips">
    <p>(ps:由于进行了缩放，可能对一些图片造成了失真，单击可跳转至来源页面，尽享高级画质)</p>
  </div>
  <!--  只有路径使用网络图片好像才可以渲染出来
       还存在很多bug-->
<!--  <section>-->
<!--    <div class="big-container">-->
<!--      <div class="img-container">-->
<!--        <div class="column" v-for="(item,index) in imgData" :key="index">-->
<!--          <div class="img-card" v-for="(each,i) in item" :key="i" >-->
<!--            <img :src="each.path" :alt="kong">-->
<!--          <img src="../assets/img/Aliceheading.jpg" alt="">&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
  <div class="container">
    <div class="Inclusion size" @click="op1">
      <img class=" container-img "  :data-src="pic1" alt="">
    </div>
    <div class="Inclusion size3" @click="op5">
      <img class=" container-img "  :data-src="pic5" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op9">
      <img class=" container-img "  :data-src="pic9" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op13">
      <img class=" container-img "  :data-src="pic13" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op17">
      <img class=" container-img "  :data-src="pic17" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op21">
      <img class=" container-img "  :data-src="pic21" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op25">
      <img class=" container-img "  :data-src="pic25" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op29">
      <img class=" container-img "  :data-src="pic29" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op33">
      <img class=" container-img "  :data-src="pic33" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op37">
      <img class=" container-img "  :data-src="pic37" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op41">
      <img class=" container-img "  :data-src="pic41" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op45">
      <img class=" container-img "  :data-src="pic45" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op49">
      <img class=" container-img "  :data-src="pic49" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op53">
      <img class=" container-img "  :data-src="pic53" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op57">
      <img class=" container-img "  :data-src="pic57" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op61">
      <img class=" container-img "  :data-src="pic61" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op65">
      <img class=" container-img "  :data-src="pic65" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op69">
      <img class=" container-img "  :data-src="pic69" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op73">
      <img class=" container-img "  :data-src="pic73" alt="">
    </div>
  </div>

  <div class="container">
    <div class="Inclusion size" @click="op2">
      <img class=" container-img "  :data-src="pic2" alt="">
    </div>
    <div class="Inclusion " style="width: 338px" @click="op6">
      <img class=" container-img "  :data-src="pic6" alt="">
    </div>
    <div class="Inclusion " style="width: 338px" @click="op10">
      <img class=" container-img "  :data-src="pic10" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op14">
      <img class=" container-img "  :data-src="pic14" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op18">
      <img class=" container-img "  :data-src="pic18" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op22">
      <img class=" container-img "  :data-src="pic22" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op26">
      <img class=" container-img "  :data-src="pic26" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op30">
      <img class=" container-img "  :data-src="pic30" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op34">
      <img class=" container-img "  :data-src="pic34" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op38">
      <img class=" container-img "  :data-src="pic38" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op42">
      <img class=" container-img "  :data-src="pic42" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op46">
      <img class=" container-img "  :data-src="pic46" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op50">
      <img class=" container-img "  :data-src="pic50" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op54">
      <img class=" container-img "  :data-src="pic54" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op58">
      <img class=" container-img "  :data-src="pic58" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op62">
      <img class=" container-img "  :data-src="pic62" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op66">
      <img class=" container-img "  :data-src="pic66" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op70">
      <img class=" container-img "  :data-src="pic70" alt="">
    </div>

  </div>

  <div class="container">
    <div class="Inclusion " style="width: 350px" @click="op3">
      <img class=" container-img "  :data-src="pic3" alt="">
    </div>
    <div class="Inclusion " style="width: 350px;" @click="op7">
      <img class=" container-img "  :data-src="pic7" alt="">
    </div>
    <div class="Inclusion " style="width: 320px" @click="op11">
      <img class=" container-img "  :data-src="pic11" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op15">
      <img class=" container-img "  :data-src="pic15" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op19">
      <img class=" container-img "  :data-src="pic19" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op23">
      <img class=" container-img "  :data-src="pic23" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op27">
      <img class=" container-img "  :data-src="pic27" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op31">
      <img class=" container-img "  :data-src="pic31" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op35">
      <img class=" container-img "  :data-src="pic35" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op39">
      <img class=" container-img "  :data-src="pic39" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op43">
      <img class=" container-img "  :data-src="pic43" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op47">
      <img class=" container-img "  :data-src="pic47" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op51">
      <img class=" container-img "  :data-src="pic51" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op55">
      <img class=" container-img "  :data-src="pic55" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op59">
      <img class=" container-img "  :data-src="pic59" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op63">
      <img class=" container-img "  :data-src="pic63" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op67">
      <img class=" container-img "  :data-src="pic67" alt="">
    </div>
    <div class="Inclusion " style="width: 350px" @click="op71">
      <img class=" container-img "  :data-src="pic71" alt="">
    </div>
  </div>
  <div class="container">
    <div class="Inclusion size2" @click="op4">
      <img class=" container-img "  :data-src="pic4" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op8">
      <img class=" container-img "  :data-src="pic8" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op12">
      <img class=" container-img "  :data-src="pic12" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op16">
      <img class=" container-img "  :data-src="pic16" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op20">
      <img class=" container-img "  :data-src="pic20" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op24">
      <img class=" container-img "  :data-src="pic24" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op28">
      <img class=" container-img "  :data-src="pic28" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op32">
      <img class=" container-img "  :data-src="pic32" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op36">
      <img class=" container-img "  :data-src="pic36" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op40">
      <img class=" container-img "  :data-src="pic40" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op44">
      <img class=" container-img "  :data-src="pic44" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op48">
      <img class=" container-img "  :data-src="pic48" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op52">
      <img class=" container-img "  :data-src="pic52" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op56">
      <img class=" container-img "  :data-src="pic56" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op60">
      <img class=" container-img "  :data-src="pic60" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op64">
      <img class=" container-img "  :data-src="pic64" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op68">
      <img class=" container-img "  :data-src="pic68" alt="">
    </div>
    <div class="Inclusion " style="width: 340px" @click="op72">
      <img class=" container-img "  :data-src="pic72" alt="">
    </div>
  </div>

</div>
</template>

<script>
import img1 from '@/js/img.js'
export default {
name: "Picture",
  data(){
    return{
      btnflag:false,
      // imgData:img1
      pic1:require("../assets/picture/Alice1tow91004711.jpg"),
      pic2:require("../assets/picture/Alice2tow91004711.jpg"),
      pic3:require("../assets/picture/Alice68476328.jpg"),
      pic4:require("../assets/picture/Alice68609620_p0.png"),
      pic5:require("../assets/picture/Alice68679118_p0.png"),
      pic6:require("../assets/picture/Alice69624000.jpg"),
      pic7:require("../assets/picture/Alice71678641_p0.png"),
      pic8:require("../assets/picture/Alice74952566_p0.png"),
      pic9:require("../assets/picture/Alice76257437_p0.png"),
      pic10:require("../assets/picture/Alice76278697_p0.jpg"),
      pic11:require("../assets/picture/Alice76381582_p0.jpg"),
      pic12:require("../assets/picture/Alice76819351_p0.png"),
      pic13:require("../assets/picture/Alice76838069_p0.jpg"),
      pic14:require("../assets/picture/Alice76847092_p0.jpg"),
      pic15:require("../assets/picture/Alice77298789_p0.png"),
      pic16:require("../assets/picture/Alice77476885.jpg"),
      pic17:require("../assets/picture/Alice77841735_p0.png"),
      pic18:require("../assets/picture/Alice77842549_p0.jpg"),
      pic19:require("../assets/picture/Alice78841636_p0.png"),
      pic20:require("../assets/picture/Alice78966608_p0.png"),
      pic21:require("../assets/picture/Alice79146849_p0.png"),
      pic22:require("../assets/picture/Alice79870226_p0.png"),
      pic23:require("../assets/picture/Alice82502132_p0.png"),
      pic24:require("../assets/picture/Alice85009146_p0.jpg"),
      pic25:require("../assets/picture/Alice85784452_p0.png"),
      pic26:require("../assets/picture/Alice86499845_p0.png"),
      pic27:require("../assets/picture/Alice88685005_p1.jpg"),
      pic28:require("../assets/picture/Alice89408138_p0.jpg"),
      pic29:require("../assets/picture/Alice89718197_p0.png"),
      pic30:require("../assets/picture/Alice89979124.jpg"),
      pic31:require("../assets/picture/Alice90656426_p0.jpg"),
      pic32:require("../assets/picture/Alice91044205_p0.png"),
      pic33:require("../assets/picture/Alice91128965_p0.png"),
      pic34:require("../assets/picture/Alice91340054.png"),
      pic35:require("../assets/picture/Aliceandtu88564433.png"),
      pic36:require("../assets/picture/Aliceangry78596794.jpg"),
      pic37:require("../assets/picture/Alicechair68900195.png"),
      pic38:require("../assets/picture/Alicedowm 68390508.jpg"),
      pic39:require("../assets/picture/Alicedowm79576193.png"),
      pic40:require("../assets/picture/Alicedual89412978.png"),
      pic41:require("../assets/picture/Aliceeye88404419.jpg"),
      pic42:require("../assets/picture/Alicegita79586449.jpg"),
      pic43:require("../assets/picture/Alicegita83837390.png"),
      pic44:require("../assets/picture/Alicegitajs85698846.png"),
      pic45:require("../assets/picture/Alicehand69390982.jpg"),
      pic46:require("../assets/picture/Alicehand73202046.png"),
      pic47:require("../assets/picture/Alicehand81553191.jpg"),
      pic48:require("../assets/picture/alicehat0620.jpg"),
      pic49:require("../assets/picture/Alicehe72781214.png"),
      pic50:require("../assets/picture/Alicehefu88411473.jpg"),
      pic51:require("../assets/picture/Alicejk 69924331.png"),
      pic52:require("../assets/picture/Alicejk88697680.jpg"),
      pic53:require("../assets/picture/Alicelolita79448711.png"),
      pic54:require("../assets/picture/Alicelook82107224.png"),
      pic55:require("../assets/picture/Alicelove 83897171.jpg"),
      pic56:require("../assets/picture/Alicem87632701.jpg"),
      pic57:require("../assets/picture/Alicemed89338864.png"),
      pic58:require("../assets/picture/Alicemeto 72789985.png"),
      pic59:require("../assets/picture/Aliceniu79938040.jpg"),
      pic60:require("../assets/picture/Aliceonaga89481380.jpg"),
      pic61:require("../assets/picture/alicepajama 74330797.jpg"),
      pic62:require("../assets/picture/Alicepoker91323256.jpg"),
      pic63:require("../assets/picture/Aliceqiu68783289.jpg"),
      pic64:require("../assets/picture/Alicesleep70551197.png"),
      pic65:require("../assets/picture/Aliceswimming84074659.png"),
      pic66:require("../assets/picture/Alicetea69717062.jpg"),
      pic67:require("../assets/picture/Aliceteach90647015.png"),
      pic68:require("../assets/picture/Aliceteatime81794418.jpg"),
      pic69:require("../assets/picture/Alicetufu90563730.jpg"),
      pic70:require("../assets/picture/Alicewink89394957.png"),
      pic71:require("../assets/picture/Alicexinkong71671969.jpg"),
      pic72:require("../assets/picture/Aliceyami88259268.jpg"),
      pic73:require("../assets/picture/Aliceye90763460.jpg"),

    }
  },
  mounted() {
    window.addEventListener('scroll',this.scrollTop)
      const con=document.querySelector('.container')
       const imgs=document.querySelectorAll('.container-img')
    // const imgs=document.querySelectorAll('img')
    console.log(imgs)
    // 1.失败方法（1）
    // // const imgs=document.querySelectorAll('img')
    // // const imgs1=document.querySelectorAll('#container-img')
    // const conTop=con.getBoundingClientRect().top
    // // if(imgTop-conTop<=con.clientHeight){
    // //   const src=img.getAttribute('data-src')
    // //   // console.log(src)
    // //   img.setAttribute('src',src)
    // //   // img.classList.add('fade')
    // // }
    // 2.成功方法一，缺陷：会一直对scroll触发监听
    //   window.addEventListener('scroll',()=>{
    //     console.log("chufale")
    //     imgs.forEach(img=>{
    //       const imgTop=img.getBoundingClientRect().top
    //
    //       if(imgTop<window.innerHeight){
    //           const src=img.getAttribute('data-src')
    //           img.setAttribute('src',src)
    //       }
    //     })
    //   })
    const callback=entries=>{
      entries.forEach((entry)=>{

        // if(entry.isIntersecting){
        //   console.log("触发")
        //   const image=entry.target;
        //   const data_src=image.getAttribute('data-src');
        //   image.setAttribute('src',data_src)
        //   image.classList.add('fade');
        //   observer.unobserve(image);
        // }
        if(entry.intersectionRatio){
          console.log("触发")
          const image=entry.target;
          const data_src=image.getAttribute('data-src');
          image.setAttribute('src',data_src)
          image.classList.add('fade');
          observer.unobserve(image);
        }
        // if(entry.intersectionRect){
        //   console.log("触发")
        //   const image=entry.target;
        //   const data_src=image.getAttribute('data-src');
        //   image.setAttribute('src',data_src)
        //   image.classList.add('fade');
        //   observer.unobserve(image);
        // }
      })
    };
    const options={
      root:null,
      threshold:[0.3],
      rootMargin:'0px'
    }
    const observer=new IntersectionObserver(callback,options);
    imgs.forEach(image=>{
      observer.observe(image);
    })
    },
  destroyed() {
    window.removeEventListener('scroll',this.scrollTop)
  },
  methods:{
  op1(){
    window.open('https://www.pixiv.net/artworks/91004711')
  },
    op2(){
      window.open('https://www.pixiv.net/artworks/91004711')
    },
    op3(){
      window.open('https://www.pixiv.net/artworks/68476328')
    },
    op4(){
      window.open('https://www.pixiv.net/artworks/68609620')
    },
    op5(){
      window.open('https://www.pixiv.net/artworks/68679118')
    },
    op6(){
      window.open('https://www.pixiv.net/artworks/69624000')
    },
    op7(){
      window.open('https://www.pixiv.net/artworks/71678641')
    },
    op8(){
      window.open('https://www.pixiv.net/artworks/74952566')
    },
    op9(){
      window.open('https://www.pixiv.net/artworks/76257437')
    },
    op10(){
      window.open('https://www.pixiv.net/artworks/76278697')
    },
    op11(){
      window.open('https://www.pixiv.net/artworks/76381582')
    },
    op12(){
      window.open('https://www.pixiv.net/artworks/76819351')
    },
    op13(){
      window.open('https://www.pixiv.net/artworks/76838069')
    },
    op14(){
      window.open('https://www.pixiv.net/artworks/76847092')
    },
    op15(){
      window.open('https://www.pixiv.net/artworks/77298789')
    },
    op16(){
      window.open('https://www.pixiv.net/artworks/77476885')
    },
    op17(){
      window.open('https://www.pixiv.net/artworks/77841735')
    },
    op18(){
      window.open('https://www.pixiv.net/artworks/77842549')
    },
    op19(){
      window.open('https://www.pixiv.net/artworks/78841636')
    },
    op20(){
      window.open('https://www.pixiv.net/artworks/78966608')
    },
    op21(){
      window.open('https://www.pixiv.net/artworks/79146849')
    },
    op22(){
      window.open('https://www.pixiv.net/artworks/79870226')
    },
    op23(){
      window.open('https://www.pixiv.net/artworks/82502132')
    },
    op24(){
      window.open('https://www.pixiv.net/artworks/85009146')
    },
    op25(){
      window.open('https://www.pixiv.net/artworks/85784452')
    },
    op26(){
      window.open('https://www.pixiv.net/artworks/86499845')
    },
    op27(){
      window.open('https://www.pixiv.net/artworks/88685005')
    },
    op28(){
      window.open('https://www.pixiv.net/artworks/89408138')
    },
    op29(){
      window.open('https://www.pixiv.net/artworks/89718197')
    },
    op30(){
      window.open('https://www.pixiv.net/artworks/89979124')
    },
    op31(){
      window.open('https://www.pixiv.net/artworks/90656426')
    },
    op32(){
      window.open('https://www.pixiv.net/artworks/91044205')
    },
    op33(){
      window.open('https://www.pixiv.net/artworks/91128965')
    },
    op34(){
      window.open('https://www.pixiv.net/artworks/91340054')
    },
    op35(){
      window.open('https://www.pixiv.net/artworks/88564433')
    },
    op36(){
      window.open('https://www.pixiv.net/artworks/78596794')
    },
    op37(){
      window.open('https://www.pixiv.net/artworks/68900195')
    },
    op38(){
      window.open('https://www.pixiv.net/artworks/68390508')
    },
    op39(){
      window.open('https://www.pixiv.net/artworks/79576193')
    },
    op40(){
      window.open('https://www.pixiv.net/artworks/89412978')
    },
    op41(){
      window.open('https://www.pixiv.net/artworks/88404419')
    },
    op42(){
      window.open('https://www.pixiv.net/artworks/79586449')
    },
    op43(){
      window.open('https://www.pixiv.net/artworks/83837390')
    },
    op44(){
      window.open('https://www.pixiv.net/artworks/85698846')
    },
    op45(){
      window.open('https://www.pixiv.net/artworks/69390982')
    },
    op46(){
      window.open('https://www.pixiv.net/artworks/73202046')
    },
    op47(){
      window.open('https://www.pixiv.net/artworks/81553191')
    },
    op48(){
      window.open('https://www.pixiv.net/artworks/76176234')
    },
    op49(){
      window.open('https://www.pixiv.net/artworks/72781214')
    },
    op50(){
      window.open('https://www.pixiv.net/artworks/88411473')
    },
    op51(){
      window.open('https://www.pixiv.net/artworks/69924331')
    },
    op52(){
      window.open('https://www.pixiv.net/artworks/88697680')
    },
    op53(){
      window.open('https://www.pixiv.net/artworks/79448711')
    },
    op54(){
      window.open('https://www.pixiv.net/artworks/82107224')
    },
    op55(){
      window.open('https://www.pixiv.net/artworks/83897171')
    },
    op56(){
      window.open('https://www.pixiv.net/artworks/87632701')
    },
    op57(){
      window.open('https://www.pixiv.net/artworks/89338864')
    },
    op58(){
      window.open('https://www.pixiv.net/artworks/72789985')
    },
    op59(){
      window.open('https://www.pixiv.net/artworks/79938040')
    },
    op60(){
      window.open('https://www.pixiv.net/artworks/89481380')
    },
    op61(){
      window.open('https://www.pixiv.net/artworks/74330797')
    },
    op62(){
      window.open('https://www.pixiv.net/artworks/91323256')
    },
    op63(){
      window.open('https://www.pixiv.net/artworks/68783289')
    },
    op64(){
      window.open('https://www.pixiv.net/artworks/70551197')
    },
    op65(){
      window.open('https://www.pixiv.net/artworks/84074659')
    },
    op66(){
      window.open('https://www.pixiv.net/artworks/69717062')
    },
    op67(){
      window.open('https://www.pixiv.net/artworks/90647015')
    },
    op68(){
      window.open('https://www.pixiv.net/artworks/81794418')
    },
    op69(){
      window.open('https://www.pixiv.net/artworks/90563730')
    },
    op70(){
      window.open('https://www.pixiv.net/artworks/89394957')
    },
    op71(){
      window.open('https://www.pixiv.net/artworks/71671969')
    },
    op72(){
      window.open('https://www.pixiv.net/artworks/88259268')
    },
    op73(){
      window.open('https://www.pixiv.net/artworks/90763460')
    },

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
    },
    // slilceData(){
    //   const width =window.innerWidth
    //   const column=Math.floor(width/235)
    //   console.log('column:',column)
    //   const num=Math.floor(this.imgData.length/column)
    //   console.log('num:',num)
    //   let arr=this.imgData.map((item,index)=>{
    //     if(index<=column-2)
    //       return this.imgData.slice(index*num,(index+1)*num)
    //     if(index===column-1)
    //       return this.imgData.slice(index*num)
    //   })
    //   arr=arr.filter(item=>item)
    //   this.imgData=arr;
    //   // console.log('arr:',arr)
    // }
  },
  created() {
  // this.slilceData();

  }
}
</script>

<style scoped src="../assets/css/picture.css">

</style>