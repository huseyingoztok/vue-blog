<template>
  <div>
    <div>{{ post.title }}</div>
    <hr />
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex dicta, nostrum, commodi maxime fuga molestias
      veniam inventore facilis laborum provident repellat dolorem, vel optio consequatur quas culpa ipsum? Nobis.
    </div>
  </div>
</template>

<script>
// import NProgress from 'nprogress';
// import { mapState } from 'vuex';
// import store from '@/store/index';
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   // Statik içeriği sunucudan gelmesi beklenen veri ile birlikte yüklenmesi sağlandı...
  //   NProgress.start();
  //   store.dispatch('posts/fetchPost', routeTo.params.id).then(() => {
  //     NProgress.done();
  //     next();
  //   });
  // },
  // computed: { ...mapState('posts', ['post']) }
};
</script>

<style></style>
