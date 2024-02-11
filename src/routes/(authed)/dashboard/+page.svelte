<script>
	import AdminPanel from "$lib/components/AdminPanel.svelte";
</script>
	
<main>
	<div class="sectionY">
		<AdminPanel />
		<form method="POST" action="/logout">
			<button class="goBack">Logout</button>
		</form>
	</div>
</main>

<style lang='scss'>
.goBack {
	border: none;
	cursor: pointer;
}
</style>