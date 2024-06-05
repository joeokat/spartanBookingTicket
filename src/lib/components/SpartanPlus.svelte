<script>
	let src = '/backgroundImg.png'

	export let handleModal
</script>

<div class="spartanPlus">
	<div class="container">
		<img {src} alt="" />
		<img class="sportyPlayer" alt="" src="/sportyImg.png" />
		<div class="spartanVIP">
			<div>Get VIP Fixed Odds for only $2</div>
			<button on:click={handleModal}> Subscribe </button>
		</div>
	</div>
</div>
