<template>
  <div class="icon">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(item,index) of pages" :key="index">
        <div class="icons" v-for="text of item">
          <div class="icons-imgs">
            <img class="icons-img" :src="text.imgurl" alt="">
          </div>
          <p class="icon-title">{{text.title}}</p>
        </div>
      </swiper-slide >
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption:{

      }
    }
  },
  computed:{
    pages () {
      const pages = []
        this.imgs.forEach((item,index)=>{
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
      pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .icon>>>.swiper-container
    height: 0
    padding-bottom:50%
  .icon
    margin-top: .1rem
    background: $white
    .icons
      position: relative
      width: 25%
      height: 0
      float: left
      padding-bottom: 25%
      overflow: hidden
      .icons-imgs
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .4rem
        box-sizing: border-box
        padding: .1rem
        .icons-img
          height: 100%
          display: block
          margin: 0 auto
      .icon-title
        position: absolute
        left: 0
        right: 0
        bottom: .35rem
        text-align: center
</style>
