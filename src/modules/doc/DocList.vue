<template>
  <div class="doc-list">
    <h1
      v-if="!src || src.length === 0"
      class="font-thin text-gray-600 uppercase text-center mt-20"
    >
      {{ !src ? "loading..." : "no data" }}
    </h1>
    <ul v-else>
      <li
        v-for="item in src"
        :key="item.id"
        class="cursor-pointer"
        @click="onItemClick(item.slug)"
      >
        <h1 class="font-thin mt-20">{{ item.title }}</h1>
        <div class="flex flex-col md:flex-row mt-4">
          <img
            v-if="item.cover"
            :src="item.cover"
            class="object-contain md:w-64 mb-4 md:mr-4"
          />
          <p class="leading-relaxed">
            {{ item.description }}
            <br />
            <span class="text-gray-500"
              >Update At: {{ item.updated_at | date }}</span
            >
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DocListItem } from "./doc.interfaces";
import Day from "dayjs";
export default Vue.extend({
  props: {
    src: {
      type: Array as () => DocListItem[] | undefined,
      default: undefined
    }
  },
  methods: {
    onItemClick(slug: string) {
      this.$router.push({
        name: "post-id",
        params: {
          id: slug
        }
      });
    }
  }
});
</script>

<style scoped>
ul {
  font-family: "Lora", "Noto Serif SC", serif;
}
</style>
