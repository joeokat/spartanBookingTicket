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
				<div class="label">🔥 Daily Susu</div>
				<!-- <p class="ticket-price"> ¢0 </p> -->
			</div>
		</div>
	<!--	<div 
style="background: green; padding: 4px 10px; border-radius: 24px; color: white;"> Won 🎉 </div> -->
	</div>

	<div class="odds">
		<div class="date">
			<small>Date</small>
			<p>{getDate()}</p>
		</div>

		<div class="number-ofBet">
			<small>Outcome</small>
			<p>4+</p>
		</div>

		<div class="total-odds">
			<small> Total Odds</small>
			<p>1.5+</p>
		</div>
	</div>

	<div class="barcode">
		<div class="winning-ticket">
			<p style="margin:1rem; text-align: center">
				<strong> 22BET CODE</strong>
			</p>
			 {#if !subscribed_value}
				<img {src} alt="" on:click={handleModal} />
			{/if}

			{#if subscribed_value} 
			<h3 class="vipOdds">######</h3>
			 {/if}
			<p style="color: #919191; margin:1rem; text-align: center">
				VIP Odds Available 10 : 00 AM Daily 
			</p>
		</div>
	</div>
</div>
