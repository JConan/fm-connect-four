<script lang="ts">
	import '../app.css';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import { navigating, page } from '$app/stores';
	import { fly } from 'svelte/transition';

	let pixels = 500;
	let directions: Record<string, [object, object]> = {
		// from home
		'to:rule': [{ y: pixels }, { y: -pixels }],
		'to:game': [{ y: -pixels }, { y: pixels }],

		// to home
		'from:rule': [{ y: -pixels }, { y: pixels }],
		'from:game': [{ y: pixels }, { y: -pixels }],

		fallback: [{}, {}]
	};

	$: direction = $navigating
		? $navigating?.from?.route.id === '/'
			? $navigating?.to?.route.id === '/rule'
				? 'to:rule'
				: 'to:game'
			: $navigating?.from?.route.id === '/rule'
				? 'from:rule'
				: 'from:game'
		: 'fallback';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div
	class="container"
	style={`background-color: ${innerWidth >= 640 && $page.route.id === '/' ? 'var(--dark-purple)' : 'var(--purple)'}`}
>
	{#key data.url}
		<!-- <div in:fly={{ x: -400, duration: 600, delay: 600 }} out:fly={{ x: 400, duration: 600 }}> -->
		<div
			in:fly={{ ...directions[direction][0], duration: 600, delay: 600 }}
			out:fly={{ ...directions[direction][1], duration: 600 }}
		>
			<slot />
		</div>
	{/key}
</div>

<style>
	.container {
		width: 100dvw;
		transition: background-color 300ms ease;
		overflow: auto;

		& > div {
			display: grid;
			place-items: center;
			gap: 0;
			height: 100dvh;
		}
	}
</style>
