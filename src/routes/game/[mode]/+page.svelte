<script lang="ts">
	import Board from '$lib/components/Board.svelte';
	import type { Readable } from 'svelte/store';

	const marks = {
		red: "<svg use:inlineSvg={base + '/images/counter-red-large.svg'} />",
		yellow: "<svg use:inlineSvg={base + '/images/counter-yellow-large.svg'} />"
	};

	let turn: 'red' | 'yellow' = 'red';
</script>

<main>
	<Board />
</main>

<style>
	main {
		position: relative;
	}
</style>
