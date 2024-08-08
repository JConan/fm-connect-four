<script lang="ts">
	import { base } from '$app/paths';
	import Board from '$lib/components/Board.svelte';
	import { route } from '$lib/ROUTES';
	import { inlineSvg } from '@svelte-put/inline-svg';
</script>

<main>
	<div class="menu">
		<a href={`${base}${route('/')}`} class="flat-button button-purple">Menu</a>
		<svg class="logo" use:inlineSvg={`${base}/images/logo.svg`}></svg>
		<button class="flat-button button-purple">Restart</button>
	</div>
	<Board />

	<div class="display-turn">
		<img src={`${base}/images/turn-background-red.svg`} alt="display turn" />
		<span>Player 1's turn</span>
		<span>3s</span>
	</div>
</main>

<style>
	main {
		position: relative;
		width: 632px;

		& .menu {
			display: flex;
			justify-content: space-between;
			margin-top: 50px;
			margin-bottom: 15px;
		}

		& .display-turn {
			position: relative;
			z-index: 1;
			width: 197px;
			height: 165px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: white;
			background-size: cover;
			font-size: 16px;
			font-weight: 700;
			margin: auto;
			margin-top: -50px;

			& > span {
				margin-top: 20px;
				text-transform: uppercase;
				z-index: 1;
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
	}

	@media (max-width: 639px) {
		main {
			width: 335px;
		}
		main .display-turn {
			width: 191px;
			height: 150px;
			margin-top: -30px;
		}
	}
</style>
