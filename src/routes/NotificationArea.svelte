<script>
  let src = "/dp.png";
</script>

<div class="notificationArea">
  <div class="profile">
    <img {src} alt="" />
    <div class="greeting">
      <p>Spartan</p>
      <small>Booking Tickets</small>
    </div>
  </div>
</div>

<style>
  .notificationArea {
    display: flex;
    padding-top: 65px;
    padding-bottom: 32px;
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
</style>