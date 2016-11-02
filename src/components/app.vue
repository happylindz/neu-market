<template>
	<div>
		<p>{{ message }}</p>
		<input v-model="message">
	</div>
</template>

<script>
	export default {
		el: "#app",
		data () {
			return {
				message: 'Hello from vue-loader!'
			}
		}
	}
</script>

<style>
	.message {
		color: blue;
	}
</style>