<template>
	<div class="footer">
		<div><nuxt-link to="/">&copy; {{ $day().year() }} WSQ.COOL</nuxt-link></div>
		<div>
			<nuxt-link to="/about">关于</nuxt-link>
			<a href="javascript:;" @click="$store.commit('searchBarShow')">搜索</a>
			<a href="mailto:wsq961@outlook.com">联系</a>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" scoped>
	.footer {
		padding: 6em 1em 1em;
		font-size: 1.25em;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.6);

		& > * {
			text-align: center;
			margin: 3em 0;
		}

		a {
			color: inherit;
			text-decoration: none;
			margin: 0 .2em;
		}
	}
</style>
