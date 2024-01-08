<script>
  let src = "/dp.png";
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
      <p>Day 9 of 365 ¼</p>
      <small>January 2024 Tickets</small>
    </div>
  </div>
    <button>Spartan +</button>
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
    background-color: var(--lemonGreen);
    color: var(--black);
  }
</style>