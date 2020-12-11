<template>
  <div class="mb-3">
    <b-card cols :title="post.title" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">{{ post.user }}</h6>
      </template>
      <b-card-text>{{ post.body }}</b-card-text>
      <template #footer>
        <em># {{ post.id }}</em>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['post']
};
</script>

<style></style>
