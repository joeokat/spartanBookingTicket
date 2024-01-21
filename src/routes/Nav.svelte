<script>
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
  	return `Day ${Math.floor(diff / (24 * 60 * 60 * 1000))} of 365¼`;
  }
</script>

<nav>
  <div class="rollover">
    <div class="profile">
      <img {src} alt="" />
      <div class="greeting">
        <p>Spartan Odx</p>
        <small>Booking Tickets</small>
      </div>
    </div>

    <div class="see-days">
      <p>{getDate()}</p>
      <small>{monthName} 2024 Tickets</small>
    </div>
  </div>

    <button on:click={handleButton}>Join Us</button>
</nav>