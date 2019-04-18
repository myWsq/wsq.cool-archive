<template>
	<div class="post-container">

		<header>
			<h1>{{ source.title }}</h1>
			<span
				>{{ $day(source.updated_at).format('ll') }} 更新 作者:
				{{ source.creator.name }}</span
			>
		</header>
		<article id="article" v-html="source.body_html"></article>

		<div class="pager">
			<div class="inner">
				<div v-if="pager.prev">
					<span>上一篇: </span>
					<nuxt-link
						v-if="pager.prev"
						:to="`/posts/${pager.prev.slug}`"
					>
						<h4>{{ pager.prev.title }}</h4>
					</nuxt-link>
				</div>
				<div v-else>
					&nbsp;
				</div>
				<div v-if="pager.next">
					<span>下一篇: </span>
					<nuxt-link
						v-if="pager.next"
						:to="`/posts/${pager.next.slug}`"
					>
						<h4>{{ pager.next.title }}</h4>
					</nuxt-link>
				</div>
				<div v-else>
					&nbsp;
				</div>
			</div>
		</div>
		<transition name="transition-bottom">
			<div class="pager fixed" v-show="isScrollTop">
				<div class="inner">
					<div v-if="pager.prev">
						<span>上一篇: </span>
						<nuxt-link
							v-if="pager.prev"
							:to="`/posts/${pager.prev.slug}`"
						>
							<h4>{{ pager.prev.title }}</h4>
						</nuxt-link>
					</div>
					<div v-else>
						&nbsp;
					</div>
					<div v-if="pager.next">
						<span>下一篇: </span>
						<nuxt-link
							v-if="pager.next"
							:to="`/posts/${pager.next.slug}`"
						>
							<h4>{{ pager.next.title }}</h4>
						</nuxt-link>
					</div>
					<div v-else>
						&nbsp;
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import Prism from 'prismjs'
	export default {
		async asyncData({ $axios, route }) {
			const id = route.params.id
			const doc = await $axios.get(
				`/yuque/v2/repos/${process.env.YUQUE_REPO_ID}/docs/${id}`
			)
			const pager = await $axios.get(`/yuque/docs/${doc.data.data.id}/pager`)
			return {
				source: doc.data.data,
				pager: pager.data.data
			}
        },
        head() {
			return {
				title: this.source.title + ' | wsq.cool'
			}
		},
		data() {
			return {
				isScrollTop: false,
			}
		},
		mounted() {
			const article = document.getElementById('article')
			const pres = article.getElementsByTagName('pre')
			Array.from(pres).forEach(item => {
				item.classList.add(
					'language-' + item.attributes['data-lang'].nodeValue
				)
				Prism.highlightElement(item)
			})
			window.addEventListener('scroll', this.scrollListener(), {
				passive: true
			})
		},
		methods: {
			scrollListener() {
				const OFFSET = 100
				let scrollY = 0

				return () => {
					const curScrollY = window.scrollY
					if (scrollY < curScrollY && curScrollY - scrollY >= OFFSET) {
						this.isScrollTop = false
						scrollY = window.scrollY
					} else if (
						scrollY > curScrollY &&
						scrollY - curScrollY >= OFFSET
					) {
						this.isScrollTop = true
						scrollY = window.scrollY
					}
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	$bar-max-width = 740px;

	.post-container {
		padding-top: 2.77em;
	}

	.pager {
		background: rgba(255, 255, 255, 0.95);

		&.fixed {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
            box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
		}

		.inner {
			display: flex;
			justify-content: space-between;
		}

		span {
			font-size: 0.8em;
			color: #bcbcbc;
		}

		a {
			text-decoration: none;
			color: #555;
		}
	}

	.inner {
		max-width: $bar-max-width;
		padding: 10px 20px;
		margin: 0 auto;
	}


</style>
