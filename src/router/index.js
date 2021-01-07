import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from '@/views/PostList.vue';
import PostDetail from '@/views/PostDetail.vue';
import CreatePost from '@/views/CreatePost.vue';
import nProgress from 'nprogress';
import store from '@/store/index';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'post-list',
    component: PostList
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: PostDetail,
    props: true, //parametreyi props olarak geç
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('posts/fetchPost', routeTo.params.id).then(post => {
        routeTo.params.post = post;
        nProgress.done();
        next();
      });
    }
  },
  {
    path: '/create',
    name: 'post-create',
    component: CreatePost
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  nProgress.start();
  next();
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
