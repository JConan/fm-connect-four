<script lang="ts">
	import { boardStore, type PlayerColor } from '$lib/stores/board';
	import { fly } from 'svelte/transition';
	import Image from './Image.svelte';

	export let player: PlayerColor;
</script>

<div class={`score-board ${player}`} in:fly={{ x: 300 * (player === 'red' ? -1 : 1), delay: 1000 }}>
	<Image
		class={`${player === $boardStore.turn ? 'active' : ''} icon ${player}`}
		name={player === 'red' ? 'player-one' : 'player-two'}
	/>
	<span>
		{#if player === 'red'}
			Player 1
		{:else}
			Player 2
		{/if}
	</span>
	<span>12</span>
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

	.score-board :global(.active) {
		animation: bounceY 0.6s ease-in-out infinite;
	}

	@keyframes bounceY {
		0%,
		33% {
			transform: translateY(10px);
		}
		66% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(10px);
		}
	}
</style>
