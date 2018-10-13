<template>
  <div class="header">
    <div
      class="iconfont back-icon"
      @click="router"
    >
      &#xe624;
    </div>
    <div class="title">订单填写</div>
  </div>
</template>

<script>
  export default {
    name: 'PaymentHeader',
    methods: {
      router () {
        const id = this.$store.state.id
            this.$router.push('/detail/'+id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/var.styl";
  .header
    height: $height
    background: $BgColor
    color: $white
    line-height: $height
    .back-icon
      float: left
      padding-left: .2rem
    .title
      float: left
      width: 83%
      text-align: center
</style>
