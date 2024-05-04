<script>
	let src = '/backgroundImg.png'

	export let handleModal
</script>

<div class="spartanPlus">
	<div class="container">
		<img {src} alt="" />
		<img class="sportyPlayer" alt="" src="/sportyImg.png" />
		<div class="spartanVIP">
			<div>Get Premium Odds for just $1</div>
			<button on:click={handleModal}> Tip Jar </button>
		</div>
	</div>
</div>
