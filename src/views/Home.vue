<template>
	<div class="home">
		<section class="input-stack">
			<h2>Enter your URL here 👇🏾</h2>
			<p class="trials" v-if="!exceededTrials">
				You only have 10 trials.
			</p>
			<p class="trials" v-else>
				You've exceeded your 10 trials. Checkout the history page or
				refresh the page for 10 more trials.
			</p>
			<input
				type="text"
				placeholder="https://www.google.com/"
				@input="update"
				@keyup.enter="setLink"
				:value="text"
			/>
			<p v-if="validUrl === false" class="invalid">
				😉Nice try. Enter a valid URL, such as "https://www.google.com".
			</p>
			<p v-else-if="validUrl === true" class="valid">
				👍🏾Your URL IS VALID.
			</p>
			<v-btn
				color="#f45301"
				elevation="2"
				large
				x-large
				dark
				:disabled="exceededTrials"
				@click="setLink"
				>Generate QR</v-btn
			>
		</section>
		<section class="qr-section">
			<v-card
				elevation="2"
				color="#010847"
				min-height="270px"
				max-height="350px"
				min-width="270px"
				max-width="350px"
				class="qr-shell"
			>
				<img class="qr-code" v-if="validUrl" :src="qrLink" alt="qrtag"
			/></v-card>

			<div class="btn-group" v-if="validUrl">
				<a :href="qrLink" download="qr-code.svg" target="_blank">
					<v-btn color="#010847" elevation="2" dark>Get SVG</v-btn>
				</a>
				<a :href="qrLink" download="qr-code.png" target="_blank">
					<v-btn color="#f45301" elevation="2" dark>Get PNG</v-btn>
				</a>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			text: "",
			link: "",
			validUrl: null,
		};
	},
	mounted() {
		this.text = "";
	},
	computed: {
		qrLink() {
			if (this.link !== "") {
				return `https://qrtag.net/api/qr.png?url=${this.link}`;
			}
			return "";
		},

		exceededTrials() {
			if (this.$store.getters.getAllLinks.length >= 10) {
				return true;
			}
			return false;
		},
	},
	methods: {
		update(e) {
			this.text = e.target.value;
		},
		setLink() {
			let pattern = new RegExp(
				"^(https?:\\/\\/)?" + // protocol
				"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
				"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
				"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
				"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
					"(\\#[-a-z\\d_]*)?$",
				"i"
			); // fragment locator

			if (pattern.test(this.text)) {
				this.link = this.text;
				this.validUrl = true;
				this.$store.commit(
					"setCurrentLink",
					`https://qrtag.net/api/qr.png?url=${this.link}`
				);
			} else {
				this.validUrl = false;
				this.text = "";
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	.input-stack {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		gap: 0.5rem;

		h2 {
			font-family: "Montserrat", sans-serif;
			/* font-size: 35px; */
			font-size: clamp(1.5rem, 6vw - 1.1rem, 2.7rem);
			background: rgb(1, 8, 71);
			background: linear-gradient(
				90deg,
				rgba(1, 8, 71, 1) 0%,
				rgba(244, 83, 1, 1) 100%
			);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
		}

		.trials {
			padding: 0;
			margin: 0;
			text-align: left;
			max-width: 25rem;
		}

		input {
			width: 100%;
			height: 3rem;
			border: 3px solid #b0d7f8;
			border-radius: 5px;
			padding: 0.5rem;
			font-size: 15px;
			color: #010847;
			outline: 1px transparent #010847 !important;

			&:focus,
			&:active {
				border: 3px solid #f45301;
				outline: none;
			}
		}

		p {
			font-size: 15px;
			font-weight: 600;
			font-family: "Montserrat", sans-serif;
			max-width: 25rem;
			text-align: left;
		}

		.valid {
			color: green;
		}

		.invalid {
			color: red;
		}
	}

	.qr-section {
		padding: 0.5rem;

		.qr-shell {
			display: grid;
			place-items: center;

			.qr-code {
				width: 100%;
				height: 100%;
			}
		}

		.btn-group {
			display: flex;
			justify-content: center;
			align-content: center;
			gap: 0.5rem;
			flex-wrap: wrap;
			margin: 0.7rem;
			a {
				text-decoration: none;
			}
		}
	}
}
</style>
