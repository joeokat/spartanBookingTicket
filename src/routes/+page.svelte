<script>
  import NotificationArea from "./NotificationArea.svelte";
  import SpartanPlus from "./SpartanPlus.svelte";
  import TermsOfUse from "./TermsOfUse.svelte";
  import TicketSystem from "./TicketSystem.svelte";

</script>

<main class="appWrapper">
  <div class="appContainer">
  <NotificationArea />
  <SpartanPlus />
  <TicketSystem />
  <TermsOfUse />  
  </div>
</main>


<style>
  :root {
    --black: #101010;
    --white: #fafafa;
    --green: #AFE67E;
    --lemonGreen: #E7F161;
    --orange: #F2B449;
    --darkGray: #737373;
    --gray: #D6D5D5;
    --dottedLine: #696969;
  }
  .appWrapper {   
    max-width: 1440px;
    border-radius: 0 0 60px 60px;
    padding: 0 26px;
    background-color: var(--black);
    margin-bottom: 33px;
  }
  .appContainer {
    max-width: 398px;
    margin: 0 auto;
  }
</style>