export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(e) {
      const { value } = e.target;
      this.$emit('input', value);
    }
  }
};
