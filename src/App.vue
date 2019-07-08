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

html {
  font-size: 18px;
}

#app {
  @apply text-gray-900 antialiased subpixel-antialiased;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue,
    Helvetica, Arial, sans-serif;
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
