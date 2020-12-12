<template>
  <div>
    <b-form @submit.prevent="onSubmit" v-if="show">
      <b-form-group id="user" label="User :" label-for="user-input">
        <b-form-select id="user-input" v-model="form.user" :options="users"></b-form-select>
      </b-form-group>
      <b-form-group id="title" label="Title:" label-for="title-input">
        <b-form-input id="title-input" v-model="form.title" placeholder="Enter title"></b-form-input>
      </b-form-group>
      <b-form-group id="body" label="Body:" label-for="body-input">
        <b-form-textarea id="body-input" v-model="form.body" placeholder="Enter body"></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      form: {
        title: '',
        body: '',
        user: null
      },
      users: [
        { text: 'Select User', value: null },
        'Leanne Graham',
        'Ervin Howell',
        'Clementine Bauch',
        'Patricia Lebsack',
        'Chelsey Dietrich',
        'Mrs. Dennis Schulist',
        'Kurtis Weissnat',
        'Nicholas Runolfsdottir V'
      ],
      show: true
    };
  },
  methods: {
    ...mapActions('posts', ['createPost']),
    onSubmit() {
      this.createPost(this.form).then(() => {
        this.$router.push('/');
      });
    }
  }
};
</script>

<style></style>
