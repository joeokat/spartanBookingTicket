<script>
  const src = '/barCodeImg.png'

  let show = false
</script>

<div class="sectionY">
<div class="ticket-card">

  <div class="hot-ticket">
    <div class="ticket-price">
      <small>Ticket Price</small>
      <p>Free for 29 days</p>
    </div>
    <div class="label">Hot 🔥</div>
  </div>

  <div class="odds">
    <div class="date">
      <small>Date</small>
      <p>Wed, Jan 17</p>
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
      <h3 class="vipOdds">VIP Odd: ########</h3>
	  {/if}
    <p class="freeOdds"><strong>Free Odd:</strong> BE8396B9</p>
    </div>
  </div>
</div>
</div>

<style>
.ticket-card {
  background-color: var(--white);
  width: 398px;
  border-radius: 33px;
  margin-bottom: 14px;
  flex-direction: column;
  display: flex;
  position: relative;
}
.hot-ticket {
  display: flex;
  align-items: first baseline;
  justify-content: space-between;
  margin-top: 24px;
  padding-bottom: 15px;
  padding: 0 24px;
}
.ticket-price {
  display: flex;
  gap: 10px;
  flex-direction: column;
  top: 32px;
  left: 26px;
}
.ticket-price small {
  font-size: 14px;
}
.ticket-price p {
  margin: 0;
  font-size: 27px;
  font-weight: bold;
}
.ticket-card .label {
  right: 24px;
  top: 24px;
  padding: 4px 10px;
  border-radius: 24px;
  color: var(--white);
  background-color: var(--black);
}
.odds {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 32px;
  border-bottom: 2px dotted var(--dottedLine);
  border-top: 2px dotted var(--dottedLine);
}
.odds p {
  font-size: 16px;
  font-weight: 600;
}
.date {
  gap: 10px;
  text-align: left;
}
.number-ofBet {
  gap: 10px;
  text-align: center;
}
.total-odds {
  gap: 10px;
  text-align: right;
}
.barcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 22px;
}
.winning-ticket {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.vipOdds, .freeOdds {
  display: block;
  margin: 0 auto;

}
</style>
