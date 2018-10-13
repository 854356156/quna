import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '广州',
    shopName: '',
    money : '',
    number: "",
    total:"",
    id:""
  },
  //actions: {
  //  changeCity(ctx,city) {
  //    ctx.commit('changeCity',city)
  //  }
  //},
  mutations: {
    changeCity (state,city) {
      state.city = city
    },
    changePayment(state,title) {
      state.shopName = title.shopName
      state.money = title.money
      state.id = title.id
      state.number = title.number
    }
  }
})
