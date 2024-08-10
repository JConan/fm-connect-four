<script lang="ts">
	import { onMount } from 'svelte';
	import Image from './Image.svelte';
	import { boardStore, gameCounterStore, isPause } from '$lib/stores/board';
	import type { PlayerColor } from '$lib/stores/board';
	import { fly } from 'svelte/transition';

	let current: PlayerColor = 'red';
	let timer = 30;

	$: playerLabel = current === 'red' ? "Player 1's" : "Player 2's";
	$: if ($gameCounterStore) {
		current = 'red';
		resetTimer(1000);
	}
	$: if ($boardStore.turn !== current) {
		current = $boardStore.turn;
		resetTimer(1000);
	}

	function resetTimer(milliseconds?: number) {
		timer = 30;
		if (milliseconds) {
			$isPause = true;
			setTimeout(() => {
				$isPause = false;
			}, milliseconds);
		}
	}

	onMount(() => {
		resetTimer(3000);
		const scheduler = setInterval(() => {
			if (!$isPause) timer = timer - 1;
		}, 1000);
		return () => {
			clearInterval(scheduler);
		};
	});
</script>

<div in:fly={{ delay: 1000, y: 300 }} class={`display-turn ${$boardStore.turn}`}>
	<Image name={`turn-background-${$boardStore.turn}`} />
	<span>{playerLabel} turn</span>
	<span class:pause={$isPause}>{timer}s</span>
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
			& > span.pause {
				color: #ffffff60;
			}
		}
		&.yellow {
			color: black;
			& > span.pause {
				color: #00000060;
			}
		}

		& > span {
			transition: color 250ms ease;
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
