<template>
  <div class="total">
    <div class="totals">
      <span class="shop">产品价格￥</span>{{this.$store.state.total}}
      <span class="iconfont icon-top">&#xe610;</span>
    </div>
    <div class="sub">提交订单</div>
  </div>
</template>

<script>
export default {
  name: 'total',
  methods:{
    total(){
      this.$store.state.total = this.$store.state.money * this.$store.state.number
    }
  },
  mounted () {
    this.total()
  }
}
</script>

<style lang="stylus" scoped>
  .total
    background: #fff
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    display:flex
    border-top: .03rem solid #eee
    .totals
      width:53%
      font-size: .5rem
      padding: .4rem 0
      color: #ff8300
      text-align: center
      .shop
        font-size: .25rem
      .icon-top
        color:#c1c1c1
        font-size: .25rem
    .sub
      width: 47%
      background: #ff8300
      color: #fff
      display: flex
      align-items:center
      justify-content: center
      font-size: .4rem
</style>
