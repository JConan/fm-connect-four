<script lang="ts">
	import { base } from '$app/paths';
	import { route } from '$lib/ROUTES';
	import Board from '$lib/components/Board.svelte';
	import Image from '$lib/components/Image.svelte';
	import { resetBoard } from '$lib/stores/board';
</script>

<main>
	<div class="menu">
		<a href={`${base}${route('/')}`} class="flat-button button-purple">Menu</a>
		<Image class="logo" name="logo" />
		<button
			class="flat-button button-purple"
			on:click={() => {
				resetBoard();
			}}>Restart</button
		>
	</div>
	<Board />

	<div class="display-turn">
		<Image name="turn-background-red" />
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
		:global(.logo) {
			width: 40px;
			height: 40px;
		}
	}
</style>
