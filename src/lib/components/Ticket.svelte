<script>
	import { subscribed } from '../../stores.js'

	let subscribed_value

	subscribed.subscribe((value) => {
		subscribed_value = value
	})

	// export let handleModal

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
			<div>
     <div class="label">🔥 Hot</div>
<!-- <p class="ticket-price"> ¢0 </p> -->
			</div>
		</div>
		<div 
style="background: green; padding: 4px 10px; border-radius: 24px; color: white;"> WON 🔥 </div>
	</div>

	<div class="odds">
		<div class="date">
			<small>Date</small>
			<p>{getDate()}</p>
		</div>

		<div class="number-ofBet">
			<small>Outcome</small>
			<p>4</p>
		</div>

		<div class="total-odds">
			<small> Total Odds</small>
			<p>2+</p>
		</div>
	</div>

	<div class="barcode">
		<div class="winning-ticket">
			<p style="margin:1rem; text-align: center">
				SPORTY ROLLOVER <br /> <strong> CODE:</strong>
			</p>
			<!-- {#if !subscribed_value}
				<img {src} alt="" on:click={handleModal} />
			{/if}

			{#if subscribed_value} -->
			<h3 class="vipOdds"> 189EBDE </h3>
			<!-- {/if} -->
			<p style="color: #919191; margin:1rem; text-align: center">
			<!-- subscriptions are valid for a month.
			</p> -->
		</div>
	</div>
</div>
