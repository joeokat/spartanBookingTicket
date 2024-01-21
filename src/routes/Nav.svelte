<script>
  let src = "/dp.png";

  let date = new Date();
  let monthName = date.toLocaleString('default', { month: 'long' });

  function handleButton() {
    alert('Stay calm and enjoy daily free odds for now.')
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
        <p>Spartan</p>
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