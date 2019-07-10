<template>
  <div>
    <doc-detail-vue :id="id"></doc-detail-vue>
    <doc-pager-vue :id="id" ref="pager" class="mt-12"></doc-pager-vue>
    <slide-y-down-transition>
      <div
        v-show="isScrollUp && !isPagerInViewport"
        class="fixed left-0 bottom-0 right-0 bg-white border p-4"
      >
        <doc-pager-vue :id="id" class="max-w-5xl mx-auto"></doc-pager-vue>
      </div>
    </slide-y-down-transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DocDetailVue from "../../modules/doc/DocDetail.vue";
import DocPagerVue from "../../modules/doc/DocPager.vue";
import { debounce } from "lodash-es";
import AppStore, { AppMutations } from "../../store";

export default Vue.extend({
  components: {
    DocDetailVue,
    DocPagerVue
  },
  data() {
    return {
      isPagerInViewport: false
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    scrollListener() {
      return debounce(() => {
        this.setPagerState();
      }, 100);
    },
    isScrollUp() {
      return AppStore.state.isScrollUp;
    }
  },
  watch: {
    id(val) {
      AppStore.commit(AppMutations.ON_SCROLL_DOWN);
    }
  },
  created() {
    window.addEventListener("scroll", this.scrollListener, {
      passive: true
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    setPagerState() {
      const pager = this.$refs.pager as Vue;
      if (pager) {
        const pagerRects = pager.$el.getBoundingClientRect();
        this.isPagerInViewport = pagerRects.top < window.innerHeight;
        console.log(pagerRects.top);
      }
    }
  }
});
</script>

<style scoped></style>
