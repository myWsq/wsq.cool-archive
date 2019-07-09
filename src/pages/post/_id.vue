<template>
  <div>
    <doc-detail-vue :id="id"></doc-detail-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DocService } from "../../modules/doc/doc.service";
import DocDetailVue from "../../modules/doc/DocDetail.vue";
export default Vue.extend({
  components: {
    DocDetailVue
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
});
</script>

<style scoped></style>
