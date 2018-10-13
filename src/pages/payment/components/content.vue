<template>
  <div class="content ">
    <div class="shop">
      <div class="shopName">
        <div class="title">{{this.$store.state.shopName}}</div>
        <div class="price">
          <div class="prices">
            <span class="currency">￥</span><span class="money">{{this.$store.state.money}}</span>
            <span class="unit">/张</span>
          </div>
          <div class="instructions">预定须知</div>
        </div>
      </div>
      <div class="time">
      <div>
        <img class="time-icon" src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" alt="">
        xxxx-xx-xx
      </div>
      <div>
        <img class="time-icon" src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" alt="">
        条件退
      </div>
    </div>
    </div>
    <div>
      <div class="number">
        <div class="left">购买数量</div>
        <div class="right">
          <div class="aas">
            <div class="ass-left" @click="Reduction" :style="ReductionOut">
              <!--减-->
              <div class="Reduction" :style="ReductionIn"></div>
            </div>
            <div class="ass-center">{{this.$store.state.number}}</div>
            <div class="ass-right" @click="add">
              <!--add1是横，add2是竖-->
              <div class="add1"></div>
              <div class="add2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentContent',
  data () {
    return {
      payment:{},
      ReductionOut:"background: #f0f0f0",
      ReductionIn:"background: #cad1d7"
    }
  },
  methods: {
    add() {
      this.$store.state.number++
      this.ReductionOut = "background: #00afc7"
      this.ReductionIn = "background: #fff"
      this.$store.state.total = (this.$store.state.number * this.$store.state.money).toFixed(1)
    },
    Reduction () {
      if(this.$store.state.number === 1){
        this.$store.state.number = 1
        this.ReductionOut = "background: #f0f0f0"
        this.ReductionIn = "background: #cad1d7"
        return
      }else {

      }
      this.$store.state.number--
      this.$store.state.total = (this.$store.state.number * this.$store.state.money).toFixed(1)
    },
    vuexData () {
      if(!this.$store.state.shopName || !this.$store.state.money || !this.$store.state.id){
        const title = sessionStorage.getItem('title')
        const money = sessionStorage.getItem('money')
        const DetailId = sessionStorage.getItem('DetailId')
        const number = sessionStorage.getItem('number')
        this.payment = {"shopName":title,"money":money,"id":DetailId,"number":number}
        this.$store.commit("changePayment",this.payment)
      }
    }
  },
  mounted () {
    this.vuexData()
    this.ReductionOut = "background: #f0f0f0"
    this.ReductionIn = "background: #cad1d7"
  }
}
</script>

<style lang="stylus" scoped>
  .shop
    background: #fff
    .shopName
      display: flex
      .title
        flex: 6
        font-size: .32rem
        padding: .2rem
        line-height: .45rem
      .price
        color: #ff8300
        padding: .2rem .2rem 0 0
        .currency
          font-size: .1rem
        .money
          font-size:.4rem
        .unit
          font-size: .15rem
          color: #9e9e9e
      .instructions
        color:#00bcd4
        float: right
        padding-top: .1rem
    .time
      display: flex
      padding-bottom: .2rem
      color: #616161
      .time-icon
        width:.24rem
        padding-left: .2rem
  .number
    display: flex
    padding: .4rem .2rem
    background: #fff
    margin: .2rem 0
    .left
      flex: 6
      font-size: .32rem
      padding-top: .2rem
    .right
      flex: 2
      .aas
        width:  1.96rem
        height: .64rem
        border: .02rem solid #c7ced4
        display: flex
        line-height: .64rem
        text-align: center
        padding: .02rem
        .ass-left
          flex: 1

          position: relative
          top: 0
          left: 0
          .Reduction
            position: absolute
            top : .30rem
            left: .1rem
            width: 60%
            height: 10%
        .ass-center
          flex: 1.3
          font-size: .32rem
        .ass-right
          flex: 1
          background: #00afc7
          position: relative
          top: 0
          left: 0
          .add1
            position: absolute
            top : .30rem
            left: .1rem
            width: 60%
            height: 10%
            background: #fff
          .add2
            position: absolute
            top : .30rem
            left: .1rem
            width: 60%
            height: 10%
            background: #fff
            transform:rotate(90deg)
</style>
