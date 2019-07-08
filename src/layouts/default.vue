<template>
  <div>
    <toolbar-vue></toolbar-vue>
    <main class="px-4 mx-auto max-w-3xl">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ToolbarVue from "../modules/common/Toolbar.vue";
export default Vue.extend({
  components: {
    ToolbarVue
  }
});
</script>

<style lang="postcss" scoped></style>
