import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },
  getters: { // = computed properties
    productsCount() {
      // ... length of products array
    }
  },
  actions: { // = methods // can be complex but never update the state
    fetchProducts() {
      //make the call
      // run setProducts mutation
    }
  },
  mutations: { // setting and updating the state // mutations should be as simple as possible
    setProducts(state, products) {
      // update products 
      state.products = products
    }
  }
})
