<template>
  <div class="menu">
    <div v-for="(total,index) of categoryLists">
      <div class="spacing"></div>
      <div class="menu-title border-bottom">
        <span class="title-icon"></span>
        {{total.TicketClass}}
      </div>
      <div v-for="(item,index) of total.children" :key="index">
        <div class="oneMenu border-bottom" @click="OpenMenu(item,index)">
            <span>{{item.title}}</span>
            <span class="oneMenu-rightDown iconfont" :style="item.rotate">&#xe610;</span>
        </div>
        <div
          class="twoMenu"
          v-show="items.OpenMenu"
          v-for="(items,index) of  item.childrens"
          @click="abc(items)"
        >
          <div class="twoMenu-left">
            <span class="twoMenu-left-title">{{items.title}}</span>
            <p class="twoMenu-left-des">{{items.des}}</p>
          </div>
          <div class="twoMenu-right">
            <span class="reservation">{{items.reservation}}</span>
          </div>
        </div v-show>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailMenu',
  props:{
    categoryLists: Array
  },
  data () {
    return {
      payment:{}
    }
  },
  methods: {
    OpenMenu (item,index) {
//      let num = 180
//      this.num = num + this.num
//      item.children[0].rotate = "transform:rotate(90deg)"
//      item.childrens[0].OpenMenu = !item.childrens[0].OpenMenu
      item.childrens.forEach((value,index)=>{
        value.OpenMenu = !value.OpenMenu
      })
      if(!item.rotate){
        this.$set(item,'rotate',"transform:rotate(180deg)")
      }else {
        this.$delete(item,'rotate')
      }
    },
    abc(item){
      sessionStorage.setItem('title', item.title)
      sessionStorage.setItem('money', item.money)
      sessionStorage.setItem('DetailId', item.DetailId)
      sessionStorage.setItem('number', item.number)
      this.payment = {"shopName":item.title,"money":item.money,"id":item.DetailId,"number":item.number}
      this.$store.commit("changePayment",this.payment)
      this.$router.push('/payment')
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
  .menu
    .spacing
      width: 100%
      height: .2rem
      background: #e0e0e085
    .menu-title
      margin: 0 .2rem
      height: .88rem
      line-height: .88rem
      text-indent: .4rem
      .title-icon
        position: absolute
        top: .26rem
        left: 0
        display: inline-block
        height: .36rem
        width: .36rem
        background:url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
        background-size: .4rem 3rem
    .oneMenu
      padding: .3rem .2rem
      .oneMenu-rightDown
        float: right
        /*transform:rotate(90deg)*/
    .twoMenu
      display: flex
      background: #e0e0e085
      padding: .2rem .25rem
      box-sizing: border-box
      .twoMenu-left
        width: 70%
        display: block
        .twoMenu-left-title
          line-height: .4rem
        .twoMenu-left-des
          padding-top: .2rem
          font-size: .2rem
      .twoMenu-right
        width: 30%
        position: relative
        top: 0
        left: 0
        .reservation
          position: absolute
          top: 40%
          right: 0
          padding: .1rem .4rem
          background: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
          color: #fff
          border-radius: .1rem
</style>
