<template>
  <div>
    <label for="">{{ label }} :</label>
    <div>
      <input @input="updateValue" v-bind="$attrs" />
      {{/* Attrlerin parent dive değil de inputa geçilmesini sapladık */}}
    </div>
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin';
export default {
  mixins: [formFieldMixin]
};
</script>

<style></style>
