<template>
	<div>
		<header>
			<h1>Hi, I'm WSQ</h1>
			<span>#前(后?)端工程师 &nbsp; #95后 &nbsp; #新晋猫奴</span>
		</header>
		<article>
			<p>
				创业遭遇了不可抗力, 被人坑的体无完肤, 错过了很多机会.
				经历了一连串波折, 两个offer先后出现了意外, 不过最后幸运得拿到了
				Dream Offer.
			</p>
			<p>
				从事 Web 开发, 最近在利用闲暇时间学习UI设计和用户体验.
				将近毕业越来越忙了 😐
			</p>
			<p>喜欢Coding和猫猫, 来认识一下王建国</p>
			<img
				src="http://ipic-1253962968.file.myqcloud.com/2019-04-18-WechatIMG41.jpg"
			/>
		</article>
		<!-- <img :src="me.avatarUrl"> -->
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState(['me'])
		},
		head: {
			title: '关于 | wsq.cool'
		}
	}
</script>

<style lang="stylus" scoped>
	article {
		img {
			width: 740px;
			display: block;
			margin: 0 auto;
		}
	}
</style>
