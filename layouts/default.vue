<template>
	<div>
		<the-tool-bar></the-tool-bar>
		<nuxt></nuxt>
        <the-footer></the-footer>
	</div>
</template>

<script>
    import TheToolBar from '../components/TheToolBar.vue'
    import TheFooter from '../components/TheFooter.vue';

	export default {
		components: {
            TheToolBar,
            TheFooter
		}
	}
</script>

<style lang="stylus" scoped></style>
