<template>
  <div>
    <fade-transition :duration="300">
      <div
        v-if="!isToolbarInViewport && isScrollUp"
        class="bg-white fixed left-0 right-0 top-0 border"
      >
        <toolbar-vue></toolbar-vue>
      </div>
    </fade-transition>
    <toolbar-vue ref="toolbar"></toolbar-vue>
    <main class="px-4 mx-auto max-w-3xl">
      <router-view></router-view>
    </main>
    <footer-vue></footer-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ToolbarVue from "../modules/common/Toolbar.vue";
import FooterVue from "../modules/common/Footer.vue";
import AppStore from "../store";
import { debounce } from "lodash-es";
export default Vue.extend({
  components: {
    ToolbarVue,
    FooterVue
  },
  data() {
    return {
      isToolbarInViewport: true
    };
  },
  computed: {
    scrollListener() {
      return debounce(() => {
        this.setToolbarState();
      }, 100);
    },
    isScrollUp() {
      return AppStore.state.isScrollUp;
    }
  },
  created() {
    window.addEventListener("scroll", this.scrollListener, {
      passive: true
    });
  },
  methods: {
    setToolbarState() {
      const toolbar = this.$refs.toolbar as Vue;
      if (toolbar) {
        const toolbarRects = toolbar.$el.getBoundingClientRect();
        this.isToolbarInViewport =
          toolbarRects.top + toolbar.$el.clientHeight > 0;
      }
    }
  }
});
</script>

<style lang="postcss" scoped></style>
