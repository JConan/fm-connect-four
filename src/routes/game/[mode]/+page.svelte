<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inlineSvg } from '@svelte-put/inline-svg';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	const marks = {
		red: "<svg use:inlineSvg={base + '/images/counter-red-large.svg'} />",
		yellow: "<svg use:inlineSvg={base + '/images/counter-yellow-large.svg'} />"
	};

	let turn: 'red' | 'yellow' = 'red';
	let column = 1;
	let column_prev = 1;
	$: x = (column_prev - column) * 100;

	function enterColumn(index: number) {
		return () => {
			column_prev = column;
			column = (index % 7) + 1;
		};
	}
</script>

<div class="board-cursor">
	<!-- not sure why but board layer black would glitch a bit if removed-->
	<!-- <svg opacity="0" use:inlineSvg={base + '/images/marker-'       + { turn } + '.svg'} /> -->
	{#key column}
		<svg
			in:fly={{ x, duration: 200, opacity: 1, delay: 50 }}
			style="grid-area: cell-{column};"
			use:inlineSvg={base + '/images/marker-red.svg'}
		/>
	{/key}
</div>
<div class="board">
	{#each Array(7 * 6) as _, index}
		<div
			class="board-cell"
			id={`board-cell-${index}]`}
			role="cell"
			tabindex="0"
			on:mouseenter={enterColumn(index)}
		>
			<!-- <svg use:inlineSvg={base + '/images/counter-red-large.svg'} /> -->
		</div>
	{/each}
	<svg class="board-image" use:inlineSvg={base + '/images/board-layer-black-large.svg'} />
	<svg class="board-image" use:inlineSvg={base + '/images/board-layer-white-large.svg'} />
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

		& > .board-image {
			pointer-events: none;
			position: absolute;
			top: 0;

			&:first-child {
				z-index: -1;
				top: 0.75rem;
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
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		place-items: center;
		padding: 0 0.5rem;
		grid-template-areas: 'cell-1 cell-2 cell-3 cell-4 cell-5 cell-6 cell-7';
		transition: all 0.5s ease;

		& svg {
			height: 100%;
		}
	}
</style>
