<script>
  import NotificationArea from "./NotificationArea.svelte";
  import SpartanPlus from "./SpartanPlus.svelte";
  import TermsOfUse from "./TermsOfUse.svelte";
  import TicketSystem from "./TicketSystem.svelte";
</script>

<main>
  <NotificationArea />
  <div class="sectionY">
    <SpartanPlus />
    <TicketSystem />
  </div>
  <TermsOfUse />
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
  .sectionY {   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 100px;
  }
</style>