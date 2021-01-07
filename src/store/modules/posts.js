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
    },
    PUSH_POSTS(state, payload) {
      state.posts.push(payload);
    }
  },
  actions: {
    createPost({ commit, dispatch }, post) {
      return http.Posts.create(post)
        .then(response => {
          commit('PUSH_POSTS', post);
          const notification = {
            type: 'success',
            text: `Post created successfully`
          };
          dispatch('notifications/add', notification, { root: true });
          return response;
        })
        .catch(error => {
          console.log(error);
          const notification = {
            type: 'error',
            text: `Problem was creating post: ${error.message}`
          };
          dispatch('notifications/add', notification, { root: true });
          throw error;
        });
    },
    fetchPosts({ commit, dispatch }, { currentPage, perPage }) {
      // context = { commit, dispatch, getters, rootState, state }
      http.Posts.list(currentPage, perPage)
        .then(response => {
          commit('UPDATE_POSTS_AND_ROWS', { posts: response.data, rows: response.headers['x-total-count'] });
        })
        .catch(error => {
          const notification = {
            type: 'error',
            text: `Problem was fetching posts: ${error.message}`
          };
          dispatch('notifications/add', notification, { root: true });
        });
    },
    fetchPost({ commit, getters }, id) {
      const post = getters.getPostById(id);
      if (post) {
        commit('UPDATE_POST', post);
        return post;
      }
      return http.Posts.get(id).then(post => {
        commit('UPDATE_POST', post);
        return post;
      });
      // .catch(error => {
      //   const notification = {
      //     type: 'error',
      //     text: `Problem was fetching post: ${error.message}`
      //   };
      //   dispatch('notifications/add', notification, { root: true });
      // });
    }
  },
  getters: {
    getPostById: state => id => {
      return state.posts.find(x => x.id === id);
    }
  },
  namespaced
};
