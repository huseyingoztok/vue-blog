import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from '@/views/PostList.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'post-list',
    component: PostList
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
