<template>
	<div>
		<div id="toolbar">
			<the-toolbar-pc></the-toolbar-pc>
		</div>
		<transition :name="`${!isHeaderTop ? 'transition-top' : 'fade'}`">
			<div class="fixed" v-show="isScrollTop && !isHeaderTop">
				<the-toolbar-pc></the-toolbar-pc>
			</div>
		</transition>

			<the-search-bar v-show="$store.state.searchBarVisible"></the-search-bar>
	</div>
</template>

<script>
	import TheToolbarPc from './TheToolbarPc.vue'
	import TheSearchBar from './TheSearchBar.vue'

	export default {
		components: {
			TheToolbarPc,
			TheSearchBar
		},
		data() {
			return {
				isScrollTop: false,
				isHeaderTop: true,
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollListener(), {
				passive: true
			})
		},
		methods: {
			scrollListener() {
				const OFFSET = 100
				let scrollY = 0
				const header = document.getElementById('toolbar')

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
					const top =
						header.getBoundingClientRect() &&
						header.getBoundingClientRect().top
					if (top >= 0) {
						this.isHeaderTop = true
						this.isScrollTop = false
					} else {
						this.isHeaderTop = false
					}
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
	}
</style>
