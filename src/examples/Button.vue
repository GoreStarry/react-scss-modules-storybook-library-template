<template>
  <my-button v-bind="label"></my-button>
</template>

<script>
import MyButton from "./Button.jsx";
export default {
  name: 'my-button',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
