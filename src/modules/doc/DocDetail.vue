<template>
  <div>
    <h1 v-if="!src" class="text-gray-600 font-thin uppercase text-center mt-24">
      Loading...
    </h1>

    <!-- eslint-disable -->
    <article v-else ref="article">
      <h1>
        {{ src.title }}
      </h1>
      <span class="text-gray-500">
        {{ src.updated_at | date }}
      </span>
      <section v-html="src.body_html"></section>
    </article>
    <!-- eslint-enable -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DocService } from "./doc.service";
import { DocDetail } from "./doc.interfaces";
import Prism from "prismjs";
import "prismjs/plugins/autoloader/prism-autoloader";
import { CommonService } from "@/modules/common/common.service";

Prism.plugins.autoloader.languages_path =
  "https://cdn.jsdelivr.net/npm/prismjs@1.16.0/components/";

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      src: undefined as (DocDetail | undefined)
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(val) {
        this.renderHtml();
      }
    }
  },
  methods: {
    async renderHtml() {
      this.src = undefined;
      this.src = await DocService.getDocDetail(this.id);
      this.$nextTick(() => {
        const article = this.$refs.article as HTMLElement;
        const pres = article.getElementsByTagName("pre");
        Array.from(pres).forEach(item => {
          item.classList.add("language-" + item.getAttribute("data-lang"));
          Prism.highlightElement(item);
        });
      });
    }
  }
});
</script>

<style scoped>
@import "../../assets/article.css";
</style>
