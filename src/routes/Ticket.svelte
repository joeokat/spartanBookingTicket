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
      <p>Free for 07 days</p>
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
      <p>7</p>
    </div>

    <div class="total-odds">
      <small> Total Odds</small>
      <p>2.00</p>
    </div>
  </div>

  <div class="barcode">
    <p>Premiums Odds</p>
    <div class="winning-ticket">
	  {#if !show}
      <img {src} alt="" on:click={() => show = true}>
	  {/if}

	  {#if show}
      <h3 class="vipOdds">3577F274</h3>
	  {/if}
    <p style="color: #ccc; margin-bottom:1.5rem;"> Premium subscriptions are valid until tickets are won </p>
    <p class="freeOdds"><strong>Rollover - WK4:</strong> 3577F274</p>
    </div>
  </div>
</div>
