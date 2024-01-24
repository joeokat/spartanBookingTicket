<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { subscribed } from '../../stores.js';

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.head.appendChild(script);
  });

	let formInput = {
		email: '',
		firstName: '',
		lastName: ''
	}

	function payWithPaystack() {
		const amount = 23.92

		let handler = PaystackPop.setup({

			key: 'pk_test_44e2e5b0e0fb389e719b38ebc184d7134d7fd211',
			currency: 'GHS',
			email: formInput.email,
			amount: amount * 100,
			ref: ''+Math.floor((Math.random() * 1000000000) + 1), 
			onClose: function(){
  				alert('Window closed.');
			},
			callback: function(response){
  				let message = 'Payment complete! Reference: ' + response.reference;
  				alert(message);
				subscribed.set(true)
				goto('/')
			}
		});
		
		handler.openIframe();
	}
</script>
  
<div class="subscription-form">

	<form id="paymentForm" on:submit|preventDefault={payWithPaystack}>		
	  
		<div class="parent-group">
		<div class="form-group">
		  <input type="text" id="first-name" placeholder="First Name" bind:value={formInput.firstName}/>
		</div>
	  
		<div class="form-group">
		  <input type="text" id="last-name" placeholder="Last Name" bind:value={formInput.lastName}/>
		</div>
		</div>

		<div class="form-group">
			<input type="email" id="email-address" required placeholder="Email Address" bind:value={formInput.email}/>
		  </div>
	  
		<div class="form-submit">
		  <button type="submit"> Subscribe for $2 </button>
		</div>
	  
</form>
</div>