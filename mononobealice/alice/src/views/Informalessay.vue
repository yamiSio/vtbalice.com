<template>
<div class="body" id="body">
<div class="conent" id="conent" @click="clickque">
<!--  <span></span>-->
  <p v-show="essay">「 长亭外，古道边，芳草碧连天。 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ——《送别》李叔同</p>
  <p v-show="essay1">「 洛阳城东西，长作经时别。<br>
    昔去雪如花，今来花似雪。 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ——《别诗二首·其一》范云</p>
  <p v-show="essay2">「 此去经年，应是良辰好景虚设。<br>
    便纵有千种风情，更与何人说？ 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ——《雨霖铃·寒蝉凄切》柳永</p>
  <p v-show="essay3">「 小时候不理解老人晒太阳，一坐就是半天，长大了才明白，<br>目之所及皆是回忆，心之所想皆是过往，眼之所看皆是遗憾！ 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay4">「 错把陈醋当成墨，写尽半生皆是酸！ 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay5">「 饭疏食，饮水，曲肱而枕之，乐亦在其中矣。不义且富且贵，于我如浮云！ 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ——《论语·述而篇》佚名</p>
  <p v-show="essay6">「 你终会发现，你需要的并不是一个异性，而是一个可以沟通的灵魂 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p  v-show="essay7">「 天上月，人间月，负笈求学肩上月，登高凭栏眼中月，竹篮打水碎又圆。<br>
    山间风，水边风，御剑远游脚下风，圣贤书斋翻书风，风吹浮萍有相逢。 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay8">「 当你无法回头时，才是真正的旅行 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay9">「 你所浪费的今天，是昨天死去的人奢望的明天! 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay10">「 人和人之间若产生接触，就会有种向前进的感觉吧。 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay11">「 人穷不评理，个小不拉架。无钱莫入众，言轻莫劝人。<br>力微休负重，遭难莫寻亲。待到成功时，把酒言初心！ 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay12">「 忽有故人心上过，回首山河已是秋 ，两处相思同淋雪，此生也算共白头！ 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay13">「 少年自有凌云志，不负黄河万古流 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay14">「 心镜决定风景，心乱一切乱，心安一切安。旅行如此，人生亦然。 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay15">「 我落笔写下青春年华，只是墨色淡了，没能写出未来可期，也没能写出放荡不羁.<br>
    所以我一生奔赴山海，沾着林间枫叶，沾着海中腥咸，落笔，写下这似水流年。<br>
    世界不止眼前的苟且，当然，还有诗和远方！ 」
 </p>
  <p v-show="essay16">「 某些人和事，哪怕是路边的风景，可是只要看一眼，依然会让人觉得很美好 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay17">「 人最大的痛苦是无法跨越知道和做到的鸿沟，人始终要认识到自己的有限性！ 」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay18">「 日出东方催人醒，不及晚霞懂我心，辞别在无相见日，终是一人渡春秋。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay19">「 六月的风终究吹走了我们的青春，但也镌刻下无数的光阴年少，不论来时微风狂涛，我们定当汹涌如潮。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay20">「 而有人正在依靠自己的老气横秋，通过最尖酸刻薄的汉字组合，来浇灭年轻人的热情与浪漫，<br>
    看着提前数十年就蔫下去的希望而沾沾自喜，坚信又帮助后辈成长为与自己一样成熟稳重的正常人了」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay21">「 愿你走出半生，归来仍是少年。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay22">「 无论结果如何，潜心修炼，洗涤心灵，丰富精神世界，增长见识。告诫自己，做人要脚踏实地，切勿好高骛远，眼高手低，<br>
    远离人性的欲与贪念，学会知足与感恩，感受人的生命与情感，脱胎换骨，向阳而生。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay23">「 人心从来不是这么单纯的东西，善是一种需要相信的东西，但恶不需要。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay24">「 人生而在世，当为君子」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay25">「 让生命像一团热烈燃烧的火，直到死亡才能使它熄灭。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay26">「 他们这群人,又想吃人,又是鬼鬼祟祟,想法子遮掩,不敢直接下手,真要令我笑死。<br>
    我忍不住,便放声大笑起来,十分快活。自己晓得这笑声里面,有的是义勇和正气。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;——《狂人日记》鲁迅</p>
  <p v-show="essay27">「 答应自己要去的地方 别管多远 别管多久 一定要抵达.」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p  v-show="essay28">「 唯有人心与太阳不可直视。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay29">「 无论有多困难，都坚强地抬头挺胸，人生是一场醒悟，不要昨天，不要明天，只要今天。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay30">「 因为有了因为，所以有了所以，既然已成既然，何必再说何必。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay31">「 别惦记那些得不到的，你正拥有的也是别人求而不得的。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay32">「 这世界可能不像你想的那么好 但也不会像你想象的那样差。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay33">「 会者定离，一期一祈， 勿怀忧也，世相如是， 唯心所向，为卿所往。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay34">「 我们曾如此渴望生命的波澜，到最后才发现，人生最曼妙的风景，竟是内心的淡定和从容。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay35">「 我们曾如此渴望生命的波澜，到最后才发现，人生最曼妙的风景，竟是内心的淡定和从容。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay36">「 总有人间一两风，填我十万八千梦。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay37">「 既许一人偏爱 愿尽余生之慷慨。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay38">「 我告诉你我喜欢你，并不是一定要和你在一起，只是希望今后的你，<br>
    在遭遇人生低谷的时候，不要灰心，至少曾经有人被你的魅力所吸引，曾经是，以后也会是。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay39">「 昨日佳人，今昔得见，不知相别几许，影嫚嫚，声婉婉，待明日，长依依。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay40">「 你在楼上看风景，我在桥上看你。明月装饰了你的窗子，你装饰了我的梦。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay41">「 百目无她，百书智华，君当醒悟，建我中华。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay42">「 一身清贫，怎敢延误佳人。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay43">「  花自飘零水自流。一种相思，两处闲愁。此情无计可消除，才下眉头，却上心头。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;——《一剪梅·红藕香残玉簟秋》李清照</p>
  <p v-show="essay44">「  喜欢夏天的雨，雨后的光，和任何时候的你。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay45">「  我说不出爱你的理由，但我知道，你就是我不爱别人的理由。<br>
    我喜欢你就像南巷的花猫，放荡不羁，我喜欢你，就像北城的石桥，古老至极。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p  v-show="essay46">「  当不了制定规则的人，还不是一辈子在别人画的圈里打转。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay47">「 笑容很适合你，今后也请继续微笑。」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay48">「 没有明天也一切如常这种事！」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>
  <p v-show="essay49">「 读书是让你明事理知荣辱，而后内敛自谦,严于律己，宽于待人，<br>
    不是让你自觉识几个大字，懂几两学问就高人一等
    」
    <br> &nbsp;&nbsp;&nbsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</p>

</div>
</div>
</template>

<script>
export default {
name: "Informalessay",
  data(){
  return{
    userArr:[
      {
        id:0,
        name:"sad"
      },
      {
        id:1,
        name:"saas"
      },
      {
        id:2,
        name:"sfsa"
      },
      {
        id:3,
        name:"ssafef"
      },
      {
        id:4,
        name:"sadsad"
      },
    ],
    essay:false,
    essay1:false,
    essay2:false,
    essay3:false,
    essay4:false,
    essay5:false,
    essay6:false,
    essay7:false,
    essay8:false,
    essay9:false,
    essay10:false,
    essay11:false,
    essay12:false,
    essay13:false,
    essay14:false,
    essay15:false,
    essay16:false,
    essay17:false,
    essay18:false,
    essay19:false,
    essay20:false,
    essay21:false,
    essay22:false,
    essay23:false,
    essay24:false,
    essay25:false,
    essay26:false,
    essay27:false,
    essay28:false,
    essay29:false,
    essay30:false,
    essay31:false,
    essay32:false,
    essay33:false,
    essay34:false,
    essay35:false,
    essay36:false,
    essay37:false,
    essay38:false,
    essay39:false,
    essay40:false,
    essay41:false,
    essay42:false,
    essay43:false,
    essay44:false,
    essay45:false,
    essay46:false,
    essay47:false,
    essay48:false,
    essay49:false,
  }
  },
  created() {
    // const conen=document.getElementsByClassName("conent")
    // conen.addEventListener('click',(e)=>{
    //   let offsetLeft=e.target.offsetLeft;
    //   let offsetTop=e.target.offsetTop;
    //   //获取按钮的偏移量，位置坐标中的left和top
    //   //此处为按钮左上角，距离页面左侧和顶部的距离
    //   if(e.target.nodeName=='SPAN'){
    //     offsetLeft = e.target.offsetParent.offsetLeft;
    //     offsetTop = e.target.offsetParent.offsetTop;
    //     //解决一个bug，当点击空白处连续两次以上
    //     //会点击在span元素上，所以获取的offset相关指是span的
    //     //而不是div的，所以计算位置时是错误的
    //   }
    //   let x=e.clientX - offsetLeft;
    //   let y=e.clientY -offsetTop;
    //
    //   let ripple = document.createElement('span');
    //   ripple.style.left= x + "px";
    //   ripple.style.top= y +"px";
    //   conen.appendChild(ripple);
    //   // 增加计时器，每秒钟自动将当前span清理掉，不至于原来越多
    //   setTimeout(() => {
    //     ripple.remove();
    //   }, 1000);
    // });
  },
  mounted() {

  // const arr=['happy','efef','efs']
    const index=Math.floor(Math.random()*50)
    // const index=49;
    switch(index)
    {
      case 0:this.essay=true;break;
      case 1:this.essay1=true;break;
      case 2:this.essay2=true;break;
      case 3:this.essay3=true;break;
      case 4:this.essay4=true;break;
      case 5:this.essay5=true;break;
      case 6:this.essay6=true;break;
      case 7:this.essay7=true;break;
      case 8:this.essay8=true;break;
      case 9:this.essay9=true;break;
      case 10:this.essay10=true;break;
      case 11:this.essay11=true;break;
      case 12:this.essay12=true;break;
      case 13:this.essay13=true;break;
      case 14:this.essay14=true;break;
      case 15:this.essay15=true;break;
      case 16:this.essay16=true;break;
      case 17:this.essay17=true;break;
      case 18:this.essay18=true;break;
      case 19:this.essay19=true;break;
      case 20:this.essay20=true;break;
      case 21:this.essay21=true;break;
      case 22:this.essay22=true;break;
      case 23:this.essay23=true;break;
      case 24:this.essay24=true;break;
      case 25:this.essay25=true;break;
      case 26:this.essay26=true;break;
      case 27:this.essay27=true;break;
      case 28:this.essay28=true;break;
      case 29:this.essay29=true;break;
      case 30:this.essay30=true;break;
      case 31:this.essay31=true;break;
      case 32:this.essay32=true;break;
      case 33:this.essay33=true;break;
      case 34:this.essay34=true;break;
      case 35:this.essay35=true;break;
      case 36:this.essay36=true;break;
      case 37:this.essay37=true;break;
      case 38:this.essay38=true;break;
      case 39:this.essay39=true;break;
      case 40:this.essay40=true;break;
      case 41:this.essay41=true;break;
      case 42:this.essay42=true;break;
      case 43:this.essay43=true;break;
      case 44:this.essay44=true;break;
      case 45:this.essay45=true;break;
      case 46:this.essay46=true;break;
      case 47:this.essay47=true;break;
      case 48:this.essay48=true;break;
      case 49:this.essay49=true;break;
    }
    // setTimeout(() => {
    //   const index=Math.floor(Math.random()*3)
    //   switch(index)
    //   {
    //     case 0:this.happy=true;break;
    //     case 1:this.happy1=true;break;
    //     case 2:this.happy2=true;break;
    //   }
    // console.log(this.happy);
    // console.log(this.happy1);
    // console.log(this.happy2);
    // },1000)
    // setInterval(()=>{
    //   const index=Math.floor(Math.random()*3)
    //   switch(index)
    //   {
    //     case 0:this.happy=true;break;
    //     case 1:this.happy1=true;break;
    //     case 2:this.happy2=true;break;
    //   }
    //   console.log(this.happy);
    //   console.log(this.happy1);
    //   console.log(this.happy2);
    // },1000)
    // if(index<1){
    //   this.happy=true
    // }
    // console.log(index)
    //
    // if(1<=index&&index<2){
    //   this.happy1=true
    // }
    // console.log(index)
    // if(2<=index&&index<3){
    //   this.happy2=true
    // }
    // console.log(index)

  },
  methods:{
    clickque(){
      // const index1=Math.floor(Math.random()*3)
      // switch(index1)
      // {
      //   case 0:this.happy=true;break;
      //   case 1:this.happy1=true;break;
      //   case 2:this.happy2=true;break;
      //     console.log(this.happy);
      //     console.log(this.happy1);
      //     console.log(this.happy2);
      // }
      // const conen=document.getElementsByClassName("conent")
      const conen=document.getElementById("conent")
      console.log(conen)
        // let offsetLeft=e.target.offsetLeft;
        // let offsetTop=e.target.offsetTop;
        // //获取按钮的偏移量，位置坐标中的left和top
        // //此处为按钮左上角，距离页面左侧和顶部的距离
        // if(e.target.nodeName=='SPAN'){
        //   offsetLeft = e.target.offsetParent.offsetLeft;
        //   offsetTop = e.target.offsetParent.offsetTop;
        //   //解决一个bug，当点击空白处连续两次以上
        //   //会点击在span元素上，所以获取的offset相关指是span的
        //   //而不是div的，所以计算位置时是错误的
        // }
        // let x=e.clientX - offsetLeft;
        // let y=e.clientY -offsetTop;
        //
        // let ripple = document.createElement('span');
        // ripple.style.left= x + "px";
        // ripple.style.top= y +"px";
        // conen.appendChild(ripple);
        // // 增加计时器，每秒钟自动将当前span清理掉，不至于原来越多
        // setTimeout(() => {
        //   ripple.remove();
        // }, 1000);
    }
  }
}
</script>

<style scoped src="../assets/css/informalessay.css">

</style>