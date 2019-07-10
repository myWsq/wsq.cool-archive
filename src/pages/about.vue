<template>
  <div>
    <article>
      <figure class="mx-auto">
        <img
          width="500"
          src="https://ww1.sinaimg.cn/large/006tNc79ly1g4ukfrfqcsj30u00u0dll.jpg"
        />
      </figure>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  beforeRouteEnter(to, from, next) {
    document.title = "关于 | wsq.cool";
    next();
  }
});
</script>

<style lang="postcss" scoped>
figure {
  max-width: fit-content;
}
</style>
