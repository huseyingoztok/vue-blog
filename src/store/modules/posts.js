import http from '../../http';

export const namespaced = true;
export default {
  state: {
    posts: [],
    rows: 0,
    post: {}
  },
  mutations: {
    UPDATE_POSTS_AND_ROWS(state, payload) {
      state.posts = payload.posts;
      state.rows = payload.rows;
    },
    UPDATE_POST(state, payload) {
      state.post = payload;
    }
  },
  actions: {
    fetchPosts(context, { currentPage, perPage }) {
      http.Posts.list(currentPage, perPage).then(response => {
        context.commit('UPDATE_POSTS_AND_ROWS', { posts: response.data, rows: response.headers['x-total-count'] });
      });
    },
    fetchPost({ commit, getters }, id) {
      const post = getters.getPostById(id);
      if (post) {
        commit('UPDATE_POST', post);
        return;
      }
      http.Posts.get(id).then(post => {
        commit('UPDATE_POST', post);
      });
    }
  },
  getters: {
    getPostById: state => id => {
      return state.posts.find(x => x.id === id);
    }
  },
  namespaced
};
