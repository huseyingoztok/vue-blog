<template>
  <div class="notification">
    <NotificationBar v-for="notification in notifications" :key="notification.id" :notification="notification" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NotificationBar from './NotificationBar.vue';
export default {
  components: {
    NotificationBar
  },
  computed: mapState('notifications', ['notifications'])
};
</script>

<style scoped>
.notification {
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 20px;
}
</style>
