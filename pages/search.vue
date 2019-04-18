<template>
	<div>
		<header>
			<h1>搜索结果</h1>
			<span>
				<i> 找到关于"{{ q }}"的 {{ total }} 条结果 </i>
			</span>
			<hr />
		</header>
		<post-list
			v-if="source.length > 0"
			:src="
				source.map(item => ({
					...item._record,
					title: item.title,
					abstract: item.abstract
				}))
			"
		></post-list>
		<div v-else class="empty"></div>
	</div>
</template>

<script>
	import PostList from '../components/PostList.vue'
	async function fetch(axios, p, q) {
		const { data } = await axios.get('/yuque/zsearch', {
			params: {
				p,
				q,
				scope: `${process.env.YUQUE_USER_ID}/${
					process.env.YUQUE_REPO_SLUG
				}`,
				type: 'doc'
			}
		})
		return {
			total: data.data.totalHits,
			source: data.data.hits
		}
	}
	export default {
		components: {
			PostList
		},
		head() {
			return {
				title: this.q + ' - 搜索结果 | wsq.cool'
			}
		},
		async asyncData({ route, app, $axios }) {
			const q = route.query.q
			if (q) {
				return {
					...(await fetch($axios, 1, q)),
					page: 2
				}
			}
		},
		data() {
			return {
				page: 1,
				total: 0,
				source: []
			}
		},
		computed: {
			q() {
				return this.$route.query.q
			}
		},
		watch: {
			$route() {
				this.page = 1
				this.source = []
				this.loadMore()
			}
		},
		methods: {
			async loadMore() {
				const result = await fetch(this.$axios, this.page, this.q)
				this.total = result.total
				this.source = this.source.concat(result.source)
				this.page++
			}
		}
	}
</script>

<style lang="stylus" scoped>
	header {
		h1 {
			font-size: 2em;
		}

		span {
			font-size: 1em;
			font-weight: 400;
		}

		hr {
			margin-top: 1em;
			background-color: rgba(0, 0, 0, 0.1);
			height: 1px;
			border: none;
		}
	}

	.empty {
		background: url('../assets/search-empty.svg') no-repeat;
		height: 100px;
		background-size: 100px;
		background-position: center 0;
	}
</style>
