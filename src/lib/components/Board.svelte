<script lang="ts">
	import { onMount } from 'svelte';
	import {
		boardStore,
		isPause,
		resetBoard,
		setActiveColumn,
		setCounter,
		winner
	} from '$lib/stores/board';
	import Counter from './Counter.svelte';
	import Image from './Image.svelte';
	import BoardCursor from './BoardCursor.svelte';
	import GameStatus from './GameStatus.svelte';
	import { fade, fly } from 'svelte/transition';

	onMount(() => {
		resetBoard();
	});

	let hoverTimeout: NodeJS.Timeout | undefined = undefined;
	function onHoverColumn(index: number) {
		return () => {
			clearTimeout(hoverTimeout);
			if (!$isPause) {
				hoverTimeout = setTimeout(() => {
					setActiveColumn(index);
				}, 150);
			}
		};
	}

	function onSelectColumn(index: number) {
		return () => {
			if (!$isPause) {
				setCounter({ indexColumn: index % 7 });
			}
		};
	}
</script>

<div class="board-container">
	<div class="board">
		<div class="board-grid">
			<Image class="shadow" name="board-layer-black" />
			<div class="cells">
				{#each Array(7 * 6) as _, index}
					<button
						class="cell"
						id={`board-cell-${index}`}
						role="cell"
						tabindex="0"
						on:mouseenter={onHoverColumn(index)}
						on:click={onSelectColumn(index)}
					>
						{#if $boardStore.grid[index]}
							<Counter color={$boardStore.grid[index]} />
						{/if}
					</button>
				{/each}
			</div>
			<Image class="overlay" name="board-layer-white" />
			<div in:fade={{ delay: 1000 }}>
				<BoardCursor />
			</div>
		</div>
	</div>
	<GameStatus />
	<div
		class="game-status-background"
		in:fly={{ delay: 1000, y: 300 }}
		style={`background-color: var(--${$winner ? $winner : 'dark-purple'})`}
	></div>
</div>

<style>
	.board-container {
		position: relative;
		grid-area: board;
	}

	.board-grid {
		--board-width: 632px;
		--board-height: 584px;
		--board-cursor-height: 36px;
		--board-shadow-extra: 10px;

		position: relative;
		width: var(--board-width);
		height: calc(var(--board-height) + var(--board-cursor-height) + var(--board-shadow-extra));

		& .cells {
			padding: 18px 1px 38px 15px;
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			& .cell {
				border: none;
				background: none;
				width: 75px;
				height: 70px;
				padding: 0;
			}
		}
	}

	.board-container > .game-status-background {
		margin-top: -200px;
		height: 200px;
		width: 100dvw;
		border-radius: 60px 60px 0 0;
		z-index: -1;
		position: absolute;
		left: 50%;
		bottom: 0px;
		transform: translateX(-50%);
	}

	.board-grid > :global(.overlay),
	.board-grid > :global(.shadow),
	.board-grid > .cells {
		position: absolute;
		width: 100%;
		height: calc(100% - var(--board-cursor-height) - var(--board-shadow-extra));
		top: var(--board-cursor-height);
		left: 0;
	}

	.board-grid :global(.overlay) {
		pointer-events: none;
	}
	.board-grid :global(.shadow) {
		height: calc(100% - var(--board-cursor-height));
	}

	@media (max-width: 1079px) {
		.board-grid {
			--board-cursor-height: 0px;
		}
		.board-grid .cells {
			padding: 16px 2px 38px 15px;
		}
	}

	@media (max-width: 639px) {
		.board-grid {
			--board-width: 335px;
			--board-height: 310px;
		}
		.board-grid .cells {
			padding: 6px 2px 24px 7px;
		}
		.board-grid .cells .cell {
			width: 40px;
			height: 45px;
		}
		.board-container > .game-status-background {
			height: 236px;
		}
	}
</style>
