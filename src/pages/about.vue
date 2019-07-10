<template>
  <div>
    <article>
      <figure class="mx-auto">
        <img
          width="500"
          src="https://ipic-1253962968.file.myqcloud.com/2019-07-10-monster-4271569_1280.png"
        />
        <figcaption class="text-gray-500 text-center">
          #95后&nbsp;&nbsp;#前(后?)端工程师&nbsp;&nbsp;#资深铲屎官
        </figcaption>
      </figure>
      <p>
        历经千辛万苦终于毕业啦 🎉 , 目前就职于<span class="text-orange-500"
          >北京小米</span
        >(自动变色).
      </p>
      <p>
        我有一个梦想: 和一群专业能力过硬, 志同道合的朋友一起做项目玩. 目前有PM,
        FE, BE五名大佬支持, 如果你精通UI, 人在北京, 请联系我!
      </p>
      <p>
        博客分享一些前后端开发经验, 可能会有生活感悟啥的 👀
      </p>
      <p>
        认识一下王建国
      </p>
      <img
        src="https://ipic-1253962968.file.myqcloud.com/2019-04-18-WechatIMG41.jpg"
      />
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
p {
  @apply my-4;
}
</style>
