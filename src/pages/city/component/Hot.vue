<template>
  <div class="hot" ref="wrapper" >
    <div >
      <div class="hot-citys" ref="top">
        <div class="title">热门城市</div>
        <div class="hot-city" >
          <div
            class="city border"
            v-for="item of hotcity"
            :key="item.id"
            @click="hanleCityClick(item.cityname)"
          >
            {{item.cityname}}
          </div>
        </div>
      </div>
      <div class="sorting">
        <div class="letters">
          <div class="title">字母排序</div>
          <div class="letter">
            <div
              class="theletter"
              v-for="(item,key) of cities"
              :key="key"
              @click="hanleLetterClick"
            >
              {{key}}
            </div>
          </div>
        </div>
      </div>
      <div class="city-letter" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <ul class="area">
          <li class="city-area border-bottom" v-for="inneritem of item" @click="hanleCityClick(inneritem.name)">{{inneritem.name}}</li>
        </ul>
      </div>
    </div>
    <div class="back" v-show="showBack" @click="back">
      <div class="back-top iconfont">&#xe691;</div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityHot',
  data () {
    return {
      showBack:false
    }
  },
  props:{
    hotcity: Array,
    cities: Object
  },
  methods: {
    hanleLetterClick (e) {
      this.letter = e.target.innerText
    },
    back (e) {
      this.scroll.scrollToElement(this.$refs.top)
    },
    handleScroll () {
      this.scroll.on("scroll",(pos)=>{
        if(pos.y <=-200){
          this.showBack = true
      }else{
        this.showBack = false
      }
    })
    },
    hanleCityClick (city) {
      this.$store.commit("changeCity",city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll (this.$refs.wrapper,{click:true,probeType:3})
    this.handleScroll()

  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .hot
    background: #eee
    height: 93%
    overflow: hidden
    position: absolute
    top: .88rem
    left: 0
    .title
      padding: $marginTop
      font-size: .25rem
    .hot-city
      display: flex
      flex-wrap: wrap
      width: 100%
      .city
        box-sizing: border-box
        background: $white
        font-size: .3rem
        padding: .3rem .95rem
    .area
      background: $white
      .city-area
        padding: .2rem .2rem
    .letter
      background: $white
      display: flex
      flex-wrap: wrap
      .theletter
        box-sizing: border-box
        font-size: .3rem
        padding: .3rem .52rem
    .back
      position: absolute
      bottom: .5rem
      right: .5rem
      .back-top
        font-size: .5rem
</style>
