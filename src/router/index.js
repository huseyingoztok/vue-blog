import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from '@/views/PostList.vue';
import PostDetail from '@/views/PostDetail.vue';
import CreatePost from '@/views/CreatePost.vue';
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
    component: PostDetail
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

export default router;
