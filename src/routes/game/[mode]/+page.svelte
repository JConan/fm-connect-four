<script lang="ts">
	import Board from '$lib/components/Board.svelte';
	import GameMenu from '$lib/components/GameMenu.svelte';
	import ScoreBoard from '$lib/components/ScoreBoard.svelte';
</script>

<main>
	<GameMenu />
	<ScoreBoard player="red" />
	<ScoreBoard player="yellow" />
	<Board />
</main>

<style>
	main {
		height: 100%;
		display: grid;
		grid-template-areas:
			'. menu .'
			'player-one board player-two';
	}

	@media (max-width: 1079px) {
		main {
			grid-template-areas:
				'menu menu menu'
				'player-one . player-two'
				'board board board';
		}
	}

	@media (max-width: 639px) {
		main {
			width: 335px;
			grid-template-rows: 100px 170px 1fr auto;
		}
	}
</style>
