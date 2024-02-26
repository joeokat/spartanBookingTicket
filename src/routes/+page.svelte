<script>
import Modal from "$lib/components/Modal.svelte";
import SpartanPlus from "$lib/components/SpartanPlus.svelte";
import Terms from "$lib/components/Terms.svelte";
import Ticket from "$lib/components/Ticket.svelte";
import { subscribed } from '../stores.js';

let subscribed_value;

subscribed.subscribe((value) => {
	subscribed_value = value;
});

let show = false

function showModal() {
	show = true
}

function closeModal() {
  show = false;
}

</script>

<main>
	{#if !subscribed_value}
	<Modal showModal={show} handleClose={closeModal}>
	  <h3 class="heading"> Spartan + </h3>
	  <hr />
	  <p class="description"> Support us daily to access premium odds. </p>
	  <p class="termss"> Terms & Conditions Apply </p>
	  <div class="dialog-btns">
		<a href="/subscribe">
			<button class="btn-subscribe"> subscribe </button>
		</a>
		<button class="btn-cancel" on:click={closeModal}> Cancel </button>
	  </div>
	</Modal>
	{:else}
	<Modal showModal={show} handleClose={closeModal}>
		<div>You are already subscribed to Spartan +</div>
	</Modal>
	{/if}
	
	<div class="sectionY">
    <SpartanPlus handleModal={showModal}/>
    <Ticket handleModal={showModal}/>
  </div>
  <Terms />
</main>
