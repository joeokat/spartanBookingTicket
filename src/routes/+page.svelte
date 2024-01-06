<script>
  import NotificationArea from "./NotificationArea.svelte";
  import SpartanPlus from "./SpartanPlus.svelte";
  import TermsCondition from "./TermsCondition.svelte";
  import TicketSystem from "./TicketSystem.svelte";

</script>

<main class="appWrapper">
  <NotificationArea />
  <SpartanPlus />
  <TicketSystem />
  <!-- <TermsCondition />   -->
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
    border-radius: 0 0 60px 60px;
    padding: 0 26px;
    background-color: var(--black);
    position: absolute;
  }
</style>