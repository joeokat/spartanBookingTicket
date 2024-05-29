<script>
	let src = '/backgroundImg.png'

	export let handleModal
</script>

<div class="spartanPlus">
	<div class="container">
		<img {src} alt="" />
		<img class="sportyPlayer" alt="" src="/sportyImg.png" />
		<div class="spartanVIP">
			<div>Get VIP Odds for only $1</div>
			<button on:click={handleModal}> Get VIP </button>
		</div>
	</div>
</div>
