<template>
  <div>
    <b-card-group deck columns>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </b-card-group>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue';
import http from '@/http';
export default {
  components: {
    PostCard
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    http.Posts.list().then(data => (this.posts = data));
  }
};
</script>

<style></style>
