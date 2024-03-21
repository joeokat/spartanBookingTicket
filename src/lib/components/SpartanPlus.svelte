<script>
	let src = '/backgroundImg.png'

	export let handleModal
</script>

<div class="spartanPlus">
	<div class="container">
		<img {src} alt="" />
		<img class="sportyPlayer" alt="" src="/sportyImg.png" />
		<div class="spartanVIP">
			<div>Subscribe to Spartan Plus🍄</div>
			<button on:click={handleModal}> Support us </button>
		</div>
	</div>
</div>
