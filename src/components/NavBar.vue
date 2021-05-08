<template>
	<div id="nav">
		<img src="/logo.svg" class="logo" />
		<router-link v-for="item in paths" :key="item.link" :to="item.link" class="nav-link">{{item.title}}</router-link>
		<v-spacer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			paths: [
				{title: "Home", link: "/"},
				{title: "History", link: "/history"},
			]
		};
	},
};
</script>

<style lang="scss" scoped>
#nav {
	display: flex;
	gap: 1rem;
	font-family: "Montserrat", sans-serif;
	font-weight: 600;
	align-items: center;
    margin-bottom: 1.5rem;

	.logo {
        width: 30px;
	}

	.nav-link {
        color: #010847;
		text-decoration: none;
		background: linear-gradient(currentColor 0 0) var(--d, 201%) 100% /200% 2px
			no-repeat;
		transition: 0.5s;
		&:hover {
			--d: -101%;
		}
	}
}
</style>
