<template>
  <div>
    <label for="">{{ label }} :</label>
    <div>
      <input @input="setValue" v-bind="$attrs" /> {{/* Attrlerin parent dive değil de inputa geçilmesini sapladık */}}
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    setValue(e) {
      const { value } = e.target;
      this.$emit('input', value);
    }
  }
};
</script>

<style></style>
