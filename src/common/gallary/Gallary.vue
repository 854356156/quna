<template>
  <div class="gallary" @click="hanleGallaryClose">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination:'.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    hanleGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary>>>.swiper-container
    overflow: inherit
  .gallary
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
