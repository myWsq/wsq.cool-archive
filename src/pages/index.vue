<template>
  <div>
    <doc-list-vue :src="docList"></doc-list-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DocListVue from "@/modules/doc/DocList.vue";
import { DocService } from "@/modules/doc/doc.service";
import { DocListItem } from "@/modules/doc/doc.interfaces";
import "@/modules/doc/doc.store";

export default Vue.extend({
  components: {
    DocListVue
  },
  data() {
    return {
      list: undefined as DocListItem[] | undefined
    };
  },
  computed: {
    docList(): DocListItem[] | undefined {
      return this.$store.state.doc.docList;
    }
  },
  async created() {
    if (!this.docList) {
      this.$store.commit("doc/setDocList", await DocService.getDocs());
    }
  }
});
</script>

<style scoped></style>
