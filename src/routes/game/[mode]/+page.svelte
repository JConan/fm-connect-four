<script lang="ts">
	import Board from '$lib/components/Board.svelte';
	import GameMenu from '$lib/components/GameMenu.svelte';
</script>

<main>
	<GameMenu />
	<Board />
</main>

<style>
	main {
		position: relative;
		width: 632px;
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
