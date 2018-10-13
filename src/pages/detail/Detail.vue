<template>
  <div id="detail" >
    <detail-header :title="title" :datas="datas"></detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-menu
      :categoryLists="categoryLists"
    ></detail-menu>
    <div class="abc"></div>
  </div>
</template>

<script>
import DetailHeader from './component/Header.vue'
import DetailBanner from './component/banner.vue'
import DetailMenu from './component/list.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName:"",
      DetailId:"",
      title:"",
      bannerImg:"",
      gallaryImgs:[],
      categoryLists:[],
      datas:[]
    }
  },
  components:{
    DetailHeader,
    DetailBanner,
    DetailMenu
  },
  methods: {
    getDetailInfo(){
      axios.get('/static/mock/detail.json?id=',{
        params:{
          id: this.$route.params.id
        }
      }).then(this.handleGetDatasucc)
    },
    handleGetDatasucc (res) {
      res = res.data
      if(res.ret && res.datas){
        const datas = res.datas
        datas.forEach((value,index)=>{
          if(value.DetailId === this.$route.params.id){
          this.sightName = value.sightName
          this.DetailId = value.DetailId
          this.title = value.title
          this.bannerImg = value.bannerImg
          this.gallaryImgs = value.gallaryImgs
          this.categoryLists = value.categoryLists
        }
        })
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }

}
</script>

<style lang="stylus" scoped>
  .abc
    height: 50rem
</style>
