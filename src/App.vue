<template>
  <div id="app">
    <Heading />
  </div>
</template>

<script>
import Heading from "./components/Heading";

export default {
  name: "App",
  components: {
    Heading
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.btn {
  text-decoration: none;
  margin-top: 10px;
  margin-right: 15px;
}
</style>
