<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <div class="content" v-for="item of weekend" :key="item.id">
      <div class="imgs">
        <img class="img" :src="item.imgurl" alt="">
      </div>
      <div class="des">
        <p class="des-title">{{item.title}}</p>
        <p class="des-detailed">{{item.title}}</p>
      </div>
    </div>
    <div class="des-foot">
      <span class="iconfont">&#xe61d;</span>
      <span class="foot-bold">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    weekend: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .weekend
    margin-top: $marginTop
    .title
      box-sizing: border-box
      padding: $marginTop
      font-size: .3rem
    .content
      background: $white
      border-bottom: .1rem solid #eee
      .img
        width: 100%
      .des
        box-sizing: border-box
        padding: .3rem .2rem
        .des-title
          padding-bottom: .15rem
        .des-detailed
          font-size: .2rem
          color: #aaa
    .des-foot
      box-sizing: border-box
      padding: .2rem
      background: $white
      font-size: .1rem
      .foot-bold
        font-weight: bold
</style>
