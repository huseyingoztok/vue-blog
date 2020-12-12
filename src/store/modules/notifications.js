let nextId = 1;
export default {
  state: {
    notifications: []
  },
  mutations: {
    PUSH_NOTIFICATION(state, payload) {
      state.notifications.push({ ...payload, id: nextId++ });
    },
    REMOVE_NOTIFICATION(state, payload) {
      state.notifications = state.notifications.filter(x => x.id !== payload);
    }
  },
  actions: {
    add({ commit }, payload) {
      commit('PUSH_NOTIFICATION', payload);
    },
    remove({ commit }, payload) {
      commit('REMOVE_NOTIFICATION', payload);
    }
  },
  namespaced: true
};
