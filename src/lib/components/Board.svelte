<script lang="ts">
	import { onMount } from 'svelte';
	import { boardStore, resetBoard, setActiveColumn, setCounter } from '$lib/stores/board';
	import Counter from './Counter.svelte';
	import Image from './Image.svelte';
	import BoardCursor from './BoardCursor.svelte';

	onMount(() => {
		resetBoard();
	});

	let hoverTimeout: NodeJS.Timeout | undefined = undefined;
	function onHoverColumn(index: number) {
		return () => {
			clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(() => {
				setActiveColumn(index);
			}, 150);
		};
	}

	function onSelectColumn(index: number) {
		return () => {
			setCounter({ indexColumn: index % 7 });
		};
	}
</script>

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
		<BoardCursor />
	</div>
</div>

<div class="display-turn">
	<Image name="turn-background-red" />
	<span>Player 1's turn</span>
	<span>3s</span>
</div>

<style>
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

	.display-turn {
		position: relative;
		z-index: 1;
		width: 197px;
		height: 165px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		background-size: cover;
		font-size: 16px;
		font-weight: 700;
		margin: auto;
		margin-top: -50px;

		& > span {
			margin-top: 20px;
			text-transform: uppercase;
			z-index: 1;
		}
		& > span:last-child {
			font-size: 56px;
		}

		& > img {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}

	@media (max-width: 767px) {
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

		.display-turn {
			width: 191px;
			height: 150px;
			margin-top: -30px;
		}
	}
</style>
