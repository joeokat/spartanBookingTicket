<script>
import Terms from "$lib/components/Terms.svelte";
import PaymentForm from "$lib/components/PaymentForm.svelte"
import PaymentSuccess from "$lib/components/PaymentSuccess.svelte"
import { subscribed } from '../../stores.js';

let subscribed_value;

subscribed.subscribe((value) => {
	subscribed_value = value;
});
</script>

<main>
	<div class="sectionY">
	{#if !subscribed_value}
	<PaymentForm />
	{:else}
	<PaymentSuccess />
	{/if}
  </div>
  <Terms />
</main>