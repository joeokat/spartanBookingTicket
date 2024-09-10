<style>
	.ads--card {
		width: 398px;
		border-radius: 20px;
		padding: 22px;
		background-color: #e7f161;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
	}
	.ads--content {
		display: flex;
		align-content: center;
		flex-direction: row;
		gap: 8px;
	}
	.heading {
		font-size: 1.45rem;
		font-weight: 600;
		margin-bottom: 4px;
	}
	.sub--heading {
		display: flex;
		flex-direction: row;
		gap: 4px;
	}
	.ads--btn {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 40px;
		padding: 12px 24px;
		border: 0;
		border-radius: 2.6rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		color: #e7f161;
		background-color: #171717;
	}

	@media only screen and (max-width: 600px) {
		.ads--card {
			width: 100%;
		}
		.heading {
			font-size: 1.35rem;
			font-weight: 600;
		}
	}
</style>

<script>
	let src = '/displayPic.png'
</script>

<div class="ads--card">
	<div class="ads--content">
		<img {src} alt="display pic" />
		<div>
			<p class="heading">Weekly VIP Odds</p>
			<div class="sub--heading">
				<p>Join Spartan+ on Telegram</p>
			</div>
		</div>
	</div>

	<a class="ads--btn" href="https://paystack.com/buy/vip-odds">
		Subscribe Now
	</a>
</div>
