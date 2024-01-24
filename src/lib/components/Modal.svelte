<script>
export let showModal = false;
import {fade} from 'svelte/transition';
export let handleClose;

	function handleEscape(event) {
  if (event.key === 'Escape') handleClose();
}
</script>

{#if showModal}
<div class="modal" >
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="overlay"
	  transition:fade={{ duration: 100 }}
	  on:keydown={(e) => handleEscape(e)}
	  on:click={handleClose}>
	</div>
	
	<dialog transition:fade={{ duration: 150 }}>
	  <slot />
	</dialog>
	</div>
{/if}
