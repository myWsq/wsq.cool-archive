<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="postcss">
/* purgecss start ignore */
@tailwind base;
/* purgecss end ignore */
@tailwind components;
@tailwind utilities;

#app {
  @apply text-gray-900 antialiased subpixel-antialiased;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}
</style>
