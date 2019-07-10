<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppStore, { AppMutations } from "./store";
import { throttle } from "lodash-es";
export default Vue.extend({
  computed: {
    scrollListener() {
      const OFFSET = 100;
      let scrollY = 0;
      return throttle(() => {
        const curScrollY = window.scrollY;
        if (scrollY < curScrollY && curScrollY - scrollY >= OFFSET) {
          if (AppStore.state.isScrollUp) {
            AppStore.commit(AppMutations.ON_SCROLL_DOWN);
          }
          scrollY = window.scrollY;
        } else if (scrollY > curScrollY && scrollY - curScrollY >= OFFSET) {
          if (!AppStore.state.isScrollUp) {
            AppStore.commit(AppMutations.ON_SCROLL_UP);
          }
          scrollY = window.scrollY;
        }
      }, 100);
    }
  },
  created() {
    window.addEventListener("scroll", this.scrollListener, {
      passive: true
    });
  }
});
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
