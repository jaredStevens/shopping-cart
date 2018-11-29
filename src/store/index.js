import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },
  getters: { // = computed properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: { // = methods // can be complex but never update the state
    fetchProducts({commit}) {
      return new Promise((resolve, reject) => {
      shop.getProducts(products => {
        commit("setProducts", products)
        resolve()
      })
    })
    }
  },
  mutations: { // setting and updating the state // mutations should be as simple as possible
    setProducts(state, products) {
      // update products 
      state.products = products
    }
  }
})
