<script lang="ts">
	import { inlineSvg } from '@svelte-put/inline-svg';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	const marks = {
		red: "<svg use:inlineSvg={base + '/images/counter-red-large.svg'} />",
		yellow: "<svg use:inlineSvg={base + '/images/counter-yellow-large.svg'} />"
	};

	let turn: 'red' | 'yellow' = 'red';

	let targetX: number;
	function calcTargetX(index: number) {
		const cursorRect = document.querySelectorAll('.board-cursor svg')[0].getClientRects()[0];
		const boardRect = document.getElementsByClassName('board')[0].getClientRects()[0];
		const cellRect = document.querySelectorAll('.board-cell')[index % 7].getClientRects()[0];
		targetX = cellRect.x + Math.floor((cellRect.width - cursorRect.width) / 2) - boardRect.x;
	}

	onMount(() => {
		calcTargetX(0);
	});
</script>

<div class="board-cursor">
	<svg
		style={`margin-left: ${targetX}px`}
		use:inlineSvg={base + '/images/marker-red.svg'}
		width="38"
	/>
</div>
<div class="board">
	{#each Array(7 * 6) as _, index}
		<div
			class="board-cell"
			id={`board-cell-${index}]`}
			role="cell"
			tabindex="0"
			on:mouseenter={() => {
				calcTargetX(index);
			}}
		>
			<!-- <svg use:inlineSvg={base + '/images/counter-red-large.svg'} /> -->
		</div>
	{/each}
	<svg class="board-shadow" use:inlineSvg={base + '/images/board-layer-black-large.svg'} />
	<svg class="board-overlay" use:inlineSvg={base + '/images/board-layer-white-large.svg'} />
</div>

<style>
	.board {
		position: relative;
		width: 39.5rem;
		height: 36.5rem;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		place-items: center;
		padding: 0.5rem;
		padding-bottom: 3rem;

		& > svg {
			position: absolute;
			top: 0;

			&.board-shadow {
				z-index: -1;
				top: 0.75rem;
			}
			&.board-overlay {
				pointer-events: none;
			}
		}

		& .board-cell {
			margin-left: -0.3125rem;
			border-radius: 100%;
			width: 4rem;
			height: 4rem;
			display: grid;
			place-items: center;
		}
	}

	.board-cursor {
		width: 39.5rem;
		height: 2.25rem;
		/* display: grid;
		grid-template-columns: repeat(7, 1fr);
		place-items: center;
		padding: 0 0.5rem;
		grid-template-areas: 'cell-1 cell-2 cell-3 cell-4 cell-5 cell-6 cell-7'; */

		& svg {
			transition: all 0.2s ease;
			height: 100%;
		}
	}
</style>
