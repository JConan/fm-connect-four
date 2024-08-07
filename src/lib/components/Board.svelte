<script lang="ts">
	import { base } from '$app/paths';
	import { inlineSvg } from '@svelte-put/inline-svg';
	import { onMount } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import Counter from './Counter.svelte';
	import { board, setCounter, type CounterColor } from '$lib/stores/board';

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
</script>

<div class="board">
	<svg class="shadow" use:inlineSvg={base + '/images/board-layer-black-large.svg'} height="594" />
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
	<svg class="overlay" use:inlineSvg={base + '/images/board-layer-white-large.svg'} />
	<div class="board-cursor">
		{#key $data.column}
			<svg
				in:fly={{ x: -x, duration: hoverDelay, opacity: 1 }}
				style={`grid-area: cell-${$data.column}`}
				use:inlineSvg={base + '/images/marker-' + color + '.svg'}
				width="38"
				height="30"
			/>
		{/key}
	</div>
</div>

<style>
	.board {
		position: relative;
		width: 632px;
		height: calc(584px + 36px);

		& .cells,
		.shadow,
		.overlay {
			position: absolute;
			width: 100%;
			height: calc(100% - 36px);
			top: 2.25rem;
			left: 0;
		}
		& .shadow {
			height: calc(100% + 10px);
			z-index: -1;
		}
		& .overlay,
		.shadow {
			pointer-events: none;
		}
		& .cells {
			padding: 18px 2px 38px 15px;
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

			& > svg {
				height: 100%;
			}
		}
	}
</style>
