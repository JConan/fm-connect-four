<script lang="ts">
	import { boardStore } from '$lib/stores/board';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import Image from './Image.svelte';

	let x = 0;
	const columnStore = writable<{ current?: number; previous?: number }>({});
	onMount(() => {
		columnStore.subscribe(({ current, previous }) => {
			if (current !== undefined && previous !== undefined) {
				const currentCell = document.getElementById(`board-cell-${previous}`)!.getClientRects()[0];
				const nextCell = document.getElementById(`board-cell-${current}`)!.getClientRects()[0];
				x = nextCell.x - currentCell.x;
			}
		});
		boardStore.subscribe(($boardStore) => {
			columnStore.update(($columnStore) => {
				if ($columnStore.current !== $boardStore.activeColumn) {
					return {
						current: $boardStore.activeColumn,
						previous: $columnStore.current
					};
				}
				return $columnStore;
			});
		});
	});

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 1079}
	<div class="board-cursor">
		{#key $columnStore.current}
			<div
				in:fly={{ x: -x, duration: 200, opacity: 1 }}
				style={`grid-area: cell-${$columnStore.current}`}
			>
				<Image name={`marker-${$boardStore.turn}`} />
			</div>
		{/key}
	</div>
{/if}

<style>
	.board-cursor {
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
</style>
