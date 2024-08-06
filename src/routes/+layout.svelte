<script lang="ts">
	import '../app.css';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import { navigating } from '$app/stores';
	import { fly } from 'svelte/transition';

	let pixels = 500;
	let directions: Record<string, [object, object]> = {
		// from home
		'to:rule': [{ x: pixels }, { x: -pixels }],
		'to:game': [{ y: pixels }, { y: -pixels }],

		// to home
		'from:rule': [{ x: -pixels }, { x: pixels }],
		'from:game': [{ y: -pixels }, { y: pixels }],

		// fallback
		undefined: [{}, {}]
	};

	$: direction = $navigating
		? $navigating?.from?.route.id === '/'
			? $navigating?.to?.route.id === '/rule'
				? 'to:rule'
				: 'to:game'
			: $navigating?.from?.route.id === '/rule'
				? 'from:rule'
				: 'from:game'
		: undefined;
</script>

{#key data.url}
	<!-- <div in:fly={{ x: -400, duration: 600, delay: 600 }} out:fly={{ x: 400, duration: 600 }}> -->
	<div
		in:fly={{ ...directions[direction ?? 'undefined'][0], duration: 600, delay: 600 }}
		out:fly={{ ...directions[direction ?? 'undefined'][1], duration: 600 }}
	>
		<slot />
	</div>
{/key}

<style>
	div {
		display: grid;
		gap: 0;
	}
</style>
