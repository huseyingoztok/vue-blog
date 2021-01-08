<template>
  <div>
    <h2>{{ name | upperWord | truncate(20) | addEllipsis }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    };
  },
  filters: {
    upperWord(value) {
      return value.toUpperCase();
    },
    truncate(value, trunkValue) {
      return value.slice(0, trunkValue);
    },
    addEllipsis(value) {
      return value + '...';
    }
  }
};
</script>

<style></style>
