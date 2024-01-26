<script>
import { subscribed } from '../../stores.js';

let subscribed_value;

subscribed.subscribe((value) => {
	subscribed_value = value;
});

export let handleModal

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
      <p>2.5</p>
    </div>

    <div class="total-odds">
      <small> Total Odds</small>
      <p>50.00</p>
    </div>
  </div>

  <div class="barcode">
    <p style="margin: 1rem 0;">Premiums Odds</p>
    <div class="winning-ticket">
	  {#if !subscribed_value}
      <img {src} alt="" on:click={handleModal}>
	  {/if}

	  {#if subscribed_value}
      <h3 class="vipOdds">45E934030</h3>
	  {/if}
    <p style="color: #919191; margin:1rem; text-align: center"> Premium subscriptions are valid until tickets are won </p>
    <p class="freeOdds"><strong>90+ Odds - WK4:</strong> 644101CF</p>
    </div>
  </div>
</div>
