<template>
  <div class="header" >
      城市选择
      <div class="back">
        <router-link to="/">
          <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .header
    position: relative
    top: 0
    left: 0
    line-height: $height
    height: $height
    background: $BgColor
    color: #fff
    text-align: center
    font-size: .3rem
    .back
      position: absolute
      top: 0
      left: 0
      padding-left: $marginTop
      .back-icon
        font-size: .4rem
        color: $white
</style>
