<template>
  <fade-transition :duration="200">
    <div v-if="visible" class="search-bar">
      <slide-y-up-transition group :duration="300">
        <div
          v-if="inputVisible"
          key="search-input"
          class="bg-gray-900 flex items-center text-white"
        >
          <input
            ref="input"
            v-model="search"
            class="flex-grow text-sm md:text-xl outline-none p-3 px-4 md:p-4 md:py-6 bg-transparent text-white"
            autofocus
            placeholder="请输入搜索内容"
            @input="searchDebounce"
          />
          <span
            class="cursor-pointer uppercase py-2 px-4 border-l text-sm md:text-xl"
            @click="onCancelButtonClick"
            >cancel</span
          >
        </div>
        <div id="search-result" key="search-result">
          <ul class="max-w-4xl mx-auto">
            <li
              v-for="item in list"
              :key="item.id"
              class="p-6 border border-transparent hover:border-white mt-6 cursor-pointer"
              @click="onResultClick(item.slug)"
            >
              <!-- eslint-disable -->
              <h3 class="md:text-3xl" v-html="item.title"></h3>
              <p v-html="item.abstract"></p>
              <!-- eslint-enable -->
            </li>
          </ul>
        </div>
      </slide-y-up-transition>
    </div>
  </fade-transition>
</template>

<script lang="ts">
import Vue from "vue";
import { DocService } from "../doc/doc.service";
import { debounce } from "lodash-es";
import { SearchDocItem } from "../doc/doc.interfaces";
import Scrollbar from "perfect-scrollbar";
import { CommonStore } from "./common.store";
import { CommonMutations } from "./common.mutations";

export default Vue.extend({
  data() {
    return {
      inputVisible: false,
      search: "",
      list: [] as SearchDocItem[],
      resultPs: undefined as (Scrollbar | undefined)
    };
  },
  computed: {
    visible() {
      return CommonStore.state.searchBarVisible;
    },
    searchDebounce() {
      return debounce(() => {
        this.onSearch();
      }, 300);
    }
  },
  watch: {
    visible(val) {
      document.body.style.overflow = val ? "hidden" : "auto";
      setTimeout(() => {
        this.inputVisible = val;
        if (val) {
          this.$nextTick(() => {
            (this.$refs.input as HTMLInputElement).focus();
          });
        }
      }, 100);
    }
  },
  methods: {
    onCancelButtonClick() {
      this.$nextTick(() => {
        CommonStore.commit(CommonMutations.SET_SEARCH_BAR_VISIBLE, false);
        this.search = "";
        this.list = [];
        this.resultPs = undefined;
      });
    },
    async onSearch() {
      if (this.search) {
        this.list = await DocService.searchDocs(this.search);
        this.$nextTick(() => {
          this.updateResultPs();
        });
      }
    },
    onResultClick(slug: string) {
      this.$router.push({
        name: "post-id",
        params: {
          id: slug
        }
      });
      this.onCancelButtonClick();
    },
    updateResultPs() {
      if (!this.resultPs) {
        this.resultPs = new Scrollbar("#search-result");
      } else {
        this.resultPs.update();
      }
    }
  }
});
</script>

<style lang="postcss" scoped>
.search-bar {
  @apply fixed top-0 left-0 right-0 bottom-0 z-30;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.67);
}
#search-result {
  @apply relative;
  height: calc(100vh - 78px);
  color: #efefef;
  & >>> em {
    @apply text-orange-500 not-italic px-2;
  }
}
</style>
