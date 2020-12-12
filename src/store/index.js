import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import notifications from './modules/notifications';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts,
    notifications
  }
});
