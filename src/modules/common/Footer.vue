<template>
  <div class="mt-32">
    <h3 class="text-center uppercase">&copy; {{ curYear }} wsq.cool</h3>
    <h3 class="text-center my-16">
      <span class="mr-4 cursor-pointer" @click="onSearchClick">搜索</span>
      <router-link class="mr-4" to="/about">关于</router-link>
      <a href="mailto:wsq961@outlook.com" class="cursor-pointer">联系</a>
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import day from "dayjs";
import { CommonMutations } from "./common.mutations";
import { CommonStore } from "./common.store";

export default Vue.extend({
  computed: {
    curYear() {
      return day().year();
    }
  },
  methods: {
    onSearchClick() {
      CommonStore.commit(CommonMutations.SET_SEARCH_BAR_VISIBLE, true);
    }
  }
});
</script>
