<script lang="ts">
	import { boardStore } from '$lib/stores/board';
	import { onMount } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
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

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 768}
	<div class="board-cursor">
		{#key $data.column}
			<div in:fly={{ x: -x, duration: 200, opacity: 1 }} style={`grid-area: cell-${$data.column}`}>
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
