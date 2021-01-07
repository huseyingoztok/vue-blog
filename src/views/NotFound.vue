<template>
  <div>
    Opps 404
    <div>
      <router-link :to="{ name: 'post-list' }">{{ resource || 'Page' }} Not Found. Back to home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: false
    }
  }
};
</script>

<style></style>
