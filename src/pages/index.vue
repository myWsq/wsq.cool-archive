<template>
  <div>
    <doc-list-vue :src="list"></doc-list-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DocListVue from "@/modules/doc/DocList.vue";
import { DocService } from "@/modules/doc/doc.service";
import { DocListItem } from "@/modules/doc/doc.interfaces";

export default Vue.extend({
  components: {
    DocListVue
  },
  data() {
    return {
      list: undefined as DocListItem[] | undefined
    };
  },
  async created() {
    this.list = await DocService.getDocs();
  }
});
</script>

<style scoped></style>
