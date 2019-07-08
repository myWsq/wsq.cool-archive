<template>
  <div>
    <nav class="uppercase px-4 py-2 mx-auto max-w-5xl">
      <span class="logo">
        wsq.cool
      </span>
    </nav>
    <main class="px-4 mx-auto max-w-3xl">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="postcss" scoped>
.logo {
  @apply text-4xl;
  font-family: Lora, "Noto Serif SC", serif;
  font-weight: 500;
}
</style>
