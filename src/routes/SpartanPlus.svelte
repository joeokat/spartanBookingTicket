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

<div class="overlay" 
  on:keydown={handleEscape} tabindex="0"
  style="{`display: ${showModal ? 'block' : 'none'}`}"
  on:click={handleClose}>
</div>

<dialog on:click={(e) => e.stopPropagation()}
  style="{`display: ${showModal ? 'flex' : 'none'}`}"
  >
  <h3 style="padding-bottom: 1rem; font-size: 1.5rem">Spartan +</h3>
  <hr />
  <p style="padding-top: 1rem;">Subscribe for only ¢25 daily to access premium odds</p>
  <div class="dialog-btns">
    <button class="btn-cancel" on:click={handleClose}>Cancel</button>
    <button class="btn-subscribe" on:click={handlePayment}>Subscribe</button>
  </div>
</dialog>

<script>
  let src = '/backgroundImg.png';

  let showModal = false;

  function handleModal() {
    showModal = true;
  }

  function handleClose() {
    showModal = false;
  }

  function handlePayment() {
    //
  }

  
  function handleEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>