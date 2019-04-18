<template>
	<transition name="fade">
		<div class="search-bar-container" @click="searchBarHide">
			<div class="search-bar" @click.stop>
				<v-icon>search</v-icon>
				<input
					autofocus
					autocomplete
					v-model="q"
					@keyup.enter="onSearch"
					placeholder="请输入搜索内容"
				/>
			</div>
		</div>
	</transition>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'
	export default {
		data() {
			return {
				q: ''
			}
		},
		computed: {
			...mapState(['searchBarVisible'])
		},
		methods: {
			...mapMutations(['searchBarHide']),
			onSearch() {
				if (this.q) {
					this.$router.push({ name: 'search', query: { q: this.q } })
					this.searchBarHide()
				}
			}
		},
		watch: {
			searchBarVisible(newValue) {
				if (!newValue) {
					this.q = ''
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.search-bar-container {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.1);
		z-index: 1;
	}

	.search-bar {
		background: #fff;
		padding: 10px 30px;
		box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
		font-size: 1.3em;
		display: flex;
	}

	input {
		outline: none;
		border: none;
		padding: 20px;
		width: 100%;
	}
</style>
