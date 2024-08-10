<script lang="ts">
	import type { PlayerColor } from '$lib/stores/board';
	import Image from './Image.svelte';

	export let player: PlayerColor;
</script>

<div class={`score-board ${player}`}>
	{#if player === 'red'}
		<Image class="icon red" name="player-one" />
		<span>Player 1</span>
		<span>12</span>
	{:else}
		<Image class="icon yellow" name="player-two" />
		<span>Player 2</span>
		<span>23</span>
	{/if}
</div>

<style>
	.score-board {
		margin-top: 160px;
		width: 141px;
		height: 160px;
		background-color: var(--white);
		border-radius: 20px;
		border: 3px solid var(--Black, #000);
		box-shadow: 0px 10px 0px 0px #000;

		display: grid;
		place-items: center;
		grid-template-rows: 2fr 1fr 1fr 1fr;

		font-size: 20px;
		font-weight: 700;

		& > span:last-child {
			font-size: 56px;
		}

		&.red {
			grid-area: player-one;
			margin-right: 80px;
		}
		&.yellow {
			grid-area: player-two;
			margin-left: 80px;
		}
	}
	.score-board > :global(.icon) {
		margin-top: -40px;
	}
	@media (max-width: 1079px) {
		.score-board {
			margin: 16px 16px 26px 16px;
			width: 272px;
			height: 100px;
			grid-template-columns: 0.5fr 2fr 2fr;
			grid-template-rows: auto;
		}

		.score-board > :global(.icon) {
			margin: 0;
		}

		.score-board.red {
			margin-right: 0px;
		}
		.score-board.red > :global(.icon) {
			margin-left: -35px;
		}

		.score-board.yellow {
			margin-left: 0px;
			direction: rtl;
		}
		.score-board.yellow > :global(.icon) {
			margin-right: -35px;
		}
	}
	@media (max-width: 639px) {
		.score-board {
			width: 142px;
			height: 81px;
			margin: 20px 16px 30px 16px;

			grid-template-columns: 0.5fr 2fr;
			grid-template-rows: auto auto;
			grid-template-areas:
				'icon title'
				'icon score';
		}
		.score-board > :global(.icon) {
			margin-top: 0;
			grid-area: icon;
		}
		.score-board span:last-child {
			grid-area: title;
		}

		.score-board span:last-child {
			grid-area: score;
			font-size: 32px;
		}
	}
</style>
