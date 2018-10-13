<template>
  <div class="hot">
    <div class="like-top">
      <span><img class="top-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt=""></span>
      <span class="top-des">猜你喜欢</span>
    </div>
      <router-link tag="div" :to="/detail/ + item.id"
        class="like-content border-bottom"
        v-for="item of content"
        :key="item.id">
        <div class="content-imgs">
          <img class="content-img" :src="item.imgurl" alt="">
        </div>
        <div class="content-des" >
          <p class="content-des-title">{{item.title}}</p>
          <p class="content-des-detailed">{{item.detailed}}</p>
          <span class="content-des-click">{{item.click}}</span>
        </div>
      </router-link>
    <div class="hot-all">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props: {
    content: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .hot
    padding-top: .2rem
    .like-top
      background: $white
      padding-top: .2rem
      padding-left: .2rem
      padding-bottom: .2rem
      .top-img
        width: .35rem
        position: relative
        top: -.03rem
      .top-des
        font-size: .32rem
    .like-content
      display: flex
      padding: $marginTop
      background: #fff
      .content-imgs
        width: 2rem
        height: 2rem
        overflow: hidden
        .content-img
          width: 2rem
      .content-des
        box-sizing: border-box
        padding: .3rem .2rem .4rem .2rem
        font-size: .32rem
        .content-des-title
          padding-bottom: .3rem
        .content-des-detailed
          padding-bottom: .3rem
        .content-des-click
          font-size: $marginTop
          color: #fff
          background: red
          box-sizing: border-box
          padding: .1rem
    .hot-all
      background: #fff
      font-size: .3rem
      text-align: center
      box-sizing: border-box
      padding: .2rem 0 .2rem 0
      color: #00afc7
</style>
