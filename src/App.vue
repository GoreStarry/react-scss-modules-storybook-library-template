<template>
  <div id="app">
    <img alt="Vue logo" src="./examples/assets/colors.svg" />
    <Button label="Test" />
  </div>
</template>

<script>
import Button from "./examples/Button.vue";
export default {
  name: "App",
  components: {
    Button
  }
};
</script>

<style>
/* @import "./index.css"; */
</style>
