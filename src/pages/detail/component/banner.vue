<template>
  <div>
    <div class="banner">
      <div class="banner-imgs" @click="hanleGallaryClick">
        <img class="banner-img" :src="bannerImg" alt="">
      </div>
      <div class="banner-des">
        <div class="photo iconfont">
          <span>&#xe692;</span>
          102
        </div>
        <div class="title">{{sightName}}</div>
      </div>
      <div class="gradient"></div>
    </div>
    <common-gallary
      v-show="show"
      @close="handleGallaryClose"
      :gallaryImgs="gallaryImgs"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'Detail',
  data () {
    return {
      show:false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary
  },
  methods: {
    hanleGallaryClick () {
      this.show = true
    },
    handleGallaryClose () {
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .banner
    height: 4rem
    overflow: hidden
    .banner-img
      width: 100%
    .banner-des
      position: absolute
      top: 2.9rem
      left: 0
      padding-left: .2rem
      z-index: 1
      .photo
        color: $white
        margin-bottom: .1rem
        font-size: .2rem
        width: 1.2rem
        height: .4rem
        background: rgba(0,0,0, .5)
        border-radius: .2rem
        line-height: .4rem
        text-align: center
      .title
        color: $white
        font-size: .35rem
    .gradient
      width: 100%
      height: .4rem
      position: absolute
      top: 3.6rem
      left: 0
      background: linear-gradient(to top,rgba(0,0,0, .8),transparent)
</style>
