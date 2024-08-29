<style>
	.ads--card {
		width: 398px;
		border-radius: 20px;
		padding: 22px;
		/* margin-bottom: 16px; */
		background-color: whitesmoke;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.ads--header {
		width: 100%;
		border-radius: 20px 20px 0 0;
		padding: 22px;
		border: 1px solid #c6c6c6;
		background-color: #e7f161;
		position: absolute;
		left: 0;
		top: 0;
	}
	.heading {
		font-size: 1.3rem;
		font-weight: 600;
	}
	.sub--heading {
		display: flex;
		flex-direction: row;
		gap: 4px;
	}
	.sponsored--ads {
		font-weight: 600;
	}

	.ads--content {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}
	.ads--body {
		padding-top: 90px;
		position: unset;
		left: 0;
		bottom: 0;
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
			font-size: 1.15rem;
			font-weight: 600;
		}
	}
</style>

<script>
	let src = '/displayPic.png'
</script>

<div class="ads--card">
	<div class="ads--header">
		<div class="ads--content">
			<img {src} alt="display pic" />
			<div>
				<p class="heading"> 
Join Spartan+ Today</p>
				<div class="sub--heading">
					<p class="sponsored--ads">Monthly 10+ Odds /</p>
					<p> Monthly VIP</p>
				</div>
			</div>
		</div>
	</div>
	<div class="ads--body">
		<a class="ads--btn" href="https://paystack.com/buy/vip-odds">
			Subscribe Now @ ¢50 ⚡
		</a>
	</div>
</div>
