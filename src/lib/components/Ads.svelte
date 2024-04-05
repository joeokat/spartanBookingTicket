<style>
	.ads--card {
		width: 398px;
		border-radius: 20px;
		padding: 22px;
		background-color: #fafaf6;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.ads--header {
		width: 100%;
		border-radius: 20px 20px 0 0;
		padding: 22px;
		border: 1px solid #c6c6c6;
		background-color: #f5efe9;
		position: absolute;
		left: 0;
		top: 0;
	}
	.heading {
		font-size: 1.5rem;
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
</style>

<script>
	let src = '/displayPic.png'
</script>

<div class="ads--card">
	<div class="ads--header">
		<div class="ads--content">
			<img {src} alt="display pic" />
			<div>
				<p class="heading">Promote your business</p>
				<div class="sub--heading">
					<p class="sponsored--ads">Sponsored •</p>
					<p>¢ 0.00 for 30 days</p>
				</div>
			</div>
		</div>
	</div>
	<div class="ads--body">
		<a class="ads--btn" href="http://x.com/SpartanOdx">
			Give your business a push →
		</a>
	</div>
</div>
