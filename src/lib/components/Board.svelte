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

<style>
	.board {
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

	.board > :global(.overlay),
	.board > :global(.shadow),
	.board > .cells {
		position: absolute;
		width: 100%;
		height: calc(100% - var(--board-cursor-height) - var(--board-shadow-extra));
		top: var(--board-cursor-height);
		left: 0;
	}

	.board :global(.overlay) {
		pointer-events: none;
	}
	.board :global(.shadow) {
		height: calc(100% - var(--board-cursor-height));
	}

	@media (max-width: 767px) {
		.board {
			--board-cursor-height: 0px;
		}
		.board .cells {
			padding: 16px 2px 38px 15px;
		}
	}

	@media (max-width: 639px) {
		.board {
			--board-width: 335px;
			--board-height: 310px;
		}
		.board .cells {
			padding: 6px 2px 24px 7px;
		}
		.board .cells .cell {
			width: 40px;
			height: 45px;
		}
	}
</style>
