<script lang="ts">
	import { onMount } from 'svelte';
	import Image from './Image.svelte';
	import { boardStore, gameCounterStore } from '$lib/stores/board';
	import type { PlayerColor } from '$lib/stores/board';

	let current: PlayerColor = 'red';
	let timer = 30;

	$: playerLabel = current === 'red' ? "Player 1's" : "Player 2's";
	$: if ($gameCounterStore) current = 'red';
	$: if ($boardStore.turn !== current) {
		current = $boardStore.turn;
		timer = 30;
	}

	onMount(() => {
		const scheduler = setInterval(() => {
			timer = timer - 1;
		}, 1000);
		return () => {
			clearInterval(scheduler);
		};
	});
</script>

<div class={`display-turn ${$boardStore.turn}`}>
	<Image name={`turn-background-${$boardStore.turn}`} />
	<span>{playerLabel} turn</span>
	<span>{timer}s</span>
</div>

<style>
	.display-turn {
		position: relative;
		z-index: 1;
		width: 197px;
		height: 165px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-size: cover;
		font-size: 16px;
		font-weight: 700;
		margin: auto;
		margin-top: -50px;

		&.red {
			color: white;
		}
		&.yellow {
			color: black;
		}

		& > span {
			margin-top: 20px;
			z-index: 1;
			&:first-child {
				text-transform: uppercase;
			}
		}
		& > span:last-child {
			font-size: 56px;
		}

		& > img {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}

	@media (max-width: 639px) {
		.display-turn {
			width: 191px;
			height: 150px;
			margin-top: -30px;
			margin-bottom: 15px;
		}
	}
</style>
