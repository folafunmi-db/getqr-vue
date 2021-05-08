import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentLink: "",
		allLinks: [],
	},
	mutations: {
		setCurrentLink(state, payload) {
			state.currentLink = payload;
			state.allLinks.push(payload);
		},
	},
	actions: {},
	modules: {},
	getters: {
		getCurrentLink: (state) => state.currentLink,
		getAllLinks: (state) => state.allLinks,
	},
});
