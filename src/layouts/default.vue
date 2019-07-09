<template>
  <div>
    <toolbar-vue></toolbar-vue>
    <main class="px-4 mx-auto max-w-3xl">
      <router-view></router-view>
    </main>
    <footer-vue></footer-vue>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ToolbarVue from "../modules/common/Toolbar.vue";
import FooterVue from "../modules/common/Footer.vue";
export default Vue.extend({
  components: {
    ToolbarVue,
    FooterVue
  }
});
</script>

<style lang="postcss" scoped></style>
