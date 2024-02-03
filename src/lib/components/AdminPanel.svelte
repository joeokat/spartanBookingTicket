<script>
  let formInput = {
		oddsOutcome: '',
		totalOdds: '',
		premiumOdds: '',
		freeOdds: ''
	}
</script>

<div class="admin-panel">
	<form id="adminForm" on:submit|preventDefault>		
	  
		<div class="parent-group">
			<div class="form-group">
				<input type="number" id="premium-odds" placeholder="Premium Odds" bind:value={formInput.premiumOdds}/>
			</div>
			
			<div class="form-group">
				<input type="number" id="free-odds" placeholder="Free Odds" bind:value={formInput.freeOdds}/>
			</div>
		</div>

		<div class="parent-group">
			<div class="form-group">
				<input type="number" id="odds-outcome" placeholder="Outcome" bind:value={formInput.oddsOutcome}/>
			</div>
			
			<div class="form-group">
				<input type="number" id="total-odds" placeholder="Total Odds" bind:value={formInput.totalOdds}/>
			</div>
		</div>
	  
		<div class="form-submit">
		  <button type="submit">Update Ticket</button>
		</div>
	</form>
</div>