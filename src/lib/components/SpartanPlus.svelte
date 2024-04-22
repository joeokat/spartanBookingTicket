<script>
	let src = '/backgroundImg.png'

	export let handleModal
</script>

<div class="spartanPlus">
	<div class="container">
		<img {src} alt="" />
		<img class="sportyPlayer" alt="" src="/sportyImg.png" />
		<div class="spartanVIP">
			<div>Subscribe to Premium Odds</div>
			<button on:click={handleModal}> Premium+ </button>
		</div>
	</div>
</div>
