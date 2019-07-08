<template>
  <fade-transition :duration="200">
    <div v-if="visable" class="search-bar">
      <slide-y-up-transition group :duration="300">
        <div
          v-if="inputVisible"
          key="search-input"
          class="bg-gray-900 flex items-center text-white"
        >
          <input
            ref="input"
            v-model="search"
            class="flex-grow align-middle"
            autofocus
            placeholder="请输入搜索内容"
            @input="searchDebounce"
          />
          <span class="cursor-pointer uppercase py-2 px-6 border-l"
            >cancel</span
          >
        </div>
        <div key="search-result" class="search-result">
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
// @ts-ignore
import { FadeTransition, SlideYUpTransition } from "vue2-transitions";
import { DocService } from "../doc/doc.service";
import { debounce } from "lodash-es";
import { Doc } from "../doc/doc.interfaces";
export default Vue.extend({
  components: {
    FadeTransition,
    SlideYUpTransition
  },
  props: {
    visable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputVisible: false,
      search: "",
      list: [] as Doc[]
    };
  },
  computed: {
    searchDebounce() {
      return debounce(() => {
        this.onSearch();
      }, 300);
    }
  },
  watch: {
    visable(val) {
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
    onInputBlur() {
      this.$nextTick(() => {
        this.$emit("update:visable", false);
      });
    },
    async onSearch() {
      if (this.search) {
        this.list = await DocService.searchDocs(this.search);
      }
    },
    onResultClick(slug: string) {
      this.$router.push({
        path: "/post",
        params: {
          id: slug
        }
      });
    }
  }
});
</script>

<style lang="postcss" scoped>
.search-bar {
  @apply fixed top-0 left-0 right-0 bottom-0 z-30;
  background-color: rgba(0, 0, 0, 0.67);
}
input {
  @apply outline-none p-5 px-6  text-xl text-gray-900 bg-transparent text-white;
}
.search-result {
  color: #efefef;
  & >>> em {
    @apply text-orange-500 not-italic px-2;
  }
}
</style>
