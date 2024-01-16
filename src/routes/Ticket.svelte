<script>
  const src = '/barCodeImg.png'
</script>

<div class="sectionY">
<div class="ticket-card">

  <div class="hot-ticket">
    <div class="ticket-price">
      <small>Ticket Price</small>
      <p>$ 2</p>
    </div>
    <div class="label">Hot 🔥</div>
  </div>

  <div class="odds">
    <div class="date">
      <small>Date</small>
      <p>Tue, Jan 09</p>
    </div>

    <div class="number-ofBet">
      <small>Outcome</small>
      <p>3</p>
    </div>

    <div class="total-odds">
      <small> Total Odds</small>
      <p>2.00</p>
    </div>
  </div>

  <div class="barcode">
    <p>SportyBet</p>
    <div class="winning-ticket">
      <img {src} alt="">
      <h1>19964FB</h1>
    </div>
  </div>
</div>
</div>

<style>
 

.ticket-card {
    background-color: var(--white);
    width: 398px;
    height: 398px;
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
    /* padding-top: 30px; */
    padding-bottom: 22px;
}
.winning-ticket h1{
  display: block;
  margin: 0 auto;
  left: 0; 
  right: 0;
  bottom: 50px;
  position: absolute;
}
</style>