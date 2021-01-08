import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from '@/views/PostList.vue';
import PostDetail from '@/views/PostDetail.vue';
import CreatePost from '@/views/CreatePost.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkIssues from '@/views/NetworkIssues.vue';
import Example from '@/views/Example.vue';
import Filters from '@/views/Filters.vue';
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
      store
        .dispatch('posts/fetchPost', routeTo.params.id)
        .then(post => {
          routeTo.params.post = post;
          nProgress.done();
          next();
        })
        .catch(err => {
          if (err && err.response && err.response.status === 404) {
            next({ name: '404', params: { resource: 'Event' } });
          }
          next({ name: 'networkissues' });
        });
    }
  },
  {
    path: '/create',
    name: 'post-create',
    component: CreatePost
  },
  {
    path: '/404',
    name: '404',
    props: true,
    component: NotFound
  },
  {
    path: '/networkissues',
    name: 'networkissues',
    component: NetworkIssues
  },
  {
    path: '/example',
    name: 'example',
    component: Example
  },
  {
    path: '/filters',
    name: 'filters',
    component: Filters
  },
  {
    path: '*',
    redirect: { name: '404' }
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
