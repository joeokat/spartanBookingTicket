<style>
	.ads--card {
		width: 398px;
		border-radius: 20px;
		padding: 22px;
		margin-bottom: 1rem;
		color: #fafaf6;
		background-color: #066066;
		display: flex;
		gap: 1rem;
		flex-direction: column;
		position: relative;
	}
	.ads--content {
		display: flex;
		flex-direction: row;
		gap: 8px;
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
	.ads--btn {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 40px;
		padding: 12px 24px;
		border: 0;
		border-radius: 2.6rem;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		color: #066066;
		background-color: #fafaf6;
	}

	@media only screen and (max-width: 600px) {
		.ads--card {
			width: 100%;
		}
		.heading {
			font-size: 1.3rem;
			font-weight: 500;
		}
	}
</style>

<script>
	let src = '/companyAvatar.png'
</script>

<div class="ads--card">
	<div class="ads--content">
	<!--	<img {src} alt="display pic" /> -->
		<div>
			<p class="heading">Fleet Labs Ghana LLC.</p>
			<div class="sub--heading">
				<p class="sponsored--ads">Sponsored Ad •</p>
				<p> 🌍 </p>
			</div>
		</div>
	</div>

	<p>We Design[UI/UX] and Develop Mobile & Web Applications for small businesses and enterprise companies.</p>

	<div class="ads--body">
		<a class="ads--btn" href="http://wa.me/233509994874">
			⚡ Get Free Quote
		</a>
	</div>
</div>
