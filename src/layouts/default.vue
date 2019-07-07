<template>
  <div>
    <nav>
      <router-link to="/">home</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/about">about</router-link>
    </nav>
    <main class="sm:w-full px-4 md:w-10/12 lg:w-8/12 mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="postcss" scoped>
nav {
  @apply my-10 text-center uppercase text-gray-500;
  .router-link-exact-active {
    @apply text-orange-500;
  }
}
</style>
