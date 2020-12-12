<template>
  <div>{{ post.title }}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: { ...mapState('posts', ['post']) },
  methods: { ...mapActions('posts', ['fetchPost']) },
  created() {
    this.fetchPost(this.$route.params.id);
  }
};
</script>

<style></style>
