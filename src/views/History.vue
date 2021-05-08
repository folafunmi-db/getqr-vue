<template>
	<div class="history">
		<h2>Search History</h2>
		<p class="grey--text">
			Previously generated QR codes (Max 10 results)
		</p>
		<section class="history-list">
			<ul>
				<li v-for="item in 10" :key="item">
					<v-card
						elevation="2"
						color="#010847"
						height="180px"
						width="180px"
						><img
							class="qr-history"
							src="https://qrtag.net/api/qr.png"
							alt="qrtag"
					/></v-card>
					<span>www.google.com</span>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.history {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: flex-start;
	align-items: center;

	h2 {
		font-family: "Montserrat", sans-serif;
		font-size: 35px;
	}

	p {
		font-size: 14px;
	}

	.history-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;

		ul {
			list-style: none;
			display: grid;
			grid-template-rows: auto;
			grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
			grid-gap: 1rem;
			width: 100%;
			padding: 0;
			li {
				width: 100%;
				display: flex;
				gap: 0.5rem;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				span {
					color: #010847;
					font-size: 15px;
				}

				.qr-history {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
