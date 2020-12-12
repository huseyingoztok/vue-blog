<template>
  <div class="notification-bar" :style="modalStyle">
    {{ notification.text }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  methods: mapActions('notifications', ['remove']),
  computed: {
    modalStyle() {
      if (this.notification.type === 'error') {
        return {
          color: 'white',
          backgroundColor: 'red'
        };
      }
      return {
        color: 'white',
        backgroundColor: 'green'
      };
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.remove(this.notification.id);
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  }
};
</script>

<style>
.notification-bar {
  margin: 1em 0 1em;
  padding: 20px;
}
</style>
