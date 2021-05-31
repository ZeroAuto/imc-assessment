import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
	actions: {
		async fetchProducts() {
      const response = await axios.get('https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json');
			return response.data.items;
		},
	},
})
