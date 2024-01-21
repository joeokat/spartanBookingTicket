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
  <p style="padding-top: 1rem;">Get VIP ticket for only $2, subscribe daily to access premium odds.</p>
  <p style="color: gray; padding-top: 0.5rem;">Terms & Conditions Apply</p>
  <div class="dialog-btns">
    <button class="btn-subscribe" on:click={handlePayment}>Subscribe</button>
    <button class="btn-cancel" on:click={handleClose}>Cancel</button>
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
    alert('Stay calm! VIP channels under development')
  }

  
  function handleEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>