<template>
  <div v-if="pager">
    <div class="flex justify-between">
      <section>
        <template v-if="pager.prev">
          <label class="pager-label">
            上一篇<br />
            <router-link
              :to="{ name: 'post-id', params: { id: pager.prev.slug } }"
              >{{ pager.prev.title }}</router-link
            >
          </label>
        </template>
      </section>
      <section class="text-right">
        <template v-if="pager.next">
          <label class="pager-label">
            下一篇<br />
            <router-link
              :to="{ name: 'post-id', params: { id: pager.next.slug } }"
              >{{ pager.next.title }}</router-link
            >
          </label>
        </template>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DocPager } from "./doc.interfaces";
import { DocService } from "./doc.service";

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pager: undefined as (DocPager | undefined)
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(val) {
        this.renderPager();
      }
    }
  },
  methods: {
    async renderPager() {
      this.pager = undefined;
      this.pager = await DocService.getPager(this.id);
    }
  }
});
</script>

<style lang="postcss" scoped>
.pager-label {
  @apply text-sm text-gray-500;
  a {
    @apply text-base font-semibold text-gray-800;
    text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
