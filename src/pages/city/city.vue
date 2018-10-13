<template>
  <div id="city">
    <city-header></city-header>
    <city-hot
      :hotcity="hotcity"
      :cities="cities"
    ></city-hot>
  </div>
</template>

<script>
import CityHeader from "./component/Header.vue"
import CityHot from "./component/Hot.vue"
import axios from "axios"
export default {
  name: 'City',
  data () {
    return {
      hotcity: [],
      cities:{}
    }
  },
  components:{
    CityHeader,
    CityHot
  },
  methods: {
    getCityInfo () {
      axios.get('/static/mock/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res= res.data
      if(res.ret && res.data){
        const data = res.data
        this.hotcity = data.hotcity
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
