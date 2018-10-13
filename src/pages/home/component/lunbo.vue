<template>
  <div class="lunbo">
    <swiper :options="swiperOption" v-if="show">
      <!-- slides -->
      <swiper-slide v-for="item of lunbo" :key="item.id">
        <img class="lunbo-img" :src="item.imgurl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeLunbo',
  props:{
    lunbo: Array
  },
  data () {
    return {
      swiperOption:{
        pagination:".swiper-pagination",
        loop:true,
        autoplay:1500
      }
    }
  },
  computed:{
    show () {
      return this.lunbo.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .lunbo>>>.swiper-pagination-bullet
    background: #fff
  .lunbo
    width: 100%
    height: 0
    padding-bottom: 27%
    .lunbo-img
      width: 100%
</style>
