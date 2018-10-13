<template>
  <div class="header">
    <div class="left">
      <div class="iconfont bask-icon">&#xe624;</div>
    </div>
    <div class="search">
      <span class="iconfont search-icon">&#xe632;</span>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="city">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .header
    line-height: $height
    height: $height
    display: flex
    background: $BgColor
    color: #fff
    .left
      width: .64rem
      float: left
      .bask-icon
        text-align: center
        font-size: .4rem
    .search
      flex:1
      height: .60rem
      line-height: .60rem
      background: #fff
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
      margin-right: .2rem
      color: #ddd
      .search-icon
        margin-left: .2rem
    .city
      float: right
      min-width: 1.28rem
      color: $white
      .arrow-icon
        font-size: .2rem
</style>
