<script lang="ts">
	import { base } from '$app/paths';
	import { route } from '$lib/ROUTES';
	import { resetBoard } from '$lib/stores/board';
	import Image from '$lib/components/Image.svelte';
</script>

<div class="menu">
	<a href={`${base}${route('/')}`} class="flat-button button-purple">Menu</a>
	<Image class="logo" name="logo" />
	<button
		class="flat-button button-purple"
		on:click={() => {
			resetBoard();
		}}
	>
		Restart
	</button>
</div>

<style>
	.menu {
		display: flex;
		justify-content: space-between;
		margin: 20px 0 10px 0;
	}
</style>
