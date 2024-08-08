<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	const imageSet = {
		'board-layer-black-large': false,
		'board-layer-black-small': false,
		'board-layer-white-large': false,
		'board-layer-white-small': false,
		'counter-red-large': false,
		'counter-red-small': false,
		'counter-yellow-large': false,
		'counter-yellow-small': false,
		cpu: false,
		check: false,
		'icon-check': false,
		logo: false,
		'marker-red': false,
		'marker-yellow': false,
		'player-one': false,
		'player-two': false,
		'player-vs-cpu': false,
		'player-vs-player': false,
		'turn-background-red': false,
		'turn-background-yellow': false,
		you: false
	};

	interface $$Props extends HTMLImgAttributes {
		name: ImageSet;
	}

	type ImageSet =
		| 'board-layer-black-large'
		| 'board-layer-black-small'
		| 'board-layer-white-large'
		| 'board-layer-white-small'
		| 'counter-red-large'
		| 'counter-red-small'
		| 'counter-yellow-large'
		| 'counter-yellow-small'
		| 'cpu'
		| 'check'
		| 'icon-check'
		| 'logo'
		| 'marker-red'
		| 'marker-yellow'
		| 'player-one'
		| 'player-two'
		| 'player-vs-cpu'
		| 'player-vs-player'
		| 'turn-background-red'
		| 'turn-background-yellow'
		| 'you';

	export let name: $$Props['name'];
</script>

<img src={name} alt="" />
