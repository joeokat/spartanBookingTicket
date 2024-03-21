<script>
	import { subscribed } from '../../stores.js'

	let subscribed_value

	subscribed.subscribe((value) => {
		subscribed_value = value
	})

	export let handleModal

	const src = '/barCodeImg.png'

	let show = false

	function getDate() {
		const curDate = new Date()
		return curDate.toLocaleDateString('en-US', {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
		})
	}
</script>

<div class="ticket-card">
	<div class="hot-ticket">
		<div class="ticket-price">
			<small>Ticket Price</small>
			<p>$2</p>
		</div>
		<div class="label">Hot 🔥</div>
	</div>

	<div class="odds">
		<div class="date">
			<small>Date</small>
			<p>{getDate()}</p>
		</div>

		<div class="number-ofBet">
			<small>Outcome</small>
			<p>3</p>
		</div>

		<div class="total-odds">
			<small> Total Odds</small>
			<p>2.52</p>
		</div>
	</div>

	<div class="barcode">
		<div class="winning-ticket">
			<p style="margin:1rem; text-align: center">
				International Break: <strong> We'll Be Right Back </strong>
			</p>
			{#if !subscribed_value}
				<img {src} alt="" on:click={handleModal} />
			{/if}

			{#if subscribed_value}
				<h3 class="vipOdds">Thank You 👏🏽</h3>
			{/if}
			<p style="color: #919191; margin:1rem; text-align: center">
				Power up with #SpartanPlus🍄
			</p>
			<p class="freeOdds">Sporty: <strong> ======== </strong></p>
			<p class="freeOdds">mSport: <strong> ======== </strong></p>
		</div>
	</div>
</div>
