<template>
  <div class="header">
    <router-link
      class="left"
      v-show="showTop"
      tag="div"
      to="/"
    >
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <router-link
      class="title"
      v-show="!showTop"
      :style="opacityStyle"
      tag="div"
      to="/"
    >
      <span class="iconfont title-back">&#xe624;</span>
      <span class="title-des">{{title}}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        showTop:true,
        opacityStyle: {
          opacity: 0
        },
        datass:{}
      }
    },
    props: {
      title: String,
      datas: Array
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if(top > 60){
          this.showTop = false
          let opacity = top/100
          opacity = opacity > 1? 1:opacity
          this.opacityStyle = {opacity}
        }else{
          this.showTop = true
        }
      }
    },
    created(){
      window.addEventListener('scroll',this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .header
    .left
      position: absolute
      top: .1rem
      left: .1rem
      width: .72rem
      height: .72rem
      background: rgba(0,0,0, .5)
      border-radius: 50%
      .back-icon
        line-height: .72rem
        text-align: center
        color: $white
    .title
      z-index: 99
      position: fixed
      top: 0
      left: 0
      height: $height
      width: 100%
      background: $BgColor
      line-height: $height
      color: $white
      text-align: center
      .title-back
        padding-left: .2rem
        float: left
</style>
