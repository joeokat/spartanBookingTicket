<script>
	import WhatsappIcon from "$lib/components/icons/WhatsappIcon.svelte";

	
  let src = "/dp.png";

  let date = new Date();
  let monthName = date.toLocaleString('default', { month: 'long' });

  function handleButton() {
    let url = "https://whatsapp.com/channel/0029VaLVJWOLI8Yby1lM7U0G";
    window.open(url, "_blank");
  }

  function getDate() {
	  const currentDate = new Date();
	  const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
  	const diff = currentDate - startOfYear;
  	return `Day ${Math.floor(diff / (24 * 60 * 60 * 1000))} of 365½`;
  }
</script>

<nav>
  <div class="rollover">
    <div class="profile">
      <img {src} alt="" />
      <div class="greeting">
		<a href="/">
			<p>Spartan Odx</p>
		</a>
        <small>Booking Tickets</small>
      </div>
    </div>

    <div class="see-days">
      <p>{getDate()}</p>
      <small>{monthName} 2024 Tickets</small>
    </div>
  </div>

    <button on:click={handleButton}>Join Us <WhatsappIcon width='1.3em' height='1.3em' /></button>
</nav>