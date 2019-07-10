<template>
  <div
    class="flex justify-between px-4 py-4 mx-auto max-w-5xl items-center bg-white"
  >
    <section>
      <router-link to="/">
        <span class="logo uppercase text-2xl sm:text-3xl lg:text-4xl"
          >wsq.cool</span
        >
      </router-link>
    </section>
    <section>
      <span>
        <i
          class="iconfont icon-search text-lg md:mr-4 cursor-pointer p-3"
          @click="onSearchButtonClick"
        ></i>
      </span>
      <router-link to="/about" class="uppercase p-3">about</router-link>
    </section>
    <search-bar></search-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "./SearchBar.vue";
import { CommonStore } from "./common.store";
import { CommonMutations } from "./common.mutations";
export default Vue.extend({
  components: {
    SearchBar
  },
  methods: {
    onSearchButtonClick() {
      CommonStore.commit(CommonMutations.SET_SEARCH_BAR_VISIBLE, true);
    }
  }
});
</script>

<style lang="postcss" scoped>
.logo {
  font-family: Lora, "Noto Serif SC", serif;
  font-weight: 500;
}
.router-link-exact-active {
  @apply bg-gray-200 rounded;
}
</style>
