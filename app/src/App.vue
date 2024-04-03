<template>
	<v-app id="inspire">
		<v-app-bar extended app>
			<v-app-bar-title class="text-no-wrap">{{ title }}</v-app-bar-title>
		</v-app-bar>

		<v-main app>
			<router-view :key="$route.path" v-on:updateTitle="updateTitle"></router-view>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		data: () => ({
			title: 'Rockhome',
		}),

		computed : {
		},

		methods: {
			updateTitle(title) {
				this.title = title
			}
		},

		mounted () {
			console.log('App.vue - mounted');

			// this.$on('updateTitle', this.updateTitle)
		}
	};
</script>
