<script>
  let src = '/backgroundImg.png';

  function handleButton() {
    alert('Stay calm! VIP will be right back.')
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
      <button on:click={handleButton}>Spartan +</button>
    </div>
  </div>
</div>