<template>
  <div id="home">
    <home-header></home-header>
    <home-lunbo :lunbo="lunbo"></home-lunbo>
    <home-icon :imgs="imgs"></home-icon>
    <home-hot :content="content"></home-hot>
    <home-weekend :weekend="weekend"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './component/Header.vue'
import HomeLunbo from './component/lunbo.vue'
import HomeIcon from './component/icon.vue'
import HomeHot from './component/hot.vue'
import HomeWeekend from './component/weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      lunbo:[],
      imgs:[],
      content:[],
      weekend:[]
    }
  },
  components:{
    HomeHeader,
    HomeLunbo,
    HomeIcon,
    HomeHot,
    HomeWeekend
  },
  methods:{
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.lunbo = data.lunbo
        this.imgs = data.imgs
        this.content = data.content
        this.weekend = data.weekend
      }
     }
    },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  #home
    background: #eee
</style>
