import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
	actions: {
		async fetchProducts(context) {
      const response = await axios.get('https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json');
      context.commit('setProducts', response.data);
		},

    async fetchProduct({commit, state}, productId) {
      if (!state.products) {
        const response = await axios.get('https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json');
        commit('setProducts', response.data);
      }
      return state.products.find(product => product.ItemID === productId);
    },
	},

  mutations: {
    setProducts(state, data) {
      state.products = data.items;
      state.manufacturerId = data.ManufacturerID;
      state.salesRep = data.SalesRep;
    },
  },

  state: {
    products: null,
    manufacturerId: null,
    salesRep: null,
  },
})
