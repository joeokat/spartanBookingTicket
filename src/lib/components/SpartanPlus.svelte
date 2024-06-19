<script>
	let src = '/backgroundImg.png'

	export let handleModal
</script>

<div class="spartanPlus">
	<div class="container">
		<img {src} alt="" />
		<img class="sportyPlayer" alt="" src="/sportyImg.png" />
		<div class="spartanVIP">
			<div>Get Monthly VIP Odds on 𝕏</div>
			<button on:click={handleModal}> Subscribe </button>
		</div>
	</div>
</div>
