<script lang="ts">
	import { onMount } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import Counter from './Counter.svelte';
	import { board, setCounter, type CounterColor } from '$lib/stores/board';
	import Image from './Image.svelte';

	const column = writable(0);
	const prevColumn = writable(0);

	let x = 0;
	const data = derived([column, prevColumn], ([column, prevColumn]) => ({ column, prevColumn }));
	onMount(() => {
		data.subscribe(({ column, prevColumn }) => {
			const currentCell = document.getElementById(`board-cell-${prevColumn}`)!.getClientRects()[0];
			const nextCell = document.getElementById(`board-cell-${column}`)!.getClientRects()[0];
			x = nextCell.x - currentCell.x;
		});
	});

	let hoverTimeout: NodeJS.Timeout | undefined = undefined;
	let hoverDelay = 200;
	function onHoverColumn(index: number) {
		return () => {
			clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(() => {
				column.update(($column) => {
					prevColumn.set($column);
					return index % 7;
				});
			}, hoverDelay * 0.75);
		};
	}

	let color: CounterColor = 'red';
	function onSelectColumn(index: number) {
		return async (event: Event) => {
			if (await setCounter({ indexColumn: index % 7, color }))
				color = color === 'red' ? 'yellow' : 'red';
		};
	}

	let innerWidth: number;
	let imageSize: 'small' | 'large' = 'large';
	$: imageSize = innerWidth < 640 ? 'small' : 'large';
</script>

<svelte:window bind:innerWidth />

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
				{#if $board[index]}
					<Counter color={$board[index]} />
				{/if}
			</button>
		{/each}
	</div>
	<Image class="overlay" name="board-layer-white" />
	{#if innerWidth > 768}
		<div class="board-cursor">
			{#key $data.column}
				<div
					in:fly={{ x: -x, duration: hoverDelay, opacity: 1 }}
					style={`grid-area: cell-${$data.column}`}
				>
					<Image name={`marker-${color}`} />
				</div>
			{/key}
		</div>
	{/if}
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

		& > * {
			position: absolute;
			width: 100%;
			height: calc(100% - var(--board-cursor-height) - var(--board-shadow-extra));
			top: var(--board-cursor-height);
			left: 0;
		}
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

		& .board-cursor {
			position: absolute;
			top: 0;
			width: 39.5rem;
			height: 2.25rem;
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			place-items: center;
			padding: 0 0.5rem;
			grid-template-areas: ' cell-0 cell-1 cell-2 cell-3 cell-4 cell-5 cell-6';

			& > * {
				height: 100%;
			}
		}
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
