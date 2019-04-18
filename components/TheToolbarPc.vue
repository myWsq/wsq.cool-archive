<template>
	<div class="toolbar">
		<div class="inner">
			<v-layout
				d-flex
				align-center
				class="logo"
				@click="$router.push('/')"
			>
				<img v-if="me" :src="me.avatar_url" />
				<h1>WSQ.COOL</h1>
			</v-layout>
			<nav>
				<v-btn flat large icon @click="$store.commit('searchBarShow')">
					<v-icon>search</v-icon>
				</v-btn>
				<v-btn flat large nuxt to="/about">ABOUT</v-btn>
			</nav>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['me'])
		}
	}
</script>

<style lang="stylus" scoped>
	.logo {
		img {
			border-radius: 50%;
			max-width: 2.5em;
			height: 2.5em;
			transition-duration: 0.3s;
		}

		h1 {
			font-size: 1.5em;
			font-family: 'Lora', 'Noto Serif SC', serif;
			margin-left: 0.5em;
		}

		cursor: pointer;

		&:hover {
			img {
				transform: scale(1.1);
			}
		}
	}

	.toolbar {
		background: #fff;
		padding: 15px 20px;

		.inner {
			max-width: 1024px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
		}
	}

	nav {
		.v-btn {
			padding: 0;
		}
	}
</style>
