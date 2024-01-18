<script>
  const src = '/barCodeImg.png'

  let show = false

  function getDate() {
	const curDate = new Date()
	return curDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }
</script>


<div class="ticket-card">

  <div class="hot-ticket">
    <div class="ticket-price">
      <small>Ticket Price</small>
      <p>Free for 12 days</p>
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
      <p>5</p>
    </div>

    <div class="total-odds">
      <small> Total Odds</small>
      <p>2.34</p>
    </div>
  </div>

  <div class="barcode">
    <p>Tap to display VIP ODDS</p>
    <div class="winning-ticket">
	  {#if !show}
      <img {src} alt="" on:click={() => show = true}>
	  {/if}

	  {#if show}
      <h3 class="vipOdds">Recovery: BE8396B9</h3>
	  {/if}
    <p class="freeOdds"><strong>Free Odd:</strong> ########</p>
    </div>
  </div>
</div>
