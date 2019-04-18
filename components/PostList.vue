<template>
	<div>
		<div v-for="item in src" :key="item.id" class="result-container">
			<header>
				<h1 @click="onHeaderClick(item.slug)" v-html="item.title"></h1>
				<span
					>{{ $day(item.updated_at).format('ll') }} 更新 作者:
					{{ item.book && item.book.user.name || (item.last_editor && item.last_editor.name) }}</span
				>
			</header>
			<article>
				<img :src="item.cover" class="cover" />
				<p v-html="item.abstract || item.description"></p>
			</article>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			src: {
				type: Array,
				required: true
			}
		},
		methods: {
			onHeaderClick(slug) {
				window.open('/posts/' + slug)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	header {
		h1 {
			cursor: pointer;
		}
	}

	.cover {
		display: block;
		width: 800px;
		margin: 0 auto;
	}

	.result-container {
		margin-bottom: 150px;

		&:last-child {
			margin-bottom: 0;
		}
	}
</style>
