<script>
	let src = '/backgroundImg.png'

	export let handleModal
</script>

<div class="spartanPlus">
	<div class="container">
		<img {src} alt="" />
		<img class="sportyPlayer" alt="" src="/sportyImg.png" />
		<div class="spartanVIP">
			<div> Subscribe to Monthly VIP </div>
			<button on:click={handleModal}> Join Now </button>
		</div>
	</div>
</div>
