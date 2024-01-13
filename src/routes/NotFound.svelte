<script>
  
</script>

<div class="f0f">
  <div class="notFound">Nothing to see here</div>
  <button on:click={alert('Yo!')}>Return</button>
</div>

<style>
.f0f {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
}
  .notFound {
    font-family: monospace;
    font-size: xx-large;
    font-weight: 900;
  }

  button {
    font-size: 16px;
    font-weight: 600;
    padding: 4px 16px;
    color: var(--white);
    background-color: var(--black);
  }
</style>