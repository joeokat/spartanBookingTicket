<script>
  let src = "/dp.png";

  function handleButton() {
    alert('Stay calm! VIP will be right back.')
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
      <small>January 2024 Tickets</small>
    </div>
  </div>

    <button on:click={handleButton}>Spartan +</button>
</nav>


<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 80px;
  }
.rollover {
  display: flex;
  align-items: center;
  gap: 30px;
}
  .see-days p {
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    color: var(--lemonGreen);
  }
 
  .profile {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  img {
    width: 66px;
    height: 66px;
  }
  .greeting {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .greeting p {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    color: var(--white);
  }
  small {
    font-size: 14px;
    color: var(--gray);
  }

  button {
    border: 0;
    height: 50px;
    padding: 14px 55px;
    border-radius: 2.6rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: var(--lemonGreen);
    color: var(--black);
  }

@media only screen and (max-width: 767px) {
nav .profile, button {
  margin: 0;
  display: none;
}

}
</style>