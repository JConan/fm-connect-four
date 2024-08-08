<script lang="ts">
	import { base } from '$app/paths';
	import type { HTMLImgAttributes } from 'svelte/elements';

	const imageSet = {
		'board-layer-black': true,
		'board-layer-white': true,
		'counter-red': true,
		'counter-yellow': true,
		'icon-check': false,
		'marker-red': false,
		'marker-yellow': false,
		'player-one': false,
		'player-two': false,
		'player-vs-cpu': false,
		'player-vs-player': false,
		'turn-background-red': false,
		'turn-background-yellow': false,
		cpu: false,
		check: false,
		logo: false,
		you: false
	};

	interface $$Props extends HTMLImgAttributes {
		name: keyof typeof imageSet;
	}

	export let name: $$Props['name'];
	let innerWidth: number;

	$: src = `${base}/images/${name}${imageSet[name] ? (innerWidth < 640 ? '-small' : '-large') : ''}.svg`;
</script>

<svelte:window bind:innerWidth />

<img {...$$restProps} {src} alt={name.replaceAll('-', ' ')} />
