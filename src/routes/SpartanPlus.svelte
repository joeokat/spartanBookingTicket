<script>
  let src = '/backgroundImg.png';

  function handleModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').showModal();
  }

  function handleClose() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').close();
  }

  function handlePayment() {
    //
  }
</script>

<div class="spartanPlus">
  <div class="container">
    <img {src} alt="">
    <img class="sportyPlayer" alt="" src="/sportyImg.png">
    <div class="spartanVIP">
      <div>
        Make Your Life Easier With   →
      </div>
      <button on:click={handleModal}>Spartan +</button>
    </div>
  </div>
</div>

<div class="overlay" id="overlay"></div>

<dialog id="modal" open>
  <h3>Get VIP Odds</h3>
  <p>For only Ghs25 daily to access Spartan +</p>
  <div class="dialog-btns">
    <button class="btn-cancel" on:click={handleClose}>Cancel</button>
    <button class="btn-subscribe" on:click={handlePayment}>Subscribe</button>
  </div>
</dialog>

<style>

</style>