<script>
  import Nav from "./Nav.svelte";
  import SpartanPlus from "./SpartanPlus.svelte";
  import Terms from "./Terms.svelte";
  import Ticket from "./Ticket.svelte";
</script>

<main>
  <Nav />
  <div class="sectionY">
    <SpartanPlus />
    <Ticket />
  </div>
  <Terms />
</main>

<style>
:root {
    --black: #101010;
    --white: #fafafa;
    --green: #AFE67E;
    --lemonGreen: #E7F161;
    --orange: #F2B449;
    --red: #DF011F
    --darkGray: #737373;
    --gray: #D6D5D5;
    --dottedLine: #696969;
}
/* .sectionX {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 100px;
} */
.sectionY {   
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 100px;
}
</style>