<script>
	import Modal from '$lib/components/Modal.svelte'
	import SpartanPlus from '$lib/components/SpartanPlus.svelte'
	import Terms from '$lib/components/Terms.svelte'
	import Ticket from '$lib/components/Ticket.svelte'
	// import Ads from '$lib/components/Ads.svelte'
	import { subscribed } from '../stores.js'
	import Bet22 from '$lib/components/Bet22.svelte'

	let subscribed_value

	subscribed.subscribe((value) => {
		subscribed_value = value
	})

	let show = false

	function showModal() {
		show = true
	}

	function closeModal() {
		show = false
	}
</script>

<main>
	{#if !subscribed_value}
		<Modal showModal={show} handleClose={closeModal}>
			<h3 class="heading">Spartan +</h3>
			<hr />
			<p class="description">Subscribe Monthly to access VIP Games.</p>
			<p class="termss">Terms & Conditions Apply</p>
			<div class="dialog-btns">
				<a href="/subscribe">
					<button class="btn-subscribe"> Get VIP </button>
				</a>
				<button class="btn-cancel" on:click={closeModal}> Cancel </button>
			</div>
		</Modal>
	{:else}
		<Modal showModal={show} handleClose={closeModal}>
			<div>You are already subscribed to Spartan+</div>
		</Modal>
	{/if}

	<div class="sectionY">
		<Bet22 />
		<Ticket handleModal={showModal} />
		<SpartanPlus handleModal={showModal} />
		<!-- <Ads /> -->
	</div>
	<Terms />
</main>
