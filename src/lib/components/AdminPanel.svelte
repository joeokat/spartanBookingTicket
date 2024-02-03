<script>
  let formInput = {
		email: '',
		firstName: '',
		lastName: ''
	}
</script>

<div class="subscription-form">

	<form id="adminPanel" on:submit|preventDefault={payWithPaystack}>		
	  
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
		  <button type="submit">Subscribe to Spartan+</button>
		</div>
	</form>
</div>