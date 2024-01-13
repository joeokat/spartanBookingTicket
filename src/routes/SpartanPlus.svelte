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

<style>
  .spartanPlus {
    background-color: var(--lemonGreen);
    height: 262px;
    width: 398px;
    border-radius: 20px;
    margin-top: 40px;
    position: relative;
  }
  .container {
    background-image: var(--lemonGreen);
    height: 100%;
    width: 100%;
    border-radius: inherit;
  }
  .sportyPlayer {
    left: 0;
    bottom: 0;
    position: absolute;
  }
  .spartanVIP {
    display: flex;
    flex-direction: column;
    width: 195px;;
    top: 55px;
    right: 16px;
    position: absolute;
  }
  .spartanVIP div {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--black);
  }
  .spartanVIP button {
    /* margin: 0; */
    border: 0;
    height: 50px;
    padding: 14px 55px;
    border-radius: 2.6rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--lemonGreen);
    background-color: var(--black);
  }
</style>