<script>
  let src = '/backgroundImg.png';
  
</script>

<div class="spartanPlus">
  <div class="container">
    <img {src} alt="">
    <img class="sportyPlayer" alt="" src="/sportyImg.png">
  </div>
</div>

<style>
  .spartanPlus {
    background-color: var(--lemonGreen);
    height: 262px;
    width: 398px;
    border-radius: 20px;
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
</style>