<template>
  <div id="app">
    <b-container>
      <Navbar />
      <div class="mt-3">
        <router-view />
      </div>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar
  }
};
</script>

<style></style>
