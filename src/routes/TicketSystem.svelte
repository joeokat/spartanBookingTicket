<script>
  const src = '/barCodeImg.png'
</script>

<div class="ticket-card">

  <div class="hot-ticket">
    <div class="ticket-price">
      <small> Ticket Price</small>
      <p>$ 0</p>
    </div>
    <div class="label">Hot 🔥</div>
  </div>

  <div class="odds">

  </div>

  <div class="barcode">
    <p>SportyBet</p>
    <div class="win-ticket">
      <img {src} alt="">
      <p class="sportCode">aw342223</p>
    </div>
  </div>
</div>

<style>
.ticket-card {
    background-color: var(--white);
    width: 398px;
    height: 385px;
    display: flex;
    border-radius: 33px;
    margin-bottom: 14px;
    flex-direction: column;
    position: relative;
  }
.ticket-price {
  display: flex;
  gap: 10px;
  flex-direction: column;
  position: absolute;
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
    position: absolute;
    right: 24px;
    top: 24px;
    padding: 4px 10px;
    border-radius: 24px;
    color: var(--white);
    background-color: var(--black);
  }
  .barcode {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
</style>