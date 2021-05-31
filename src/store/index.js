import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
	actions: {
		async fetchProducts(context) {
      const response = await axios.get('https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json');
      context.commit('setProducts', response.data.items);

		},
	},

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },

  state: {
    products: null,
  },
})
