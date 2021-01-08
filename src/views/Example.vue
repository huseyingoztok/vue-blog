<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <div><label for="">Email: </label></div>
        <input type="text" v-model="email" @blur="$v.email.$touch()" />
        <div v-if="$v.email.$error">
          <div v-if="!$v.email.required">This field is required</div>
          <div v-if="!$v.email.email">This field is not correct format</div>
        </div>
      </div>
      <button :disabled="$v.$invalid">Submit</button>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      email: null
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log('submitted');
      }
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
};
</script>

<style></style>
