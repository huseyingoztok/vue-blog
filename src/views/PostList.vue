<template>
  <div>
    <b-card-group deck columns>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </b-card-group>
    <b-pagination
      :per-page="perPage"
      v-model="currentPage"
      :total-rows="rows"
      align="right"
      @input="fetch"
    ></b-pagination>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    PostCard
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1
    };
  },
  methods: {
    ...mapActions('posts', ['fetchPosts']),
    fetch() {
      this.fetchPosts({ currentPage: this.currentPage, perPage: this.perPage });
    }
  },
  computed: { ...mapState('posts', ['posts', 'rows']) },
  created() {
    this.fetch();
  }
};
</script>

<style></style>
