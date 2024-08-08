<script lang="ts">
	import { base } from '$app/paths';
	import { route } from '$lib/ROUTES';
	import Board from '$lib/components/Board.svelte';
	import Image from '$lib/components/Image.svelte';
	import { resetBoard } from '$lib/stores/board';
</script>

<main>
	<div class="menu">
		<a href={`${base}${route('/')}`} class="flat-button button-purple">Menu</a>
		<Image class="logo" name="logo" />
		<button
			class="flat-button button-purple"
			on:click={() => {
				resetBoard();
			}}>Restart</button
		>
	</div>
	<Board />
</main>

<style>
	main {
		position: relative;
		width: 632px;

		& .menu {
			display: flex;
			justify-content: space-between;
			margin-top: 50px;
			margin-bottom: 15px;
		}
	}

	@media (max-width: 639px) {
		main {
			width: 335px;
		}
		:global(.logo) {
			width: 40px;
			height: 40px;
		}
	}
</style>
